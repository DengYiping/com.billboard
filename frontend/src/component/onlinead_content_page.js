import React from 'react';
import Product from './productContainer'
import { connect } from 'react-redux';
class OnlineAdContentPage extends React.PureComponent {
    render() {
        return (this.props.searchResult.map(obj => <Product {...obj} />));
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
