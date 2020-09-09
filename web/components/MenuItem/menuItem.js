import styled from "styled-components";

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  p {
    padding: 0;
    margin: 0;
  }
`;
const MenuItem = ({ menuItems }) => {
  return (
    <div>
      <StyledMenu>
        {menuItems.saladMenu.map((item, key) => (
          <div key={key}>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        {menuItems.sandwichMenu.map((item, key) => (
          <div key={key}>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        {menuItems.drinkMenu.map((item, key) => (
          <div key={key}>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </StyledMenu>
    </div>
  );
};

export default MenuItem;
