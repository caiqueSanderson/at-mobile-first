import { useState } from "react";
import styles from "./styles.module.css";

export default function App() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <div className={styles.containerCount}>
                <button className={styles.buttons} onClick={decrement}>-</button>
                <span>{count}</span>
                <button className={styles.buttons} onClick={increment}>+</button>
            </div>
            <div className={styles.containerImages}>
                {count > 0 && Array.from({ length: count }).map((_, index) => (
                    <img
                        key={index}
                        src="https://img.myloview.com.br/adesivos/foto-nao-encontrada-icone-vector-simbolo-sinal-400-133715057.jpg"
                        alt={`Imagem ${index + 1}`}
                        className={styles.image}
                    />
                ))}
            </div>
        </>
    )
}