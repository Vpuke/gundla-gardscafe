import styled from "styled-components";

const StyledSection = styled.section`
  height: 100vh;
  background-image: url("dark-background.png");
  color: white;
  background-repeat: no-repeat;
  background-size: cover;

  a {
    font-size: 16px;
  }

  h1 {
    text-align: center;
    margin: 0;
    padding: 20px 0 0 0;
  }
`;

const Section = (props) => {
  return (
    <StyledSection
      className={props.id === "menu" ? "menu-background" : " "}
      id={props.id}
    >
      <h1>{props.title}</h1>
      {props.children}
    </StyledSection>
  );
};

export default Section;
