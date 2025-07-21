import SingleBook from './SingleBook.jsx'
import "./AllTheBooks.css";

function AllTheBooks({ foundBooks }) {

    if (!Array.isArray(foundBooks)) {
        return <p>Nessun libro trovato o dati non validi.</p>;
    }

    return (
        <>

            <div className='my-4 d-flex justify-content-center' style={{ flexWrap: 'wrap' }}>
                {
                    foundBooks.map((book) => (
                        <SingleBook
                            key={book.asin}
                            title={book.title}
                            img={book.img}
                            price={book.price}
                        />
                    ))
                }
            </div>
        </>
    )

}

export default AllTheBooks;
