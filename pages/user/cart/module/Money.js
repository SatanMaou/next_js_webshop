import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Style from "/styles/cart.module.css";

const Money = () => {
  return (
    <div className={Style.intoMoney}>
      <Row>
        <Col>thành tiền</Col>
        <Col className={Style.lastCol}>tổng: tiền</Col>
      </Row>
    </div>
  );
};

export default Money;