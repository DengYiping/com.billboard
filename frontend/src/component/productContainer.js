import React from 'react';
import { Row, Col, Button, Card} from 'antd';

const { Meta } = Card;

class Product extends React.Component {
  render() {
    return (
      <Card
      title={this.props.name}
      hoverable style={{ width: 240 }}
      cover={
        <img alt="example" src="http://imagine-express.com/wp-content/uploads/2017/03/March17.2017.jpg" />
      }
      >
    <Meta title={this.props.address} description={this.props.startDay + ' ' + this.props.endDay + ' ' + this.props.dailyPrice}/>
    </Card>);
  }
}
export default Product;
