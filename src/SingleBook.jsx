import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import styles from "./SingleBook.module.css";
import { Link} from 'react-router';

function SingleBook({ keyBook, title, img, price, setSelectedBookKey, selectedBookKey }) {

    const handleClick = () => {
        if (selectedBookKey != keyBook) {
            setSelectedBookKey(keyBook);
        } else {
            setSelectedBookKey(null)
        }
    };
    const [btnViewDetails, setBtnViewDetails] = useState('none')

    const forViewBtnDetail = () => {
        setBtnViewDetails('block')

    }
    const forHiddenBtnDetail = () => {
        setBtnViewDetails('none')
    }

    return (

        <Card style={{ width: '40%', alignItems: 'center', margin: '10px', flexDirection: 'row' }} className='cardAdaptiveWidth' onMouseOver={forViewBtnDetail} onMouseOut={forHiddenBtnDetail}>
            <div
                className='contImgAdaptiveWidth'
                style={{
                    height: '100%',
                    width: '50%',
                    // border: isSelected ? 'solid 3px red' : 'none',
                }}>
                <Card.Img
                    style={{
                        height: '100%',
                        width: '100%',

                    }}
                    src={img}
                    onClick={handleClick}
                />
            </div>

            <Card.Body style={{ width: '50%'/*, fontSize: isSelected ? '0.9em' : '1em'*/ }}>
                <h4>{title}</h4>

                <p className="text-body-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus et enim, earum, alias, sit consequatur dolor nobis iste laborum error ducimus deserunt. Laborum, iure quis.</p>

                <h4>{price}€</h4>

                <p className="text-body-secondary" >Ultimo aggiornamento 3 minuti fa</p>
            </Card.Body>

            <div style={{ display: `${btnViewDetails}`, width: '100%', height: '100%', backgroundColor: 'rgb(126 128 128 / 74%)', position: 'absolute' }}>
                <Link className={styles.btnDetailBook} to={`CommentArea/${keyBook} `}>View Details</Link>
            </div>

        </Card>
    );
}

// ✅ Memo con confronto personalizzato
function areEqual(prevProps, nextProps) {
    const keysToCompare = ['keyBook', 'title', 'img', 'price'];

    for (let key of keysToCompare) {
        if (prevProps[key] !== nextProps[key]) return false;
    }

    // Solo re-render se cambia isSelected
    if (prevProps.isSelected !== nextProps.isSelected) return false;

    return true; // Altrimenti evita il re-render
}

export default React.memo(SingleBook, areEqual);





