import React from "react";
import { Component } from "react";
import { nanoid } from 'nanoid'

class Names extends Component {
    state = {
      name: '',
      number: '',
    }

    handleChange = e => {
        const { name, value } = e.target;
      this.setState({ [name]: value });
  } 
  
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ name: ' ', number: ' ' });
  
    this.props.onSubmit(this.state)
  
      
  };
  
  // {this.state.name !== this.handleChange.e.target.value ? () : alert() }
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
                value={this.state.number}
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

export default Names;