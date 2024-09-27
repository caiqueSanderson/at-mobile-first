import styles from "./styles.module.css";
import { useState } from "react";

export default function Cart(props) {
    const [score, setScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [guess, setGuess] = useState("");

    function submitAnswer(e, item) {
        e.preventDefault();
        setShowAnswer(!showAnswer);
        if (item.answer.toLowerCase() === guess.toLowerCase()) {
            setScore(score + 100);
        } else {
            setScore(score - 100);
        }
        setGuess("");
    }

    return (
        <>
            <h1 className={styles.title}>Quiz</h1>
            <div className={styles.card}>
                {props.items.map((item) => (
                    <form onSubmit={(e) => submitAnswer(e, item)} key={item.id} className={styles.form}>
                        <h2>{item.id}. {item.question}</h2>
                        <h4>A: {item.a}</h4>
                        <h4>B: {item.b}</h4>
                        <h4>C: {item.c}</h4>
                        <h4>D: {item.d}</h4>

                        <input type="text" value={guess} onChange={(e) => setGuess(e.target.value)} />
                        <button type="submit">Concluir</button>
                        <h4 className={`${styles.answer} ${showAnswer ? styles.show : ""}`}>Resposta correta: {item.answer}</h4>
                    </form>
                ))}

                <h2 className={styles.score}>Pontuação: {score}</h2>
            </div >
        </>
    )
}