import React from 'react';
import { Checkbox, Icon, Row, Col, Form, Button, Input } from "antd";
import './login_content_page.css';
import { LOG_IN, LOG_OUT } from '../reducer/loginlogoutreducer';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

class LoginContentPage extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // TODO
                const {userName, password} = values;
                // console.log('Received values of form: ', values);
                this.props.dispatchLogin(userName, password);

            }
        });
    }

    render() {
        if(this.props.isLogedIn){
            return <Redirect to='/' />;
        }
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-page-content">
                <Row type='flex' align='middle' justify='center' style={{ minHeight: '70vh' }}>
                    <Col className='login-background' style={{ minHeight: '200px' }}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>Remember me</Checkbox>
                                )}
                                <Link className="login-form-forgot" to="/">Forgot password</Link>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                            </Button>
                                Or <Link to="/registration">register now!</Link>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}
const WrappedNormalLoginForm = Form.create()(LoginContentPage);

const mapStateToProps = (state) => {
    return { isLogedIn: state.login.isLogedIn };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchLogin: (username, password) => dispatch({ type: LOG_IN, payload: {username, password}}),
        dispatchLogout: () => dispatch({ type: LOG_OUT })
    };
}
const connected = connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
export default connected;