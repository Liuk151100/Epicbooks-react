
import SingleBook from './SingleBook.jsx';
import { useState, useEffect, useMemo, Container, Raw, Col } from 'react';
import PaginationComponents from './PaginationComponents.jsx';


function AllTheBooks({ foundBooks, active, setActive}) {

    if (!Array.isArray(foundBooks)) {
        console.log('null')
        return <p>Nessun libro trovato o dati non validi.</p>;
    }

    const [selectedBookKey, setSelectedBookKey] = useState(null);
    const [booksForPage, setBooksForPage] = useState([])
    const [pages, setPages] = useState();
    


    useEffect(() => {
        console.log(foundBooks.length)
        setBooksForPage(foundBooks.slice((active - 1) * 20, active * 20))
        setPages(Math.ceil(foundBooks.length / 20))
    }, [foundBooks,active])



    // ✅ Memoizza il render dei libri solo se foundBooks cambia
    const booksList = useMemo(() => {

        return booksForPage.map((book) => (
            <SingleBook
                key={book.asin}
                keyBook={book.asin}
                title={book.title}
                img={book.img}
                price={book.price}
                isSelected={selectedBookKey === book.asin}
                setSelectedBookKey={setSelectedBookKey}
                selectedBookKey={selectedBookKey}
            />
        ));
    }, [booksForPage, selectedBookKey]);


    return (
        <>
            <div>
                <PaginationComponents pages={pages} active={active} setActive={setActive} />
            </div>

            <div className='my-4' style={{ flexWrap: 'wrap' }}>
                <div className='d-flex'>
                    <div className='d-flex justify-content-center' style={{ flexWrap: 'wrap' }}>
                        {booksList}
                    </div>
                </div>
            </div>

            <div>
                <PaginationComponents pages={pages} active={active} setActive={setActive} />
            </div>
        </>
    );
}

export default AllTheBooks;

