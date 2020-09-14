
import Menu from "../Menu/menu";
import Burger from "../Hamburger/hamburger";

export default function Navigation() {
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();
    return (
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
    );
  }