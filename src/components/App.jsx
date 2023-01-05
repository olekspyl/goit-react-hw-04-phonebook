import React from 'react';
import { Component } from 'react';
import Names from './Form/Names';
import Contacts from "./Form/Contacts";

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formHandlerSubmit = data => {
  this.setState(prevState => ({
        contacts: prevState.contacts + data,
  }));
    return data;
  };

  render() {
   
    return (
      <div>
        <Names onSubmit={this.formHandlerSubmit}/>
        <div>
          <h1>Contacts</h1>
          <Contacts contacts={this.formHandlerSubmit} />
        </div>
      </div>
    );
  }
}
