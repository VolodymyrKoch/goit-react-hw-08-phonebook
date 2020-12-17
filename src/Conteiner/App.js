import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import AppRoutes from '../components/ComponentPage/AppRoutes/AppRoutes.js';

import Layout from '../components/ComponentPage/Loyout/Loyout.js';
import { routes } from '../services/routes.js';
import { getCurrentUser } from '../redux/reducers/contacts/contactsOperations.js';

class App extends Component {
  componentDidMount() {
    const { getCurrentUser } = this.props;

    getCurrentUser();
  }
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <AppRoutes routes={routes} />
        </Layout>
      </BrowserRouter>
    );
  }
}
const mapDispatchToProps = {
  getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);
