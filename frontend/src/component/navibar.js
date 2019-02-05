import React from 'react';
import { Menu, Layout, Button } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';
import './navibar.css';
import { connect } from 'react-redux';
import { LOG_IN, LOG_OUT } from '../reducer/loginlogoutreducer';
import {Link} from 'react-router-dom';

class NaviBar extends React.Component {
    render() {
        const { location } = this.props;
        return (
            <Layout.Header>
                <div className='logo'></div>
                <div className='login-logout' style={{ float: 'right', height: '31px', margin: 0 }}>
                    {this.props.isLogedIn ?
                        <Button type='primary' icon='logout' style={{width: '100px'}} onClick={this.props.dispatchLogout}>Log out</Button> :
                        <Link to='/login'><Button type='primary' icon='login' style={{width: '100px'}}>Log in</Button></Link>}
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['/']}
                    selectedKeys={[location.pathname]}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key='/'>
                        <NavLink to='/'>Home</NavLink>
                    </Menu.Item>
                    <Menu.Item key='/onlineads'>
                        <NavLink to='/onlineads'>Online Ads</NavLink>
                    </Menu.Item>
                    <Menu.Item key='/establishmentads'>
                        <NavLink to='/establishmentads'>Establishment Ads</NavLink>
                    </Menu.Item>
                    {
                        (this.props.isLogedIn && this.props.loginDetail && this.props.loginDetail.owner) ?
                            (
                        <Menu.Item key='/advertisementRegister'>
                            <NavLink to='/advertisementRegister'>Register Ads</NavLink>
                        </Menu.Item>
                        ) :
                            (null)
                    }
                </Menu>
            </Layout.Header>
        );
    }
}

const mapStateToProps = (state) => {
    return { isLogedIn: state.login.isLogedIn, loginDetail: state.login.detail };
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchLogout: () => dispatch({ type: LOG_OUT })
    };
}

const connected = connect(mapStateToProps, mapDispatchToProps)(NaviBar);
export default withRouter(connected);
