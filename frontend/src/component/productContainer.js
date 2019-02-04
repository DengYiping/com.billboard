import React from 'react';
import { Row, Col, Button, Card, Icon, Rate } from 'antd';

const { Meta } = Card;

class Product extends React.Component {
  render() {
    return (
      <Col xs={{ span: 8, offset: 1 }} md={{ span : 6, offset: 1 }} lg = { { span: 4, offset: 1 } }xl={{ span: 3, offset: 2 }}>
        <Card
          title={this.props.address}
          hoverable style={{ width: 240 }}
          cover={
            <img alt="example" src="http://imagine-express.com/wp-content/uploads/2017/03/March17.2017.jpg" />
          }
        >
        <p><b>Price:</b> ${this.props.dailyPrice}</p>
        <p><b>Start Dates</b>: {this.props.startDay}</p>
        <p><b>End Date:</b> {this.props.endDay}</p>
        <Rate/>
        </Card>
      </Col>
    );
  }
}
export default Product;
