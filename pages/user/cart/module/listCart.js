import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Style from "/styles/cart.module.css";
import StyleG from "/styles/general.module.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const List = () => {
  const ok = "okllaalalacz";
  const amount = 2;
  const detail = "phân loại";
  const money = 200000;
  return (
    <Container>
      <div className={Style.spaceItem}>
        <Row className={Style.itemCart}>

          <div className={Style.introProduct}>
            <Form.Check className={Style.Check}/>
            <div className={Style.miniImg}></div>
            <h2 className={`${StyleG.fontTitle} ${Style.NameTitle}`}>{ok}</h2>
          </div>

          <div className={Style.detailProduct}>
            <Col>{detail}</Col>
            <Col>{amount}</Col>
            <Col>{money}</Col>
            <Col>
              <Button className={Style.btnDelete}>Xóa</Button>
            </Col>
          </div>
        </Row>
      </div>
    </Container>
  );
};

export default List;
