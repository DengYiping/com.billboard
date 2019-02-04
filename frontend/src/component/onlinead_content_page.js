import React from 'react';
import Product from './productContainer'
import { connect } from 'react-redux';
import { Row } from 'antd'
class OnlineAdContentPage extends React.PureComponent {
    render() {
        return (<Row style={{marginTop: '20px'}}>
            {this.props.searchResult.map(obj => <Product {...obj} key={obj.adSourceId}/>)}
        </Row>);
    }
}
const mapStateToProps = (state, ownProps) => {
    return { searchResult: state.search.result };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(OnlineAdContentPage);

export default connectedComponent;
