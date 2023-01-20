import React from "react";
import { useState } from "react";
import { nanoid } from 'nanoid'
import {FormEl, Label, Button, Input} from './App.styled'


export default function Form({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const id = nanoid();

// ще один варіант рішення
//   const [form, setForm] = useState({ name: '', number: '' });
//   const handleChange = e => {    const { name, value } = e.currentTarget;    setForm(prevForm => ({ ...prevForm, [name]: value }));  };
  
 const handleChange = e => {
    e.target.value.trim();
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  }; 

  const reset = () => {
    setNumber('');
    setName('');
  };

  const handleSubmit = e => {
    e.preventDefault();    
    const data = {
      id,
      name,
      number,
    };
    onSubmit(data);
    reset();
  };


   return (
    <FormEl onSubmit={handleSubmit}>
    <Label htmlFor={id}>
      Name
      <Input
        id={id}
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
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
        onChange={handleChange}
        required
      />
    </Label>
     <Button type="submit">Add contact</Button>     
        </FormEl>
    ) 
};