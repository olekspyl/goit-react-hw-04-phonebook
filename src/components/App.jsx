import React from 'react';
import { Component } from 'react';
import Names from './Form/Names';
import Contacts from "./Form/Contacts";
import Filter from './Form/Filter';

export class App extends Component {
  state = {
    contacts: [],
  filter: '',
  };

  formHandlerSubmit = data => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, data],
      };
    })
    
    console.log(this.state.contacts)
    console.log(data)
  };

  formFilterChange = e => {
    this.setState({filter: e.target.value})
  }

  render() {
   
    const normalizedElem = this.state.filter.toLocaleLowerCase();
    const filteredElements = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedElem));

    return (
      <div>
        <h1>Phonebook</h1>
        <Names onSubmit={this.formHandlerSubmit}/>
        
          <h2>Contacts</h2>
          <h2>Find contacts by name</h2>
        <Filter onFilter={this.formFilterChange} filterValue={this.state.filter} />
          <Contacts contacts={filteredElements} />
        
      </div>
    );
  }
}
