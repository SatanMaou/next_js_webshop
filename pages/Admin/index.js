import "bootstrap/dist/css/bootstrap.min.css";
import LayoutAdmin from '../../components/layoutAdmin';
import Style from '/styles/admin.module.css';
import DashBoard from './listAction/dashboard/dashBoard';
import MenuWorks from './listAction/menu_Action/menuAdmin'

function AdminHome() {
    return (
        <LayoutAdmin>
            <div className={Style.layout}>
                <div className={Style.menu}>
                    <MenuWorks/>
                </div>
                <div className={Style.works}>
                    <DashBoard/>
                </div>
            </div>
        </LayoutAdmin>
    );
}

export default AdminHome;