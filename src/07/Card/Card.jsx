import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import styled from "styled-components";

const SectionAlignRow = styled.section`
width:100%;
padding: 10px;
display:flex;
flex-direction:row;
justify-content:space-evenly;
font-size:2rem;
border:1px solid black;
`

const SectionColumn = styled.section`
width:100%;
padding:20px;
font-size:2rem;
`

const Img = styled.img`
width:100%;
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
            <section>
                <Img style={image} src={props.data.image} alt="Foto" />
            </section>
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

            <section>
                <Table>
                    <thead>
                        <tr>
                            <CellHead>Estado</CellHead>
                            <CellHead>Tarefas</CellHead>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <CellBody><input type="checkbox"/></CellBody>
                            <CellBody>Tarefa 1</CellBody>
                        </tr>
                        <tr>
                            <CellBody><input type="checkbox"/></CellBody>
                            <CellBody>Tarefa 2</CellBody>
                        </tr>
                        <tr>
                            <CellBody><input type="checkbox"/></CellBody>
                            <CellBody>Tarefa 2</CellBody>
                        </tr>
                    </tbody>
                </Table>
            </section>

        </>
    )
}