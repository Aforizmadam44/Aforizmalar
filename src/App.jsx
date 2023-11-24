import { useEffect, useState } from "react";
import styles from "./style.module.css";

function App() {
  const [quotes, setQuotes] = useState("");

  const getQuote = () => {
    fetch("http://localhost:3000/aforizma")
      .then((res) => res.json())
      .then((data) => {
        let randomQuotes = Math.floor(Math.random() * data.length);
        setQuotes(data[randomQuotes]);
        console.log(data[randomQuotes]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <>
      <h1 className={styles.title}>Random aforizmalar</h1>
      <div className={styles.container}>
        <div className={styles.mini}>
          <p>{quotes.aforizma}</p>
        </div>

        <button className={styles.button} onClick={getQuote}>
          Aforizma Göster
        </button>
      </div>
    </>
  );
}

export default App;
