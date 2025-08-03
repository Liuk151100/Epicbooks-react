import { render, screen } from "@testing-library/react";
import { expect, it, test } from "vitest";
import SingleBook from "./SingleBook";
//Al posto di it si può usare test ma sono esattamente la stessa cosa. Quello che sta dentro i primi apici è quello che esce sul terminale quando parte il test
test('renders the content', () => {
    //inserire il componente da testare per renderizzare il componente
    render(<SingleBook foundBooks={null} />)

    //selezioniamo i componenti dal DOM virtuale. Inserire le / all'inizio e alla fine della stringa e la i alla fine, serve per rendere il test no sensitive
    expect(screen.getByText(/Ultimo aggiornamento 3 minuti fa/i)).toBeInTheDocument();
})