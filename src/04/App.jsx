import styles from "./styles.module.css";

export default function App() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <h2>Header</h2>
            </header>
            <nav className={styles.nav}>
                <h2>Global Menu</h2>
            </nav>
            <section className={styles.ads}>
                <h2>Ads</h2>
            </section>
            <section className={styles.context}>
                <h2>Context Menu</h2>
            </section>
            <section className={styles.main}>
                <h2>Main Content</h2>
            </section>
            <footer className={styles.footer}>
                <h2>Footer</h2>
            </footer>
        </div>
    )
}