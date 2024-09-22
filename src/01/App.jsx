import styles from "./styles.module.css";

export default function App() {
    return (
        <>
            <nav className={styles.navbar}>
                <img
                    className={styles.logo}
                    src="https://curso.infnet.com.br/c/wp-content/uploads/sites/5/2022/12/Infnet-Logo.png"
                    alt="Logo"
                />
                <div>
                    <a href="#" className={styles.item}>
                        <span className={styles.label}>Produtos</span>
                    </a>
                    <a href="#" className={styles.item}>
                        <span className={styles.label}>Serviços</span>
                    </a>
                    <a href="#" className={styles.item}>
                        <span className={styles.label}>Contatos</span>
                    </a>
                </div>

                <span className={styles.menuToggle}> ☰ </span>
            </nav>
        </>
    )
}