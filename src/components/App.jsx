import React from 'react';
import { useState, useEffect } from 'react';
import Form from './Form/Form';
import Contacts from "./Form/Contacts";
import Filter from './Form/Filter';
import {Title, TitleContacts, TitleFind, WrapToFind} from './Form/App.styled'


export default function App() {
  // const [contacts, setContacts] = useState([]);
  const [contacts, setContacts] = useState(() => JSON.parse(window.localStorage.getItem('contacts')));
  const [filter, setFilter] = useState('');


  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const deleteContact = id => {
      setContacts(prevState => prevState.filter(contact => contact.id !== id));
    };

  
  
  
  const onSubmit = ({ id, name, number }) => {
    if (contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    )) return alert(`Contact ${name} ia already in phonebook`);
    
    setContacts( 
      prevState => [{ id, name, number }, ...prevState]
    );
  };

  // const addContact = data => {
  //   const array = contacts.filter(
  //     contact => contact.name.toLowerCase() === data.name.toLowerCase()
  //   );
  //   if (array.length > 0) {
  //     alert(`${data.name} is already in contacts`);
  //   } else {
  //     setContacts(prevState => [data, ...prevState]);
  //   }
  // };



  
  const formFilterChange = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
   const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  }
  
  return (
    <div>
      <Title>Phonebook</Title>
      <Form onSubmit={onSubmit} />
      <TitleContacts>Contacts</TitleContacts>
      <WrapToFind>
        <TitleFind>Find contacts by name</TitleFind>
        <Filter formFilterChange={formFilterChange} filter={filter} />
      </WrapToFind>
      <Contacts contacts={getVisibleContacts()} onDelete={deleteContact} />
        
    </div>
  );  
};



