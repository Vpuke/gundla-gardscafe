
const MenuItem = (props) => {
  // console.log(props);

  return (
    <div>

      {Object.entries(props).map((item, key) => (
        console.log(item[1].price),
        console.log(item[1].description),
        
        <div key={key}>
          <p>{item[1].description}</p>
          <p>{item[1].price}</p>
        </div>
      ))}

    </div>
  );
}

export default MenuItem;
