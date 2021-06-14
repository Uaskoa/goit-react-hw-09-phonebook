import { connect } from "react-redux";
import { phonebookOperations } from "../../redux/phonebook/";
import ContactListItem from "./ContactListItem";
import { getFilteredContacts } from "../../redux/phonebook/phonebook-selectors";
import "./ContactList.scss";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul className="contact-list">
        {contacts.map((contact) => (
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
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: getFilteredContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (contactId) =>
    dispatch(phonebookOperations.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
