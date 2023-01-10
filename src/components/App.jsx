import React from 'react';
import { Component } from 'react';
import Form from './Form/Form';
import Contacts from "./Form/Contacts";
import Filter from './Form/Filter';
import {Title, TitleContacts, TitleFind, WrapToFind} from './Form/App.styled'

export class App extends Component {
  state = {
    contacts: [],
  filter: '',
  };

componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    console.log(parsedContacts)

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('обновилося')
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
     
   } 
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
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

    const normalizedElem = filter.toLowerCase();
    const filteredElements = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedElem));

    return (
      <div>
        <Title>Phonebook</Title>
        <Form onSubmit={this.addContact} />
        <TitleContacts>Contacts</TitleContacts>
        <WrapToFind>
          <TitleFind>Find contacts by name</TitleFind>
          <Filter formFilterChange={this.formFilterChange} filter={filter} />
          </WrapToFind>
        <Contacts contacts={filteredElements} onDelete={this.deleteContact} />
        
      </div>
    );
  }
}
