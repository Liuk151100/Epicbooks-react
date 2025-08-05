import SingleBook from './SingleBook.jsx';
import { useState, useEffect, useMemo } from 'react';
import PaginationComponents from './PaginationComponents.jsx';
import { Container, Row, Col } from 'react-bootstrap';

function AllTheBooks({ foundBooks, active, setActive, setImgBookDetails }) {

    if (!Array.isArray(foundBooks)) {
        console.log('null')
        return <div style={{height:"65vh", display:"flex", justifyContent: "center"}}><p style={{marginTop: "20px"}}>Nessun libro trovato o dati non validi.</p></div>;
    }

    const [selectedBookKey, setSelectedBookKey] = useState(null);
    const [booksForPage, setBooksForPage] = useState([]);
    const [pages, setPages] = useState();

    useEffect(() => {
        setBooksForPage(foundBooks.slice((active - 1) * 20, active * 20));
        setPages(Math.ceil(foundBooks.length / 20));
    }, [foundBooks, active]);

    const booksList = useMemo(() => {
        return booksForPage.map((book) => (
            <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
                <SingleBook
                    keyBook={book.asin}
                    title={book.title}
                    img={book.img}
                    price={book.price}
                    isSelected={selectedBookKey === book.asin}
                    setSelectedBookKey={setSelectedBookKey}
                    selectedBookKey={selectedBookKey}
                    setImgBookDetails={setImgBookDetails}
                />
            </Col>
        ));
    }, [booksForPage, selectedBookKey]);

    return (
        <>
            <PaginationComponents pages={pages} active={active} setActive={setActive} />

            <Container className="my-4">
                <Row>
                    {booksList}
                </Row>
            </Container>

            <PaginationComponents pages={pages} active={active} setActive={setActive} />
        </>
    );
}

export default AllTheBooks;

