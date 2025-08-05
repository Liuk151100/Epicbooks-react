import Header from "./Header";
import Footer from "./Footer";
import AllTheBooks from "./AllTheBooks";
import { useEffect, useState } from "react";
import fantasy from "../books/fantasy.json";
import { BrowserRouter, Route, Routes } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import NotFound from "./NotFound";
import CommentArea from "./CommentArea";
import About from "./About";


function App() {
    const [BookSearch, setBookSearch] = useState('')
    const [FilterBook, setFilterBook] = useState(fantasy)
    let foundBooks = FilterBook.filter(book => book.title.toLowerCase().includes(BookSearch.toLowerCase()))
    const [active, setActive] = useState(new URLSearchParams(window.location.search).get('page') || 1);
    const [imgBookDetails, setImgBookDetails] = useState(null)


    useEffect(() => {
        setActive(1)
    }, [FilterBook])

    return (
        <BrowserRouter>
            <Header BookSearch={BookSearch} setBookSearch={setBookSearch} setFilterBook={setFilterBook} setActive={setActive} />

            <Container>

                <Row>
                    <Col>

                        <Routes>
                            <Route path="/" element={<AllTheBooks foundBooks={foundBooks} active={active} setActive={setActive} setImgBookDetails={setImgBookDetails} />} />
                            <Route path="/CommentArea/:BookKey" element={<CommentArea imgBookDetails={{ imgBookDetails: imgBookDetails }} />} />
                            <Route path="/About" element={<About />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Col>
                </Row>

            </Container>

            <Footer />

        </BrowserRouter>
    );
}

export default App;
