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
                <button type="button" onClick={() => removeContact(item.id)}>
                  Delete
                </button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </>
    );
  }
}

// const ContactList = function ({ array, deleteItem }) {
//   console.log(array);
//   return (
//     <>
//       <TransitionGroup component="ul" className="contactList">
//         {array.map(item => (
//           <CSSTransition key={item.id} timeout={250} classNames="item">
//             <li key={item.id}>
//               {item.name}: {item.number}
//               <button type="button" onClick={() => deleteItem(item.id)}>
//                 Delete
//               </button>
//             </li>
//           </CSSTransition>
//         ))}
//       </TransitionGroup>
//     </>
//   );
// };
// ContactList.propTypes = {
//   array: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
//   deleteItem: PropTypes.func.isRequired,
// };

const mapDispatchToProps = {
  getCurrentUser,
  getContacts,
  removeContact,
  // deleteItem: removeContact,
};

const mapStateToProps = state => {
  // console.log(state);
  return { array: contactSelector.getFilteredItems(state) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
