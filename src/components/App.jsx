import React from 'react';
import { Component } from 'react';
import Form from './Form/Form';
import Contacts from "./Form/Contacts";
import Filter from './Form/Filter';

export class App extends Component {
  state = {
    contacts: [],
  filter: '',
  };

  addContact = ({ id, name, number }) => {
    const { contacts } = this.state;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    )
      return alert(`Contact ${name} ia already in phonebook`);
    
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { id, name, number }]
      }
    });
  }

  formHandlerSubmit = data => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, data],
      };
    })

  
  };

  formFilterChange = e => {
    this.setState({filter: e.target.value})
  }

  render() {
    const { contacts, filter } = this.state;

    const normalizedElem = filter.toLocaleLowerCase();
    const filteredElements = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedElem));

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
          <h2>Contacts</h2>
          <h2>Find contacts by name</h2>
        <Filter formFilterChange={this.formFilterChange} filter={filter} />
          <Contacts contacts={filteredElements} />
        
      </div>
    );
  }
}
