import { Tabs } from 'antd';
import React from 'react';
import WrappedLeaserRegistrationForm from './forms/leaserRegistration';
import WrappedOwnerRegistrationForm from './forms/ownerRegistration';
const TabPane = Tabs.TabPane;

class RegistrationPage extends React.Component {
  render() {
    return (<div className="card-container">
      <Tabs type="card" style={{ marginTop: 50, marginLeft: 100 }}>
        <TabPane tab="Leaser" key="1">
          <WrappedLeaserRegistrationForm />
        </TabPane>
        <TabPane tab="Owner" key="2">
          <WrappedOwnerRegistrationForm />
        </TabPane>
      </Tabs>
    </div>)
  }
}

export default RegistrationPage;
