import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe('testiamo applicazione', () => {
    //Al posto di it si può usare test ma sono esattamente la stessa cosa. Quello che sta dentro i primi apici è quello che esce sul terminale quando parte il test
    it('not render welcome after sometime', async () => {
        render(<App />)
        await waitFor(() => {
            expect(screen.getByText(/Welcome in your library/i)).toBeInTheDocument()
        }, { timeout: 5000 })
    })
    
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