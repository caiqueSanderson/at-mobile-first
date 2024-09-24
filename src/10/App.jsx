import styles from "./styles.module.css";
import { useState } from "react";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu(){
      setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className={styles.navbar}>
                <span className={styles.menuToggle} onClick={toggleMenu}> ☰ </span>
                <span className={styles.brand}>Brand</span>
                <div className={`${styles.options} ${isMenuOpen ? styles.show : "none"}`}>
                    <a href="#">Opcão 1</a>
                    <a href="#">Opcão 2</a>
                    <a href="#">Opcão 3</a>
                    <a href="#">Opcão 4</a>
                </div>
                <img
                    className={styles.logo}
                    src="https://static.thenounproject.com/png/363640-200.png"
                    alt="Logo"
                />
            </nav>
        </>
    )
}