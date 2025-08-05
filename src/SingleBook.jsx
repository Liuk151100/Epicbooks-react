import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from "./SingleBook.module.css";
import { Link} from 'react-router';

function SingleBook({ keyBook, title, img, price, setSelectedBookKey, selectedBookKey, setImgBookDetails }) {
    const [hovered, setHovered] = useState(false);

    const handleClick = () => {
        setSelectedBookKey(selectedBookKey === keyBook ? null : keyBook);
    };

    return (
        <Card
            className={`shadow-sm position-relative w-100 h-100 ${hovered ? styles.cardHover : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Card.Img
                variant="top"
                src={img}
                onClick={handleClick}
                style={{ objectFit: 'cover', height: '300px', cursor: 'pointer' }}
            />
            <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    <Card.Title className="fw-bold">{title}</Card.Title>
                    <Card.Text className="text-secondary small">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, odio.
                    </Card.Text>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-primary">{price} €</span>
                    <small className="text-muted">Ultimo aggiornamento 3 min fa</small>
                </div>
            </Card.Body>

            {hovered && (
                <div className={`${styles.overlay}`}>
                    <Link
                        className={styles.btnDetailBook}
                        to={`/CommentArea/${keyBook}`}
                        onClick={() => setImgBookDetails(img)}
                    >
                        View Details
                    </Link>
                </div>
            )}
        </Card>
    );
}

function areEqual(prevProps, nextProps) {
    const keysToCompare = ['keyBook', 'title', 'img', 'price'];
    for (let key of keysToCompare) {
        if (prevProps[key] !== nextProps[key]) return false;
    }
    if (prevProps.isSelected !== nextProps.isSelected) return false;
    return true;
}

export default React.memo(SingleBook, areEqual);




