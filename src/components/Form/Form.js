import React from "react";
// import { useState } from "react";
import { nanoid } from 'nanoid'
import {FormEl, Label, Button, Input} from './App.styled'


export default function Form({onSubmit}) {
  const id = nanoid();

  const handleSubmit = e => {
    e.preventDefault();   
    const data = {
      id: id,
      name: e.target.name.value.trim(),
      number: e.target.number.value.trim(),
    };
    onSubmit(data);
    e.target.reset();
    
  };

   return (
    <FormEl onSubmit={handleSubmit}>
    <Label htmlFor="name">
      Name
      <Input
        id={id}
        type="text"
        name="name"
        required
      />
    </Label>
    <Label htmlFor="number">
      Phone number
      <Input
        id={id}
        type="tel"
        name="number"
        required
      />
    </Label>
     <Button type="submit">Add contact</Button>     
        </FormEl>
    ) 
};