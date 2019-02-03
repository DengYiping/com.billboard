import React from 'react';
import { Row, Col, Button, Card} from 'antd';

const { Meta } = Card;

class Product extends React.Component {
  render() {
    return (
      <Card
      title="Product"
      hoverable style={{ width: 240 }}
      cover={
        <img alt="example" src="http://imagine-express.com/wp-content/uploads/2017/03/March17.2017.jpg" />
      }
      >
    <Meta title="Europe Street beat" description="www.instagram.com"/>
    </Card>);
  }
}
export default Product;
