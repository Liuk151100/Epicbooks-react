import { render, screen } from "@testing-library/react";
import { expect, it, test } from "vitest";
import SingleBook from "./SingleBook";
//Al posto di it si può usare test ma sono esattamente la stessa cosa. Quello che sta dentro i primi apici è quello che esce sul terminale quando parte il test
test('renders the content', () => {
    const book = {
    "asin": "0756617723",
    "title": "World Religions: The Great Faiths Explored and Explained",
    "img": "https://images-na.ssl-images-amazon.com/images/I/71ZW3135BsL.jpg",
    "price": 13.89,
    "category": "history"
  }
    //inserire il componente da testare per renderizzare il componente
    render(<SingleBook keyBook={book.asin}
                    title={book.title}
                    img={book.img}
                    price={book.price} />)

    //selezioniamo i componenti dal DOM virtuale. Inserire le / all'inizio e alla fine della stringa e la i alla fine, serve per rendere il test no sensitive
    expect(screen.getByText(/Ultimo aggiornamento 3 minuti fa/i)).toBeInTheDocument();
})