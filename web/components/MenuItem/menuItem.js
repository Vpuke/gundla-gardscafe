import styled from "styled-components";

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  p {
    padding: 0;
    margin: 0;
  }

  .menuItem {
    display: flex;
    justify-content: space-between;
    margin: 15px 15px 0 15px;
  }
`;
const MenuItem = ({ menuItems }) => {
  return (
    <div>
      <StyledMenu>
        {menuItems.saladMenu.map((item, key) => (
          <div key={key} className="menuItem">
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        {menuItems.sandwichMenu.map((item, key) => (
          <div key={key} className="menuItem">
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        {menuItems.drinkMenu.map((item, key) => (
          <div key={key} className="menuItem">
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </StyledMenu>
    </div>
  );
};

export default MenuItem;
