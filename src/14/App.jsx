import Menu from "./Components/Menu/Menu";
import Feed from "./Components/Feed/Feed";
import Card from "./Components/Card/Card";
import { useState } from "react";

export default function App() {
    const [isLightTheme, setIsLigthTheme] = useState(true);
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function toggleTheme() {
        setIsLigthTheme(!isLightTheme);
    };

    const comments = [
        { id: 1, answer: "Esta é a primeira resposta.", autor: "João Silva", data_publicacao: new Date(2023, 11, 25) },
        { id: 2, answer: "Uma segunda resposta, mais detalhada.", autor: "Maria Santos", data_publicacao: new Date(2024, 0, 15) },
        { id: 3, answer: "Resposta curta e objetiva.", autor: "Pedro Almeida", data_publicacao: new Date(2023, 9, 5) },
        { id: 4, answer: "Uma resposta mais longa, com muitos detalhes.", autor: "Ana Oliveira", data_publicacao: new Date(2024, 2, 10) },
        { id: 5, answer: "A última resposta do conjunto.", autor: "Carlos Pereira", data_publicacao: new Date(2023, 7, 20) }
      ];

return (
    <>
        <Menu toggleTheme={toggleTheme} />
        <Feed theme={isLightTheme} count={count} increment={increment} length={comments.length}/>
        {
            comments.map((comment) => {
                <Card key={comment.id} comment={comment}/>
            })
        }
    </>
)
}