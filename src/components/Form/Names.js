import React from "react";
import { Component } from "react";
import { nanoid } from 'nanoid'

class Names extends Component {
    state = {
        name: ''

    }

    handleChange = e => {
        const { name, value } = e.target;
    this.setState({ [name]: value })
    
  } 
  
  handleSubmit = e => {
    e.preventDefault();
      this.setState({ name: ' ' })
      
    this.props.onSubmit(this.state)  
  };
  
    render() {

        const id = nanoid();
        
       return (
        <form onSubmit={this.handleSubmit}>
    <label htmlFor={id}>
      Name
      <input
        id={id}
        type="text"
        name="name"
        value={this.state.name}
        onChange={this.handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
     <button type="submit">Add contact</button>
        </form>
    ) 
    }

    
}

export default Names;