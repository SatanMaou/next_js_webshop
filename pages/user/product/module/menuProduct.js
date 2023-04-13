import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Style from "/styles/product.module.css";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const menu = () => {
  return (
    <Row className={Style.menu}>
    <Col lg="6">Menu</Col>
    <Col lg="2">
      <Form.Select size="sm">
        <option>hãng 1</option>
        <option>hãng 2</option>
        <option>hãng 3</option>
      </Form.Select>
    </Col>
    <Col lg="2">
      <Form.Select size="sm">
        <option>loại 1</option>
        <option>loại 2</option>
        <option>loại 3</option>
      </Form.Select>
    </Col>
    <Col lg="2">
      <Form.Select size="sm">
        <option>1.000.000 - 5.000.000</option>
        <option>5.000.000 - 7.000.000</option>
        <option>7.000.000 - 12.000.000</option>
      </Form.Select>
    </Col>
  </Row>
  );
};

export default menu;
