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
                <img
                    className={styles.logo}
                    src="https://static.thenounproject.com/png/363640-200.png"
                    alt="Logo"
                />
                <div className={`${styles.options} ${isMenuOpen ? styles.show : "none"}`}>
                    <a href="#">Opcao 1</a>
                    <a href="#">Opcao 2</a>
                    <a href="#">Opcao 3</a>
                    <a href="#">Opcao 4</a>
                </div>
            </nav>
        </>
    )
}