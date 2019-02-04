import {
    Form, Input, Button, DatePicker,
} from 'antd';
import React from 'react';
const { RangePicker } = DatePicker;

class TimeRelatedForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }

            // Should format date value before submit.
            const rangeValue = fieldsValue['range-picker'];
            const values = {
                ...fieldsValue,
                'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')]
            };
            console.log('Received values of form: ', values);
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
                    {getFieldDecorator('nameOfListing', {
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
                    {getFieldDecorator('Price', {
                        rules: [{ required: true, message: 'Please name your price per day!', whitespace: true }],
                    })(
                        <Input style={{ width: "75%" }} />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="RangePicker"
                >
                    {getFieldDecorator('range-picker', rangeConfig)(
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

const WrappedTimeRelatedForm = Form.create({ name: 'time_related_controls' })(TimeRelatedForm);
export default WrappedTimeRelatedForm;