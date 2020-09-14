import styled from 'styled-components';
import groq from "groq";
import client from "../client";

const StyledEvent = styled.div`
  background: #2b2b2b;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export default function Events({ data }) {
    console.log(data.eventInformation)
    return (
        <StyledEvent>
            <h1>Våra aktiviteter</h1>
            {data.eventInformation.map((item, key) => (
            <div key={key}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
        ))}
        <div>
            <h2>Program för sommaren 2021 kommer i maj.</h2>
            <p>Kontakta oss för biljetter.</p>
        </div>
       </StyledEvent>
    );
  };


export async function getStaticProps() {
    const query = groq`{
      "eventInformation": (*[_type == 'eventInformation'] | order(_createdAt)),
    }`;
  
    const data = await client.fetch(query);
  
    return {
      props: { data: data },
    };
  }
  