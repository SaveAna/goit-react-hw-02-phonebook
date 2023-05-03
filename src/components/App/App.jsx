import React, { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Container, Title } from './App.styled';
import { Filter } from 'components/Filter/Filter';

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

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  handleChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  handleFilter = () => {
    return this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase().trim());
    });
  };

  render() {
    const filteredContacts = this.handleFilter();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.handleAddContact} />
        <Title> Contacts</Title>
        {this.state.contacts.length > 2 && (
          <Filter value={this.state.filter} handleChange={this.handleChange} />
        )}
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
