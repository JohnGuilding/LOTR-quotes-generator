import axios from "axios";
import { useState } from "react";

import { bearerToken } from './Auth';
import "./App.css";

const App = () => {
    const [quote, setQuote] = useState([]);

    const fetchQuote = () => {
        axios.get("https://the-one-api.dev/v2/quote", {
            headers: {
                'Authorization': `Bearer ${bearerToken}`,
            },
        })
            .then((data) => {
                const randomNumber = Math.floor(Math.random() * 1000);
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
