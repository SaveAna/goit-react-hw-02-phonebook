import propTypes from 'prop-types';
import { List, ContactItem } from './ContactList.styled';
import { FormBtn } from 'components/ContactForm/ContactForm.styled';

export const ContactList = ({ contacts, deleteContact }) => (
  <List>
    {contacts.map(contact => (
      <li key={contact.id}>
        <span>{contact.name}: </span>
        <ContactItem>{contact.number}</ContactItem>
        <FormBtn type="button" onClick={() => deleteContact(contact.id)}>
          Delete
        </FormBtn>
      </li>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  deleteContact: propTypes.func,
};
