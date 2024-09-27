import Card from "./Card/Card";

export default function App() {
    const items = [
        {id : 1, question:"Qual técnica é usada para criar um layout responsivo?", a:"Media queries", b: "Tabelas HTML", c: "Frames", d: "Porcentagem", answer:"A"},
        {id : 2, question:"O que são media queries?", a:"CSS para editar imagens", b: "Scripts para iteratividade", c: "Booster de sites", d: "Condições de estilo CSS para cada caracteristica de aparelho", answer: "D"},
        {id : 3, question:"Objetivo de usabilidade", a:"Estética do site", b: "Scripts", c: "Identificar problemas de navegação e funcionalidade", d: "Medir a satisfação do usuário", answer: "C"},
        {id : 4, question:"Importância do Mobile-First", a:"Usabilidade e estética desenvolvida primeiramnete para mobile", b: "Manutenção da marca", c: "Identificar problemas de navegação e funcionalidade", d: "Condições de estilização desktop", answer: "A"},
        {id : 5, question:"Principal diferença do Mobile-First e design responsivo", a:"Desenvolvimento primeiramnete para mobile", b: "Adaptação", c: "Usabilidade e estética do site", d: "Condições de estilização mobile e desktop", answer: "A"},
   
    ]
    return (
        <>
            <Card items={items} />
        </>
    )
}