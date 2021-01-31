import axios from "axios";
import { useState } from "react";

import "./App.css";

const App = () => {
    const [quote, setQuote] = useState([]);

    // Authorization: Bearer your-api-key-123
    // 47HBzvID930-ogANJVc5

    // axios.get("https://the-one-api.dev/v2/quote/{id}", {


    const fetchQuote = () => {
        axios.get("https://the-one-api.dev/v2/quote", {
            headers: {
                Authorization: "Bearer 47HBzvID930-ogANJVc5",
            },
        })
            .then((data) => {
                const randomNumber = Math.floor(Math.random() * 1000);
                console.log(data.data.docs[randomNumber].dialog);
                setQuote(data.data.docs[randomNumber].dialog);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <header>
                <h1>One API to rule them all</h1>
            </header>
            <section>
                <h2>api stuff here</h2>
                <button onClick={fetchQuote}>
                    click here for a lord of the rings quote
                </button>
                <p>{quote}</p>
            </section>
        </>
    );
};

export default App;
