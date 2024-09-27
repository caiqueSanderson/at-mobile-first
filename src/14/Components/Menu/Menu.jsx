import { useState } from "react";

import styles from "./styles.module.css";
import { FaMoon } from "react-icons/fa";

export default function Menu({ toggleTheme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className={styles.navbar}>
            <img
                className={styles.logo}
                src="https://curso.infnet.com.br/c/wp-content/uploads/sites/5/2022/12/Infnet-Logo.png"
                alt="Logo"
            />
            <div className={`${styles.menu} ${isMenuOpen ? styles.show : ""}`}>
                <a href="#" className={styles.item}>
                    <span className={styles.label}>Perfil</span>
                </a>
                <a href="#" className={styles.item}>
                    <span className={styles.label}>Forúm</span>
                </a>
                <a href="#" className={styles.item}>
                    <span className={styles.label}>Amigos</span>
                </a>
                <a href="#" className={styles.item}>
                    <span className={styles.label} onClick={toggleTheme}><FaMoon /></span>
                </a>
            </div>

            <span className={styles.menuToggle} onClick={toggleMenu} > ☰ </span>
        </nav>
    )
}