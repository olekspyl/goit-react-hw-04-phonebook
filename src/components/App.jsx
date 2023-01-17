import React from 'react';
import { useState, useEffect } from 'react';
import Form from './Form/Form';
import Contacts from "./Form/Contacts";
import Filter from './Form/Filter';
import {Title, TitleContacts, TitleFind, WrapToFind} from './Form/App.styled'


export default function App({id, name, number}) {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');


  useEffect(() => {
    const contactsStorage = window.localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsStorage);
    setContacts( parsedContacts)
  }, []);


  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const deleteContact = () => {
      setContacts(prevState => 
        prevState.contacts.filter(contact => contact.id !== id),
      );
    };

  const addContact = () => {
    if (contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    )) return alert(`Contact ${name} ia already in phonebook`);
    
    setContacts(prevState => 
        [...prevState.contacts, { id, name, number }]
    );
  };

  const formFilterChange = e => {
    setFilter(e.target.value);
  };

  const normalizedElem = filter.toLowerCase();
  const filteredElements = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedElem));

  return (
    <div>
      <Title>Phonebook</Title>
      <Form onSubmit={addContact} />
      <TitleContacts>Contacts</TitleContacts>
      <WrapToFind>
        <TitleFind>Find contacts by name</TitleFind>
        <Filter formFilterChange={formFilterChange} filter={filter} />
      </WrapToFind>
      <Contacts contacts={filteredElements} onDelete={deleteContact} />
        
    </div>
  );  
};



