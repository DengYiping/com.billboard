import { Form, Input,  Button } from 'antd';
import React from 'react';
import { REGISTRATION_SUBMIT } from '../../epic/registrationEpic';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class LeaserRegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleLeaserSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.sendForm(values);
                this.props.history.push('/');
            }
        });
    }


    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
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

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };


        return (
            <Form onSubmit={this.handleLeaserSubmit}>
                <Form.Item
                    {...formItemLayout}
                    label="E-mail"
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input style={{ width: "75%" }} />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Password"
                >
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: 'Please input your password!',
                        }, {
                            validator: this.validateToNextPassword,
                        }],
                    })(
                        <Input style={{ width: "75%" }} type="password" />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Confirm Password"
                >
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: 'Please confirm your password!',
                        }, {
                            validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input style={{ width: "75%" }} type="password" onBlur={this.handleConfirmBlur} />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label={(
                        <span>
                            First Name&nbsp;
              </span>
                    )}
                >
                    {getFieldDecorator('firstName', {
                        rules: [{ required: true, message: 'Please input your first name!', whitespace: true }],
                    })(
                        <Input style={{ width: "75%" }} />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label={(
                        <span>
                            Last Name&nbsp;
              </span>
                    )}
                >
                    {getFieldDecorator('lastName', {
                        rules: [{ required: true, message: 'Please input your last name!', whitespace: true }],
                    })(
                        <Input style={{ width: "75%" }} />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Username"
                >
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input username!' }],
                    })(
                        <Input style={{ width: "75%" }} />
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Register</Button>
                </Form.Item>
            </Form>

        );
    }
}

export const mapStateToProps = (state, ownProps) => ({});
export const mapDispatchToProps = (dispatch, ownProps) => ({
    sendForm: (formData) => dispatch({type: REGISTRATION_SUBMIT, payload: formData})
});


const WrappedLeaserRegistrationForm = Form.create()(LeaserRegistrationForm);
const connected =  connect(mapStateToProps, mapDispatchToProps)(WrappedLeaserRegistrationForm);
export default withRouter(connected);