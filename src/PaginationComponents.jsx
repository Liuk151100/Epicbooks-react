import { useState } from "react";
import { Pagination } from "react-bootstrap"

function PaginationComponents({ pages, active, setActive }) {

    let items = [];
    console.log(pages)
    for (let number = 1; number <= pages; number++) {
        items.push(
            <Pagination.Item key={number} active={number == active} onClick={() => handlePage(number)}>
                {number}
            </Pagination.Item>,
        );
    }
    function handlePage(newPage) {
        // window.location.search = ?page=${newPage}; NOPE
        const url = new URL(window.location);
        url.searchParams.set("page", newPage);
        /**
         
    window.history.pushState(stateObj, title, url)
    stateObj -> oggetto per salvare i dati di stato
    title -> titolo della pagina (ignorato)
    url -> url della pagina
    => questo non fa reload, prima mi prendo l'url in una variabile e modifico questa così non perdo la categoria*/
        window.history.pushState({}, "", url);
        setActive(newPage);
    }

    return (
        <Pagination size="lg" style={{ padding: "20px", display: "flex", justifyContent: "center" }}>{items}</Pagination>
    )
}

export default PaginationComponents