import './App.css';
import React from 'react';
import PhoneBookTitle from './Components/PhoneBookTitle/PhoneBookTitle';
import ContactsList from './Components/ContactsList/ContactsList';
import Form from './Components/Form/Form';
// import Filter from './Components/Filter/Filter';
import { useGetContactsQuery } from './redux/contactsApi';

function App() {
  const { data, error, isLoading } = useGetContactsQuery('');

  return (
    <div className="App">
      <PhoneBookTitle title="Phonebook" />
      {data && <Form contacts={data} />}
      <PhoneBookTitle title="Contacts" />
      {/* <Filter /> */}
      {data && <ContactsList contacts={data} />}
    </div>
  );
}

export default App;

// import './App.css';
// import React, { Component } from 'react';
// import PhoneBookTitle from './Components/PhoneBookTitle/PhoneBookTitle';
// import ContactsList from './Components/ContactsList/ContactsList';
// import Form from './Components/Form/Form';
// import Filter from './Components/Filter/Filter';
// // import { v4 as unId } from 'uuid';

// export class App extends Component {
//   // state = {
//   // contacts: [
//   //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   // ],
//   // filter: '',
//   // };

//   // componentDidMount() {
//   //   const contacts = localStorage.getItem('contacts');
//   //   const parsedContacts = JSON.parse(contacts);

//   //   if (parsedContacts) {
//   //     this.setState({ contacts: parsedContacts });
//   //   }
//   // }

//   // componentDidUpdate(prevProps, prevState) {
//   //   if (this.state.contacts !== prevState.contacts) {
//   //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   //   }
//   // }

//   // formSubmit = value => {
//   //   const contact = {
//   //     id: unId(),
//   //     name: value.name,
//   //     number: value.number,
//   //   };

//   //   //   this.setState((prevState) => ({
//   //   // contacts: [...prevState.contacts, contact],
//   //   //   }));

//   //   this.state.contacts.find(cont =>
//   //     cont.name.toLowerCase().includes(contact.name.toLowerCase()),
//   //   )
//   //     ? alert(`${contact.name} is already in contacts`)
//   //     : this.setState(prevState => ({
//   //         contacts: [...prevState.contacts, contact],
//   //       }));
//   // };

//   // onChangeFilter = e => {
//   //   this.setState({
//   //     filter: e.currentTarget.value,
//   //   });
//   // };

//   // onDeleteContact = contactId => {
//   //   // console.log(contactId);
//   //   this.setState(prevState => ({
//   //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//   //   }));
//   // };

//   render() {
//     // const { contacts, filter } = this.state;

//     // const normalizeContacts = this.state.filter.toLocaleLowerCase();

//     // const filterContacts = this.state.contacts.filter(contact =>
//     //   contact.name.toLowerCase().includes(normalizeContacts),
//     // );

//     return (
//       <div className="App">
//         <PhoneBookTitle title="Phonebook" />
//         {/* <Form onSubmit={this.formSubmit} /> */}
//
//         <PhoneBookTitle title="Contacts" />
//         {/* <Filter value={this.state.filter} onChange={this.onChangeFilter} /> */}
//
//         {/* <ContactsList contacts={filterContacts} onDeleteContact={this.onDeleteContact} /> */}
//
//       </div>
//     );
//   }
// }

// export default App;
