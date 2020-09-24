import styled from "styled-components";
import { device } from "../MediaQueries/mediaQueries";

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // color: white;
  padding: 16px;
  text-align: center;

  img {
    margin-top: 10px;
  }

  p {
    padding: 0;
    margin: 2px 5px 0 0;
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

  .menuItemSoup {
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

  .menuInformation {
    font-size: 12px;
  }

  @media ${device.mobileS} {
    padding-top: 10px;
    h2 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
    }
    .menuItemSoup {
      margin-top: 5px;
    }
    .menuItem {
      margin-top: 5px;
    }
    .drinkWrapper {
      margin-top: 5px;
    }
  }

  @media ${device.mobileM} {
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
    .menuItemSoup {
      margin-top: 10px;
    }
    .menuItem {
      margin-top: 10px;
    }
    .drinkWrapper {
      margin-top: 10px;
    }
  }

  @media ${device.mobileM} and (min-height: 812px) {
    div.menuItemSoupWrapper {
      margin-top: 50px;
    }
    p.menuInformation {
      margin-top: 60px;
    }
  }

  @media ${device.mobileL} {
    h2 {
      font-size: 22px;
    }
    p {
      font-size: 16px;
    }
    .menuItemSoup {
      margin-top: 15px;
    }
    .menuItem {
      margin-top: 15px;
    }
    .drinkWrapper {
      margin-top: 15px;
    }
    p.menuInformation {
      margin-top: 20px;
    }
  }

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    flex: 1;

    .menuItemsWrapper {
      display: flex;
      flex-direction: row;
      margin-top: 100px;
      width: 100%;
      justify-content: space-between;
    }

    .drinkItemWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 317px;
    }

    .menuItemSoupWrapper {
      width: 317px;
    }

    .drinkWrapper {
      display: flex;
      flex-direction: column;
      height: 250px;
      flex: 1;
    }

    h2 {
      font-size: 25px;
    }

    p {
      font-size: 18px;
    }
    .menuInformation {
      margin-top: 100px;
      font-size: 16px;
    }
    .menuInformationTop {
      font-size: 16px;
      width: 500px;
    }
    p.menuInformation {
      margin-top: 170px;
    }
  }
`;
const MenuItem = ({ data }) => {
  return (
    <div>
      <StyledMenu>
        <p className="menuInformationTop">
          All vår mat som serveras är hemlagad med kärlek och råvaror som valts
          med omsorg.
        </p>
        <div className="menuItemsWrapper">
          <div className="menuItemSoupWrapper">
            <img
              loading="lazy"
              src="soup.svg"
              alt="Soup Icon"
              width="40px"
              height="40px"
              className="soupIcon"
            />
            {data.foodMenu.map((item, key) => (
              <div key={key} className="menuItemSoup">
                <h2>{item.food}</h2>
                <p>{item.description}</p>
                <p>{item.price}:-</p>
              </div>
            ))}
          </div>
          <div className="menuItemWrapper">
            <img loading="lazy" src="fika.svg" alt="Bun Icon" />
            {data.pastryMenu.map((item, key) => (
              <div key={key} className="menuItem">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>{item.price}:-</p>
              </div>
            ))}
          </div>
          <div className="drinkItemWrapper">
            <img loading="lazy" src="drink.svg" alt="Drink icon" />
            <div className="drinkWrapper">
              {data.drinkMenu.map((item, key) => (
                <div key={key} className="drinkItem">
                  <h2>{item.description}</h2>
                  <p>{item.price}:-</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="menuInformation">
          Vi har en stor erfarenhet av catering till både små och stora
          tillställningar. Skicka gärna en förfrågan.
        </p>
      </StyledMenu>
    </div>
  );
};

export default MenuItem;
