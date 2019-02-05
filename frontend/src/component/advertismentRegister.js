import {
    Form, Input, Button, DatePicker,
} from 'antd';
import React from 'react';
import { ADD_AD } from '../epic/addAdEpic';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
const { RangePicker } = DatePicker;

class TimeRelatedForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }

            // Should format date value before submit.
            const rangeValue = fieldsValue['rangePicker'];
            const startDate = rangeValue[0].format('YYYY-MM-DD');
            const endDate = rangeValue[0].format('YYYY-MM-DD');
            const availablities = [{startDate, endDate}];
            const { address, price, name } = fieldsValue;
            
            // assemble javascript object
            const obj = {
                name,
                address,
                availablities,
                dailyPrice: parseFloat(price)
            };
            this.props.sendForm(obj);
            this.props.history.push('/');
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const rangeConfig = {
            rules: [{ type: 'array', required: true, message: 'Please select time!' }],
        };
        return (
            <Form onSubmit={this.handleSubmit} style={{ marginTop: 50, marginLeft: 100 }}>

                <Form.Item
                    {...formItemLayout}
                    label={(
                        <span>
                            Name of Listing&nbsp;
              </span>
                    )}
                >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please name your listing!', whitespace: true }],
                    })(
                        <Input style={{ width: "75%" }} />
                    )}
                </Form.Item><Form.Item
                    {...formItemLayout}
                    label={(
                        <span>
                            Address&nbsp;
              </span>
                    )}
                >
                    {getFieldDecorator('address', {
                        rules: [{ required: true, message: 'Please input the address!', whitespace: true }],
                    })(
                        <Input style={{ width: "75%" }} />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label={(
                        <span>
                            Price&nbsp;
              </span>
                    )}
                >
                    {getFieldDecorator('price', {
                        rules: [{ required: true, message: 'Please name your price per day!', whitespace: false }],
                    })(
                        <Input style={{ width: "75%" }} />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="RangePicker"
                >
                    {getFieldDecorator('rangePicker', rangeConfig)(
                        <RangePicker />
                    )}
                </Form.Item>
                <Form.Item {...formItemLayout} style={{ marginLeft: 1025 }}>
                    <Button type="primary" htmlType="submit">submit</Button>
                </Form.Item>
            </Form>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        sendForm: (formData) => dispatch({type: ADD_AD, payload: formData})
    };
}


const WrappedTimeRelatedForm = Form.create({ name: 'time_related_controls' })(TimeRelatedForm);
export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(WrappedTimeRelatedForm));