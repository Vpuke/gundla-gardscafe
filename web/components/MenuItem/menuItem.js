import styled from "styled-components";

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 16px;

  img {
    margin-top: 20px;
  }

  p {
    padding: 0;
    margin: 0 5px 0 0;
  }

  h2 {
    margin-right: 5px;
  }

  .menuItem {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    margin: 15px 15px 0 15px;
  }

  .drinkItem {
    display: flex;
    flex-direction: row;
  }

  .drinkWrapper {
    display: flex;
    flex-direction: row;
    height: 50px;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
  }
`;
const MenuItem = ({ menuItems }) => {
  return (
    <div>
      <StyledMenu>
        <img src="soup.svg" alt="Soup Icon" width="40px" height="40px" />
        {menuItems.foodMenu.map((item, key) => (
          <div key={key} className="menuItem">
            <h2>{item.food}</h2>
            <p>{item.description}</p>
            <p>{item.price}:-</p>
          </div>
        ))}
        <img src="fika.svg" alt="Bun Icon" />
        {menuItems.pastryMenu.map((item, key) => (
          <div key={key} className="menuItem">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}:-</p>
          </div>
        ))}
        <img src="drink.svg" alt="Drink icon" />
        <div className="drinkWrapper">
          {menuItems.drinkMenu.map((item, key) => (
            <div key={key} className="drinkItem">
              <h2>{item.description}</h2>
              <p>{item.price}:-</p>
            </div>
          ))}
        </div>
      </StyledMenu>
    </div>
  );
};

export default MenuItem;
