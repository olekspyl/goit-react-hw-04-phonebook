import React from "react";
import { Component } from "react";
import { nanoid } from 'nanoid'
import {FormEl, Label, Button, Input} from './App.styled'

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
        <FormEl onSubmit={this.handleSubmit}>
    <Label htmlFor={id}>
      Name
      <Input
        id={id}
        type="text"
        name="name"
        value={name}
        onChange={this.handleChange}
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
           </Label>
           <Label htmlFor={id}>
             Phone number
             <Input
               id={id}
               type="tel"
               name="number"
                value={number}
               onChange={this.handleChange}
               
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
             />
           </Label>
           
     <Button type="submit">Add contact</Button>     
        </FormEl>
    ) 
    }

    
}

export default Form;