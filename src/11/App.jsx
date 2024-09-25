import styles from "./styles.module.css";
import { useState } from "react";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className={styles.page}>
            <nav className={styles.nav}>
                <span className={styles.menuToggle} onClick={toggleMenu}> ☰ </span>
                <h2>Global Menu</h2>
                <div className={`${styles.options} ${isMenuOpen ? styles.show : "none"}`}>
                    <a href="#">Opcão 1</a>
                    <a href="#">Opcão 2</a>
                    <a href="#">Opcão 3</a>
                    <a href="#">Opcão 4</a>
                </div>
            </nav>
            <header className={styles.header}>
                <h2>Header</h2>
            </header>
            <section className={styles.context}>
                <h2>Context Menu</h2>
            </section>
            <section className={styles.main}>
                <h2>Main Content</h2>
            </section>
            <section className={styles.ads}>
                <h2>Ads</h2>
            </section>
            <footer className={styles.footer}>
                <h2>Footer</h2>
            </footer>
        </div>
    )
}