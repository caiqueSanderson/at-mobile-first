import styles from "./styles.module.css";
import { useState } from "react";

export default function Cart(props) {
    const [score, setScore] = useState(0);
    const [guess, setGuess] = useState("")

    function submitAnswer(e, item) {
        e.preventDefault();
        if (item.answer.toLowerCase() === guess.toLowerCase()) {
            setScore(score + 100);
        } else {
            setScore(score - 100);
        }
        setAnswer("");
        setGuess("");
    }

    return (
        <div className={styles.cart}>
            <h1 className={styles.title}>Quiz</h1>

            {props.items.map((item) => (
                <form onSubmit={(e) => submitAnswer(e , item)} key={item.id} className={styles.form}>
                    <h2>{item.question}</h2>
                    <h4>A: {item.a}</h4>
                    <h4>B: {item.b}</h4>
                    <h4>C: {item.c}</h4>
                    <h4>D: {item.d}</h4>

                    <input type="text" value={guess} onChange={(e) => setGuess(e.target.value)} />
                    <button type="submit">Concluir</button>
                </form>
            ))}

            <h2 className={styles.totalPrice}>Pontuação: {score}</h2>
        </div >
    )
}