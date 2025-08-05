import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router";
import styles from "./MyCommentArea.module.css";

function AddComment({ onCommentAdded }) {
  const { BookKey: bookId } = useParams();

  const [formData, setFormData] = useState({
    comment: "",
    rate: "1",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODgwY2IyOWM4OTY5YTAwMTU2OTY2OGUiLCJpYXQiOjE3NTMyNzEwODEsImV4cCI6MTc1NDQ4MDY4MX0.Tk2YPCLPvqbhn5UCMpDKj0lnmcjxQ9_ryr2_gsArmm4",
          },
          body: JSON.stringify({
            author: formData.email,
            comment: formData.comment,
            rate: formData.rate,
            elementId: bookId,
          }),
        }
      );

      if (response.ok) {
        setFormData({ comment: "", rate: "1", email: "" });
        onCommentAdded();  // correggo la chiamata
      } else {
        alert("Errore nell'invio del commento");
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className={styles.addCommentForm}
      noValidate
    >
      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Email utente</Form.Label>
        <Form.Control
          type="email"
          placeholder="Inserisci la tua email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formRating" className="mb-3">
        <Form.Label>Voto</Form.Label>
        <Form.Select name="rate" value={formData.rate} onChange={handleChange}>
          <option value="1">1 - Pessimo</option>
          <option value="2">2 - Scarso</option>
          <option value="3">3 - Nella media</option>
          <option value="4">4 - Buono</option>
          <option value="5">5 - Eccellente</option>
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="formComment" className="mb-3">
        <Form.Label>Recensione</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Scrivi la tua recensione"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="warning" type="submit">
        Invia commento
      </Button>
    </Form>
  );
}

export default AddComment;