import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import styled from "styled-components";

const ContainerRow = styled.div`
@media(min-width: 600px){
width:100vw;
display:flex;
flex-direction:row;
border:1px solid black;
}`
const SectionAlignRow = styled.section`
width:100%;
padding: 10px;
display:flex;
flex-direction:row;
justify-content:space-evenly;
font-size:2rem;
border:1px solid black;

@media(min-width: 600px){
flex-direction:column;
align-items:center;
width: 10%;
}
`

const SectionImage = styled.section`
@media(min-width: 600px){
width:50%;
}
`
const Img = styled.img`
width:100%;

@media(min-width: 600px){
width:100% !important;
}
`

const SectionColumn = styled.section`
width:100%;
padding:20px;
font-size:2rem;
`



const PersonalInformation = styled.h3`
font-size:1.5rem;
font-weigth:600;
`

const Table = styled.table`
border:1px solid black;
width: calc(100% - 20px);
margin: 10px;
border-collapse:collapse;
`
const CellState = styled.td`
border:1px solid black;
padding:5px;
text-align:center;
font-weight: 800;
background-color: grey;
width:30%;
`

const CellHead = styled.td`
border:1px solid black;
padding:5px;
text-align:center;
font-weight: 800;
background-color: grey;
`

const CellBody = styled.td`
border:1px solid black;
padding:5px;
text-align:center;
`

export default function Card(props) {
    const image = {
        width: "100vw",

    }
    return (
        <>
            <ContainerRow >
                <SectionImage>
                    <Img style={image} src={props.data.image} alt="Foto" />
                </SectionImage>
                <SectionColumn>
                    <h2>{props.data.name}</h2>
                    <PersonalInformation>{props.data.date}</PersonalInformation>
                    <PersonalInformation>{props.data.sector}</PersonalInformation>
                    <PersonalInformation>{props.data.position}</PersonalInformation>
                </SectionColumn>

                <SectionAlignRow>
                    <FaPhone />
                    <FaEnvelope />
                    <FaLocationDot />
                </SectionAlignRow>
            </ContainerRow >
            <section>
                <Table>
                    <thead>
                        <tr>
                            <CellState>Estado</CellState>
                            <CellHead>Tarefas</CellHead>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <CellBody><input type="checkbox" /></CellBody>
                            <CellBody>Tarefa 1</CellBody>
                        </tr>
                        <tr>
                            <CellBody><input type="checkbox" /></CellBody>
                            <CellBody>Tarefa 2</CellBody>
                        </tr>
                        <tr>
                            <CellBody><input type="checkbox" /></CellBody>
                            <CellBody>Tarefa 2</CellBody>
                        </tr>
                    </tbody>
                </Table>
            </section>

        </>
    )
}