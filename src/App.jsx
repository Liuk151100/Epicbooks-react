import Header from "./Header";
import MyFooter from "./MyFooter";
import Welcome from "./Welcome";
import AllTheBooks from "./AllTheBooks";
import { useEffect, useState } from "react";
import fantasy from "../books/fantasy.json";
import { BrowserRouter, Route, Routes } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import NotFound from "./NotFound";
import CommentArea from "./CommentArea";


function App() {
    const [BookSearch, setBookSearch] = useState('')
    const [FilterBook, setFilterBook] = useState(fantasy)
    let foundBooks = FilterBook.filter(book => book.title.toLowerCase().includes(BookSearch.toLowerCase()))
    const [active, setActive] = useState(new URLSearchParams(window.location.search).get('page') || 1);
    

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
                            <Route path="/" element={<AllTheBooks foundBooks={foundBooks} active={active} setActive={setActive}/>} />
                            <Route path="/CommentArea/:BookKey" element={<CommentArea />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Col>
                </Row>

            </Container>

            <MyFooter />

        </BrowserRouter>
    );
}

export default App;
