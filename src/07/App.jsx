import Card from "./Card/Card";

export default function App() {
    const data = {
        image:"https://img.myloview.com.br/adesivos/foto-nao-encontrada-icone-vector-simbolo-sinal-400-133715057.jpg",
        name:"Mr.Anônimo",
        date:"30/02/2010",
        sector:"Área 51",
        position:"Incalculável"
    }
    return (
        <>
            <Card data={data}/>
        </>
    )
}