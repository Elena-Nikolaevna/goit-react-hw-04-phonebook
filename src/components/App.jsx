import s from './App.module.css';
//import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactItem from './ContactItem/ContactItem';
import {useState,useEffect} from "react";
import { nanoid } from 'nanoid';


function App() { 
  const [contacts, setContacts] = useState(()=>JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

   useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
   }, [contacts])

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId))
};

  const addContacts = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    if (contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
      alert(`${data.name} is already in contacts`);
      return;
    };
    setContacts(prevState => [contact, ...prevState]
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();

  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

    return (
      <>
          <div className={s.container}>
            <h1 className={s.title}>Phonebook</h1>
            <ContactForm onSubmit={addContacts} />
            <h2 className={s.title}>Contacts</h2>
            <Filter value={filter} onChange={changeFilter} />
            <ContactList>
                <ContactItem contacts={visibleContact}
                onDeleteContact={deleteContact}/>
            </ContactList>
          </div>
      </>
    );
  }


export default App;
