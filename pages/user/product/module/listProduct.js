import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Style from "/styles/product.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const list = () => {
  return (
    <Row>
      
      <Col lg="2" className={Style.product}>
        <Card>
          <Card.Body className={Style.productItem}>
            <div className={Style.productImg}></div>
            <div className={Style.productContent}>
              <Card.Title className={Style.productGeneral}>
                Card Title
              </Card.Title>
              <Card.Text className={Style.productGeneral}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className={Style.btnSale}>
                <Button
                  variant="primary"
                  className={`${Style.productGeneral} ${Style.productBtn}`}
                >
                  Go somewhere
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col lg="2" className={Style.product}>
        <Card>
          <Card.Body className={Style.productItem}>
            <div className={Style.productImg}></div>
            <div className={Style.productContent}>
              <Card.Title className={Style.productGeneral}>
                Card Title
              </Card.Title>
              <Card.Text className={Style.productGeneral}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className={Style.btnSale}>
                <Button
                  variant="primary"
                  className={`${Style.productGeneral} ${Style.productBtn}`}
                >
                  Go somewhere
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col lg="2" className={Style.product}>
        <Card>
          <Card.Body className={Style.productItem}>
            <div className={Style.productImg}></div>
            <div className={Style.productContent}>
              <Card.Title className={Style.productGeneral}>
                Card Title
              </Card.Title>
              <Card.Text className={Style.productGeneral}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className={Style.btnSale}>
                <Button
                  variant="primary"
                  className={`${Style.productGeneral} ${Style.productBtn}`}
                >
                  Go somewhere
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col lg="2" className={Style.product}>
        <Card>
          <Card.Body className={Style.productItem}>
            <div className={Style.productImg}></div>
            <div className={Style.productContent}>
              <Card.Title className={Style.productGeneral}>
                Card Title
              </Card.Title>
              <Card.Text className={Style.productGeneral}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className={Style.btnSale}>
                <Button
                  variant="primary"
                  className={`${Style.productGeneral} ${Style.productBtn}`}
                >
                  Go somewhere
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col lg="2" className={Style.product}>
        <Card>
          <Card.Body className={Style.productItem}>
            <div className={Style.productImg}></div>
            <div className={Style.productContent}>
              <Card.Title className={Style.productGeneral}>
                Card Title
              </Card.Title>
              <Card.Text className={Style.productGeneral}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className={Style.btnSale}>
                <Button
                  variant="primary"
                  className={`${Style.productGeneral} ${Style.productBtn}`}
                >
                  Go somewhere
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col lg="2" className={Style.productFinal}>
        <Card>
          <Card.Body className={Style.productItem}>
            <div className={Style.productImg}></div>
            <div className={Style.productContent}>
              <Card.Title className={Style.productGeneral}>
                Card Title
              </Card.Title>
              <Card.Text className={Style.productGeneral}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className={Style.btnSale}>
                <Button
                  variant="primary"
                  className={`${Style.productGeneral} ${Style.productBtn}`}
                >
                  Go somewhere
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      
    </Row>
  );
};

export default list;
