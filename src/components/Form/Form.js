import React from "react";
import { Component } from "react";
import { nanoid } from 'nanoid'

class Form extends Component {
    state = {
      name: '',
      number: '',
      id: nanoid(),
    }

    handleChange = e => {
        const { name, value } = e.target;
      this.setState({ [name]: value });
  } 
  
  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { onSubmit } = this.props;
    
    const data = {
      id: nanoid(),
      name,
      number,
    };
    onSubmit(data);
    
    this.reset();
  };
  
  reset = () => {
this.setState({ name: ' ', number: ' ' });
  }
  
    render() {
      const { id, name, number } = this.state;
       return (
        <form onSubmit={this.handleSubmit}>
    <label htmlFor={id}>
      Name
      <input
        id={id}
        type="text"
        name="name"
        value={name}
        onChange={this.handleChange}
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
           </label>
           <label htmlFor={id}>
             Phone number
             <input
               id={id}
               type="tel"
               name="number"
                value={number}
               onChange={this.handleChange}
               
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
             />
           </label>
           
     <button type="submit">Add contact</button>     
        </form>
    ) 
    }

    
}

export default Form;