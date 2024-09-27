import styles from "./styles.module.css";
import { FaRegHeart, FaHeart, FaComment } from "react-icons/fa";

export default function Feed(props) {
    return (
        <section className={styles.aboutMe}>
            <div className={styles.information}>
                <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="Foto pessoal" />
                <div className={styles.data}>
                    <span>Autor</span>
                    <span>Data Publicação</span>
                </div>
            </div>

            <div className={styles.description}>
                <h2>Titulo</h2>
                <h5>Subtitulo</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                    cupiditate at non repudiandae cum nobis delectus tempora, sapiente ad
                    ab vero neque itaque mollitia porro adipisci a iste aperiam
                    consequuntur!.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                    cupiditate at non repudiandae cum nobis delectus tempora, sapiente ad
                    ab vero neque itaque mollitia porro adipisci a iste aperiam
                    consequuntur!.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                    cupiditate at non repudiandae cum nobis delectus tempora, sapiente ad
                    ab vero neque itaque mollitia porro adipisci a iste aperiam
                    consequuntur!.
                </p>
            </div>

            <div className={styles.interaction}>
                <span>
                    <a onClick={props.increment}>{props.count < 0 ? <FaRegHeart /> : <FaHeart color="red" />}</a>
                    <span>{props.count}</span>
                </span>
                <span>
                    <a><FaComment /></a>
                    <span>{props.length}</span>
                </span>
            </div>

            {/* <div className={styles.others-informations}>
                <div className={styles.friends}>
                    <h2>Amigos:</h2>
                    <div className={styles.container-images">
                        <img src="/14/public/avatar.svg" alt="" />
                        <img src="/14/public/avatar.svg" alt="" />
                        <img src="/14/public/avatar.svg" alt="" />
                    </div>
                </div> */}

            {/* <div className={styles.suggestions}>
                    <h2>Sugestões:</h2>
                    <div className={styles.container-images}>
                        <img src="/14/public/avatar.svg" alt="" />
                        <img src="/14/public/avatar.svg" alt="" />
                        <img src="/14/public/avatar.svg" alt="" />
                    </div>
                </div> */}
            {/* </div> */}
        </section>
    )
}