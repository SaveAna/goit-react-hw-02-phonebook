import propTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        <span>{contact.name}: </span>
        <span>{contact.number}</span>
        <button type="button" onClick={() => deleteContact(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  onDelete: propTypes.func,
};
