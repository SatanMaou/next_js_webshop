import Layout from "../../components/layout";
// import Img from "next/image";
import Style from "/styles/product.module.css";
import Button from "react-bootstrap/Button";
import StyleG from "/styles/general.module.css";
import { FaFacebook, FaGooglePlus, FaYoutube, FaInstagram } from "react-icons/fa";

const product = () => {
  const content = "Mô Tả Sản Phẩm Chất liệu inox cao cấp Chảo Kangaroo sử dụng chất liệu inox cao cấp";
  const money = 540000;
  const amount = 3;
  return (
    <Layout>
      <hr></hr>
      <div className={Style.InformationProduct}>
        <div className={Style.aboutProduct}>
          <div className={Style.ImgProduct}>
            <img src="/img/1.jpg" alt="product" />
          </div>
          <div className={Style.DetailProduct}>
            <div className={`${Style.NameProduct} ${StyleG.fontTitle}`}>
              Chảo inox Kangaroo chống dính KG01F1
            </div>
            <div className={Style.contentProduct}>
              <div className={Style.Money}>số tiền: {money}đ</div>
              <p>Size</p>
              <p>số lượng: {amount}</p>
              <p>chia sẻ: <FaFacebook /> <FaGooglePlus /> <FaInstagram /> <FaYoutube /></p>
              <div gap={2} className="col-md-2 mx-auto">
                <Button size="lg">chọn mua</Button> 
              </div>
            </div>
          </div>
        </div>
        <div className={Style.Describe}>
          <h1 className={StyleG.fontTitle}>Mô tả sản phẩm</h1>
          {content}
          <div className={Style.miniDescribe}>
            <div gap={2} className="col-md-2 mx-auto">
              <Button size="lg">thu nhỏ mô tả</Button>
            </div>
          </div>
        </div>
        <div className={Style.evaluateClient}></div>
      </div>
    </Layout>
  );
};

export default product;
