import Layout from "../../../components/layout";
import Style from "/styles/cart.module.css";
import List from "./module/listCart";
import Money from "./module/Money";

const cart = () => {
  return (
    <Layout>
      <div className={Style.listCart}>
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
        
        <div className={Style.seeMoney}>
            <Money />
        </div>
      </div>
    </Layout>
  );
};

export default cart;
