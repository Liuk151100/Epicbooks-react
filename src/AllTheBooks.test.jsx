import { render, screen } from "@testing-library/react";
import { expect, it, test } from "vitest";
import AllTheBooks from "./AllTheBooks";
//Al posto di it si può usare test ma sono esattamente la stessa cosa. Quello che sta dentro i primi apici è quello che esce sul terminale quando parte il test
test('renders the content', () => {
    //inserire il componente da testare per renderizzare il componente
    render(<AllTheBooks foundBooks={null} />)

    //selezioniamo i componenti dal DOM virtuale. Inserire le / all'inizio e alla fine della stringa e la i alla fine, serve per rendere il test no sensitive
    expect(screen.getByText(/Nessun libro trovato o dati non validi./i)).toBeInTheDocument();
})

//Codice del test con il timeout per creare un attesa prima di fare il test

// import { describe, expect, it } from "vitest";
// import { render, screen, waitFor } from "@testing-library/react";
// import App from "../App";

// describe ('testiamo applicazione', () => {
// it ('renders welcome',()=> {
// render(<App/>)
// expect(screen.getByText(/Hey, Nice To See You/i)).toBeInTheDocument()
// });
// it('render allthebooks after sometime', async () => {
// render(<App/>)
// await waitFor(() => {
// expect(screen.queryByText(/The Last Wish/i)).toBeInTheDocument()
// }, {timeout : 7000} )
// },10000)

// })
