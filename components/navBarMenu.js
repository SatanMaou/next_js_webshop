import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Style from "../styles/Nav.module.css";
import StyleG from "/styles/general.module.css"

const NavBarMenu = () => (
  <Navbar bg="dark" variant="dark" className={Style.navBar}>
    <Navbar.Brand>my app</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Item className={Style.navItem}>
        <Nav.Link className={Style.nlPad} href="/">
          <Button className={StyleG.fontTitle} variant="dark">
            home
          </Button>
        </Nav.Link>
      </Nav.Item>

      {/* <Nav.Item className={Style.navItem}>
                <Dropdown as={ButtonGroup}>
                    <Nav.Link className={Style.nlPad} href="/product/product">
                        <Button variant="dark" className='text-uppercase'>products</Button>
                    </Nav.Link>
                    <Dropdown.Toggle split variant="dark" className={Style.btnIconDown} />
                    <Dropdown.Menu variant="dark" className={Style.NavList}>
                        <Dropdown.Item className='text-uppercase' href="#/action-1">product 1</Dropdown.Item>
                        <Dropdown.Item className='text-uppercase' href="#/action-2">product 2</Dropdown.Item>
                        <Dropdown.Item className='text-uppercase' href="#/action-3">product 3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav.Item> */}

      <Nav.Item className={Style.navItem}>
        <Nav.Link className={Style.nlPad} href="/user/product">
          <Button className={StyleG.fontTitle} variant="dark">
            product
          </Button>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item className={Style.navItem}>
        <Nav.Link className={Style.nlPad} href="/user/cart">
          <Button className={StyleG.fontTitle} variant="dark">
            cart
          </Button>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item className={Style.navItem}>
        <Nav.Link className={Style.nlPad} href="/user/login">
          <Button className={StyleG.fontTitle} variant="dark">
            login
          </Button>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Navbar>
);
export default NavBarMenu;
