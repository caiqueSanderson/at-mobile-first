import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import styled from "styled-components";

const sectionAlign = styled.section`
width:100vw;
display:flex;
flex-direction:row;
justify-content:space-evenly;
font-size:2rem;
`;

export default function Card(props) {
    const image = {
        width: "100vw",

    }
    return (
        <>
            <section>
                <img style={image} src={props.data.image} alt="Foto" />
            </section>
            <section>
                <h2>{props.data.name}</h2>
                <h3>{props.data.date}</h3>
                <h3>{props.data.sector}</h3>
                <h3>{props.data.position}</h3>
            </section>

            <sectionAlign>
                <span><FaPhone /></span>
                <span><FaEnvelope /></span>
                <span><FaLocationDot /></span>
            </sectionAlign>

            <section>
                <table>
                    <thead>

                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </section>

        </>
    )
}