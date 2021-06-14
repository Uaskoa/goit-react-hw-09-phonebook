import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phonebookOperations } from '../../redux/phonebook/';
import ContactListItem from './ContactListItem';
import { getFilteredContacts } from '../../redux/phonebook/phonebook-selectors';
import './ContactList.scss';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  // const onDeleteContact = (contactId) => {
  //   dispatch(phonebookOperations.deleteContact(contactId));
  // };

  const onDeleteContact = useCallback(
    contactId => {
      dispatch(phonebookOperations.deleteContact(contactId));
    },
    [dispatch],
  );

  return (
    <div>
      <ul className="contact-list">
        {contacts.map(contact => (
          <ContactListItem
            id={contact.id}
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
}
