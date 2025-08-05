import { useMemo } from "react";
import { Card } from "react-bootstrap";
import styles from "./MyCommentArea.module.css";
import { Link } from "react-router";

function CommentList({ data }) {

    async function deleteComment(comment) {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODgwY2IyOWM4OTY5YTAwMTU2OTY2OGUiLCJpYXQiOjE3NTMyNzEwODEsImV4cCI6MTc1NDQ4MDY4MX0.Tk2YPCLPvqbhn5UCMpDKj0lnmcjxQ9_ryr2_gsArmm4",
                    },
                }
            );
            const results = await response.json();
        } catch (e) {
            console.error("Errore nel fetch per eliminare i commenti:", e);
        }
    }

    const commentlist = useMemo(() => {
        return data.map((comment) => (
            <div className={styles.commentCard} key={comment._id}>
                <Card>
                    <div className={styles.commentHeader}>
                        <span>{comment.author}</span>
                        <span>{comment.rate}⭐️</span>
                    </div>
                    <Card.Body className={styles.commentBody}>{comment.comment}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Link>Edit</Link>
                            <Link onClick={deleteComment(comment)}>Delete</Link>
                        </div>
                    </Card.Body>

                </Card>
            </div>
        ));
    }, [data]);

    return <>{commentlist}</>;
}

export default CommentList;