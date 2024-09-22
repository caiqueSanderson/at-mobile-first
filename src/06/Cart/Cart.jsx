import styles from "./styles.module.css";

export default function Cart(props){
    const totalPrice = props.items.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    
    return(
        <div className={styles.cart}>
            <h1 className={styles.title}>Compras</h1>
            <ul>
                {props.items.map((item) => (
                    <li key={item.id} className={styles.product}>
                        <h2>{item.product}</h2>
                        <h4>Preço Unitário: R${item.price}</h4>
                        <h4>Quantidade: {item.quantity}</h4>
                        <h3>Preço: {item.price * item.quantity}</h3>
                    </li>
                ))}
            </ul>
            <h2 className={styles.totalPrice}>Valor da Compra: {totalPrice}</h2>
        </div>
    )
}