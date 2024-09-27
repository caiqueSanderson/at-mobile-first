import styles from "./styles.module.css";

export default function Card({comment}){
    return (
        <section className={styles.comment}>

            <div className={styles.information}>
                <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="Foto pessoal" />
                <div className={styles.data}>
                    <span>{comment.autor}</span>
                    <span>{comment.data_publicacao}</span>
                </div>
            </div>

            <div className={styles.answer}>
                <span>{comment.answer}</span>
            </div>

        </section>
    )
}