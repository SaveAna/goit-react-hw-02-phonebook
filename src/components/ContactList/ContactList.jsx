import propTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => (
  <div>
    <ul>
      {contacts.map((contact, id) => (
        <li key={id}>
          <span>{contact.name}: </span>
          <span>{contact.number}</span>
          <button type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
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
