import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactList.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import '../../components/anime.css';
import {
  removeContact,
  getCurrentUser,
  getContacts,
} from '../../redux/reducers/contacts/contactsOperations.js';
import contactSelector from '../../redux/reducers/contacts/contactsSelectors.js';

class ContactList extends Component {
  static propTypes = {
    array: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
    removeContact: PropTypes.func.isRequired,
  };
  componentDidMount() {
    const { getCurrentUser, getContacts } = this.props;
    getCurrentUser();
    getContacts();
  }
  render() {
    const { array, removeContact } = this.props;
    return (
      <>
        <TransitionGroup component="ul" className="contactList">
          {array.map(item => (
            <CSSTransition key={item.id} timeout={250} classNames="item">
              <li key={item.id}>
                {item.name}: {item.number}
                <button
                  type="button"
                  // class="btn btn-sm btn-light"
                  onClick={() => removeContact(item.id)}
                >
                  <span className="badge btn-danger badge-secondary">X</span>
                </button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser,
  getContacts,
  removeContact,
};

const mapStateToProps = state => {
  return { array: contactSelector.getFilteredItems(state) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
