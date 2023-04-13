import Layout from "../../../components/layout";
// import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import ListProduct from "./module/listProduct";
import MenuProduct from "./module/menuProduct";
import Filter from "./module/dataFilter";
import Style from "/styles/product.module.css";

const products = () => {
  return (
    <Layout>
      {/* product */}
      {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card s content.</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card> */}

      <Container className={Style.container}>
        {/* <MenuProduct/> */}

        {/*bộ lọc sản phẩm*/}
        <Filter />

        <hr></hr>

        <ListProduct />
        <ListProduct />
        <ListProduct />
      </Container>
    </Layout>
  );
};

export default products;
