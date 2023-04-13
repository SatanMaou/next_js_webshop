import "bootstrap/dist/css/bootstrap.min.css";
import Img from "react-bootstrap/Image";
import StyleA from "/styles/admin.module.css"
import StyleG from "/styles/general.module.css";
import Button from "react-bootstrap/Button";
import { FaUser , FaThList , FaBell } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

function MenuAdmin() {
  return (
    <div className={[StyleG.fontTitle, StyleG.intro, StyleA.menuHeight , StyleG.fullHeight]}>
      <div className={StyleG.intro}>
        <Img src="/img/logo.png" fill="true" width="20%" height="auto" className={StyleG.logo}/>
        <h1 className={StyleA.nameIntro}>SME</h1>
      </div>
      
      <hr style={{   margin: "8px 0px",   borderTop: "1px solid grey",   opacity: ".85", }} width="100%" />

      <div className={StyleA.listMenuAdmin}>
        <Button className={StyleA.MenuItems} href="#"><MdSpaceDashboard className={StyleA.ItemsIcon} /> &nbsp; dashboard</Button>
        <Button className={StyleA.MenuItems} href="#"><FaUser className={StyleA.ItemsIcon} /> &nbsp; user profile</Button>
        <Button className={StyleA.MenuItems} href="#"><FaThList className={StyleA.ItemsIcon} /> &nbsp; table list</Button>
        <Button className={StyleA.MenuItems} href="#"><FaBell className={StyleA.ItemsIcon} /> &nbsp; Notifications</Button>
      </div>
    </div>
  );
}

export default MenuAdmin;
