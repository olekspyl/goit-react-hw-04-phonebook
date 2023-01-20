import React from 'react';
import { useState, useEffect } from 'react';
import Form from './Form/Form';
import Contacts from "./Form/Contacts";
import Filter from './Form/Filter';
import { Title, TitleContacts, TitleFind, WrapToFind } from './Form/App.styled'


export default function App() {
  const [contacts, setContacts] = useState(() => {return JSON.parse(window.localStorage.getItem('contacts')) ?? []});
  const [filter, setFilter] = useState('');


  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);


  const formFilterChange = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };


  const deleteContact = id => {
      setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };
  

  const addData = data => {
    if (contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()))
    { alert(`Contact ${data.name} ia already in phonebook`) }
    else {
    setContacts(
      prevState => [data, ...prevState]
      )
    };
  };

  return (
    <div>
      <Title>Phonebook</Title>
      <Form onSubmit={addData} />
      <TitleContacts>Contacts</TitleContacts>
      <WrapToFind>
        <TitleFind>Find contacts by name</TitleFind>
        <Filter formFilterChange={formFilterChange} filter={filter} />
      </WrapToFind>
      <Contacts contacts={getVisibleContacts()} onDelete={deleteContact} />
    </div>
  );
};
