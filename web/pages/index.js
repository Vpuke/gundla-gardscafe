import client from '../client'

const Index = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
};
Index.getInitialProps = async function(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(`
    *[_type == "eventInformation"][0]
  `, { slug })
}
export default Index;
