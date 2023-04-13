import Card from "react-bootstrap/Card";
import Style from "/styles/slider.module.css";

const Post = () => {
    return(
        <div className={Style.post}>
          <Card className={Style.postItem}>
            <Card.Body>
              <Card.Title>123</Card.Title>
              <Card.Text>sadasd</Card.Text>
              {/* <Link href={`/post/${post.id}`}>
                      <Card.Link style={{cursor:"pointer"}}>see more</Card.Link>
                  </Link> */}
            </Card.Body>
          </Card>
        </div>
    );
}

export default Post;
