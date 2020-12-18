import React, { Component } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm.js';
import Filter from '../../components/Filter/Filter.js';
import ContactList from '../../components/ContactList/ContactList.js';
import classes from '../../App.module.css';

import '../../bases.css';
import { connect } from 'react-redux';
import { getContacts } from '../../redux/reducers/contacts/contactsOperations.js';

class ContactsPage extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <>
        <div className={classes.conteiner}>
          <ContactForm />

          <Filter />

          <ContactList />
        </div>
      </>
    );
  }
}

export default connect(null, { getContacts })(ContactsPage);
