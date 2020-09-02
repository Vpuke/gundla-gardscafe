import client from "../client";
import Menu from "../components/Menu/menu";
import Burger from "../components/Hamburger/hamburger";
import Footer from "../components/Footer/footer";


const Index = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div>
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
