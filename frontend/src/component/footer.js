import React from 'react';
import { Layout } from 'antd';

class Footer extends React.PureComponent {
    render() {
        return (
            <Layout.Footer style={{textAlign:'center'}}>
                <span>Billboard Inc 2018. All rights reserved.</span>
            </Layout.Footer>
        );
    }
}

export default Footer;