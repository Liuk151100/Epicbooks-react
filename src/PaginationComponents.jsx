// import { useState } from "react";
// import { Pagination } from "react-bootstrap"

// function PaginationComponents({ pages, active, setActive }) {

//     let items = [];
//     console.log(pages)
//     for (let number = 1; number <= pages; number++) {
//         items.push(
//             <Pagination.Item key={number} active={number == active} onClick={() => handlePage(number)}>
//                 {number}
//             </Pagination.Item>,
//         );
//     }
//     function handlePage(newPage) {
//         // window.location.search = ?page=${newPage}; NOPE
//         const url = new URL(window.location);
//         url.searchParams.set("page", newPage);
//         /**
         
//     window.history.pushState(stateObj, title, url)
//     stateObj -> oggetto per salvare i dati di stato
//     title -> titolo della pagina (ignorato)
//     url -> url della pagina
//     => questo non fa reload, prima mi prendo l'url in una variabile e modifico questa così non perdo la categoria*/
//         window.history.pushState({}, "", url);
//         setActive(newPage);
//     }

//     return (
//         <Pagination size="lg" style={{ padding: "20px", display: "flex", justifyContent: "center" }}>{items}</Pagination>
//     )
// }

// export default PaginationComponents


import { Pagination } from "react-bootstrap";
import styles from "./PaginationComponents.module.css"; // <-- IMPORT CORRETTO

function PaginationComponents({ pages, active, setActive }) {
  const handlePage = (newPage) => {
    const url = new URL(window.location);
    url.searchParams.set("page", newPage);
    window.history.pushState({}, "", url);
    setActive(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPaginationItems = () => {
    const items = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, active - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > pages) {
      endPage = pages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    if (startPage > 1) {
      items.push(
        <Pagination.Item key={1} onClick={() => handlePage(1)}>
          1
        </Pagination.Item>
      );
      if (startPage > 2) items.push(<Pagination.Ellipsis key="start-ellipsis" disabled />);
    }

    for (let number = startPage; number <= endPage; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={() => handlePage(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    if (endPage < pages) {
      if (endPage < pages - 1) items.push(<Pagination.Ellipsis key="end-ellipsis" disabled />);
      items.push(
        <Pagination.Item key={pages} onClick={() => handlePage(pages)}>
          {pages}
        </Pagination.Item>
      );
    }

    return items;
  };

  return (
    <div className="d-flex justify-content-center my-4">
      <Pagination
        size="lg"
        className={`${styles.paginationCustom} shadow-sm`}
      >
        <Pagination.Prev
          onClick={() => active > 1 && handlePage(active - 1)}
          disabled={active === 1}
          className={styles.pageNav}
        />
        {renderPaginationItems()}
        <Pagination.Next
          onClick={() => active < pages && handlePage(active + 1)}
          disabled={active === pages}
          className={styles.pageNav}
        />
      </Pagination>
    </div>
  );
}

export default PaginationComponents;