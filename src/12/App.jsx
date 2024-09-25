import Cart from "./Cart/Cart";

export default function App() {
    const items = [
        {id : 1, product:"Acer Aspire 5", price:2900.00, quantity: 1},
        {id : 2, product:"Monitor Samsung T350", price:570.00, quantity: 2},
        {id : 3, product:"Zelda Breath of the Wild", price:300.00, quantity: 1},
    ]
    return (
        <>
            <Cart items={items} />
        </>
    )
}