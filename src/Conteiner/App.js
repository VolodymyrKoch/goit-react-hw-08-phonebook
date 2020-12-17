import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import AppRoutes from '../components/ComponentPage/AppRoutes/AppRoutes.js';

import Layout from '../components/ComponentPage/Loyout/Loyout.js';
import { routes } from '../services/routes.js';
// import { getCurrentUser } from "../../redux/auth/auth.operations";
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

// const mapDispatchToProps = {
//   getCurrentUser,
// };

// componentDidMount() {
//   const { getCurrentUser } = this.props;

//   getCurrentUser();
// }

// import React, { Component } from "react"
// import ContactForm from "../Components/ContactForm/ContactForm.jsx"
// import Filter from "../Components/Filter/Filter.jsx"
// import ContactList from "../Components/ContactList/ContactList.jsx"
// import Title from "../Components/Title/Title.js"

// import contactOperation from "../redux/contactOperation.js"
// import { connect } from "react-redux"

// import { CSSTransition } from "react-transition-group"
// import animation from "./animation/titleAnimation.module.css"
// import style from "./App.module.css"

// class App extends Component {
//   componentDidMount() {
//     this.props.onFetchContact()
//   }

//   render() {
//     return (
//       <>
//         <div className={style.container}>
//           <CSSTransition in={true} appear={true} classNames={animation} unmountOnExid timeout={500}>
//             <Title title="Phonebook" />
//           </CSSTransition>
//           <ContactForm />
//           <Filter />
//           <ContactList />
//         </div>
//       </>
//     )
//   }
// }

// const mapDispatchToProps = {
//   onFetchContact: contactOperation.fetchContact,
// }

// export default connect(null, mapDispatchToProps)(App)
