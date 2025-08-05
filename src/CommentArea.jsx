import { useParams } from "react-router";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { CardImg, Col, Container, Row } from "react-bootstrap";
import LottieBookSpinner from "./spinner/LottieBookSpinner";
import { useEffect, useState } from "react";
import styles from "./MyCommentArea.module.css";

function CommentArea({ imgBookDetails }) {
  const { BookKey: bookKey } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Stato per immagine libro gestito con fallback localStorage
  const [bookImage, setBookImage] = useState(() => {
    const saved = localStorage.getItem("bookImage");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (imgBookDetails?.imgBookDetails) {
      localStorage.setItem("bookImage", JSON.stringify(imgBookDetails));
      setBookImage(imgBookDetails);
    }
  }, [imgBookDetails]);

  // Fetch commenti
  const fetchCommentsAgain = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/${bookKey}/comments/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODgwY2IyOWM4OTY5YTAwMTU2OTY2OGUiLCJpYXQiOjE3NTMyNzEwODEsImV4cCI6MTc1NDQ4MDY4MX0.Tk2YPCLPvqbhn5UCMpDKj0lnmcjxQ9_ryr2_gsArmm4",
          },
        }
      );
      const results = await response.json();
      if (Array.isArray(results)) {
        setData(results);
      }
    } catch (e) {
      console.error("Errore nel fetch dei commenti:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (bookKey) {
      fetchCommentsAgain();
    }
  }, [bookKey]);

  if (loading) return <LottieBookSpinner />;

  return (
    <Container className={styles.container}>
      <Row>
        <Col md={3} xs={12}>
          <CardImg
            className={styles.bookImage}
            src={bookImage?.imgBookDetails || "/placeholder.jpg"}
            alt="Copertina libro"
          />
        </Col>
        <Col md={9} xs={12} className={styles.commentsSection}>
          <AddComment onCommentAdded={fetchCommentsAgain} />
          <CommentList data={data} />
        </Col>
      </Row>
    </Container>
  );
}

export default CommentArea;