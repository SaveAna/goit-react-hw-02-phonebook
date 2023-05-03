import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = contact => {
    if (this.state.contacts.find(item => item.name === contact.name)) {
      alert('Contact already exists');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  onChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleFilter = () => {
    return this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .include(this.state.filter.toLowerCase().trim());
    });
  };

  render() {
    const filteredContacts = this.handleFilter();
    return (
      <Container>
        <h2>Phonebook</h2>
        <ContactForm addContact={this.handleAddContact} />
        <h2> Contacts</h2>
        <Filter value={this.state.filter} onChange={this.onChange} />
        <ContactList contacts={filteredContacts} handleDelete={this.onDetele} />
      </Container>
    );
  }
}
