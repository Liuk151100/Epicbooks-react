import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router";
import CommentList from "./CommentList";

function CommentArea() {
    // console.log(bookKey)

    const [data, setData] = useState([]);
    const { BookKey: bookKey } = useParams()

    useEffect(() => {
        console.log(bookKey)
        Fetch(bookKey)
        async function Fetch(bookKey) {
            try {
                console.log("sono nella funzione")

                const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${bookKey}/comments/`, {

                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODgwY2IyOWM4OTY5YTAwMTU2OTY2OGUiLCJpYXQiOjE3NTMyNzEwODEsImV4cCI6MTc1NDQ4MDY4MX0.Tk2YPCLPvqbhn5UCMpDKj0lnmcjxQ9_ryr2_gsArmm4",
                    },

                })

                const results = await response.json()



                if (results != []) {
                    console.log(results)
                    setData(results)
                    return (

                        <div className='' style={{ margin: "10px", height: "100vh", border: "1.5px solid rgba(0, 0, 0, 0.175)", borderRadius: "10px" }}>

                            <CommentList data={data} />

                        </div>
                    )

                }


            }
            catch (e) {
                console.log(e)
            }
        }

    }, [bookKey])


}



export default CommentArea


