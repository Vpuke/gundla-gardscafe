/*
import client from '../../client';

const MenuItem = (props) => {
  console.log(props);
  return (
    <div>
      <h1>hej</h1>
    </div>
  )
}

MenuItem.getInitialProps = async function(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(`
  *[_type == "eventInformation"][0]
  `, { slug })
}

export default MenuItem;
*/