import Style from "/styles/product.module.css";
import Form from 'react-bootstrap/Form';

const Filter = () => {
  return (
    <div className={Style.filter}>
      <table className={Style.styleTable}>
        <thead className={Style.styleTitle}>
          <tr>
            <th colspan="4">bộ lọc</th>
          </tr>
          <tr className={Style.thLastItem}>
            <th>loại sản phẩm</th>
            <th>Hãng</th>
            <th>khuyến mãi</th>
            <th>mức giá</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
               <Form.Check  className={Style.styleItem} label="sản phẩm 0" />
            </td>
            <td>
               <Form.Check  className={Style.styleItem} label="Hãng 0" />
            </td>
            <td>
               <Form.Check  className={Style.styleItem} label="ưa đãi" />
            </td>
            <td>
               <Form.Check  className={Style.styleItem} label="1.000.000 - 5.000.000" />
            </td>
          </tr>

          <tr>
            <td>
               <Form.Check  className={Style.styleItem} label="sản phẩm 1" />
            </td>
            <td>
               <Form.Check  className={Style.styleItem} label="Hãng 1" />
            </td>
            <td>
               <Form.Check  className={Style.styleItem} label="giảm giá" />
            </td>
            <td>
               <Form.Check  className={Style.styleItem} label="5.000.000 - 10.000.000" />
            </td>
          </tr>

          <tr>
            <td>
               <Form.Check  className={Style.styleItem} label="sản phẩm 2" />
            </td>
            <td>
               <Form.Check  className={Style.styleItem} label="Hãng 2" />
            </td>
            <td>
               <Form.Check  className={Style.styleItem} label="thu cũ" />
            </td>
            <td>
               <Form.Check  className={Style.styleItem} label="10.000.000 - 15.000.000" />
            </td>
          </tr>

          <tr>
            <td>
               <Form.Check  className={Style.styleItem} label="sản phẩm 3" />
            </td>
            <td>
               <Form.Check  className={Style.styleItem} label="Hãng 3" />
            </td>
            <td>
               <Form.Check  className={Style.styleItem} label="bảo hảnh" />
            </td>
            <td>
               <Form.Check  className={Style.styleItem} label="15.000.000 - 20.000.000" />
            </td>
          </tr>

          <tr>
            <td>
               <Form.Check  className={Style.styleItem} label="sản phẩm 4" />
            </td>
            <td>
               <Form.Check  className={Style.styleItem} label="Hãng 4" />
            </td>
            <td>
               <Form.Check  className={Style.styleItem} label="cũ đổi mới" />
            </td>
            <td>
               <Form.Check  className={Style.styleItem} label="20.000.000 - 30.000.000" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Filter;
