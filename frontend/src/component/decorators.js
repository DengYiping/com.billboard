import { connect } from 'react-redux';

function loginStateMapsToProps(state, ownProps) {

    // extract necessary info
    const { login } = state;
    const { isLogedIn, detail } = login;

    return {
        isLogedIn: isLogedIn,
        loginDetail: detail
    };
}

const loginDispatchMapsToProps = (dispatch, ownProps) => ({});
export const loginConnector = connect(loginStateMapsToProps, loginDispatchMapsToProps);