import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.less';
import NaviBar from './component/navibar';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import Footer from './component/footer';
import { Switch, Route } from 'react-router-dom';
import LoginContentPage from './component/login_content_page';
import HomeContentPage from './component/home_content_page';
import OnlineAdContentPage from './component/onlinead_content_page';
import EstablishmentContentPage from './component/establishment_content_page';
import configureStore from './util/configureStore';
import WrappedRegistrationForm from './component/registration'

const store = configureStore();
class App extends Component {
  render() {
    return (
      // load the store
      <Provider store={store}>
        <div className="App">
          <Layout style={{height:'100vh'}}>
            <NaviBar />
            <Layout.Content style={{height: '100%', overflowY:'scroll'}}>
              <Switch>
                {/* different possible pages */}
                <Route exact path='/' component={HomeContentPage} />
                <Route exact path='/onlineads' component={OnlineAdContentPage} />
                <Route exact path='/establishmentads' component={EstablishmentContentPage} />
                <Route exact path='/login' component={LoginContentPage} />
                <Route exact path='/registration' component={WrappedRegistrationForm} />
              </Switch>
            </Layout.Content>
            <Footer />
          </Layout>
        </div>
      </Provider>
    );
  }
}

export default App;
