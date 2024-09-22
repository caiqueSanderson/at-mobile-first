import styles from "./styles.module.css";

export default function App() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.top}>
                    <img
                        className={styles.logo}
                        src="https://curso.infnet.com.br/c/wp-content/uploads/sites/5/2022/12/Infnet-Logo.png"
                        alt="Logo"
                    />

                    <span className={styles.menuToggle}> ☰ </span>
                </div>

                <div className={styles.menuItem}>
                    <a href="#" className={styles.item}>
                        <span>Perfil</span>
                    </a>
                    <a href="#" className={styles.item}>
                        <span>Postagens</span>
                    </a>
                    <a href="#" className={styles.item}>
                        <span>Amigos</span>
                    </a>
                    <a href="#" className={styles.item}>
                        <span>Fotos</span>
                    </a>
                    <a href="#" className={styles.item}>
                        <span>Vídeos</span>
                    </a>
                    <a href="#" className={styles.item}>
                        <span>Configurações</span>
                    </a>
                </div>
            </nav>
        </>
    )
}