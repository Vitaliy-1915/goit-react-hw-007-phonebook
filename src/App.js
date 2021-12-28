import './App.css';
import { useState } from 'react';
import PhoneBookTitle from './Components/PhoneBookTitle/PhoneBookTitle';
import ContactsList from './Components/ContactsList/ContactsList';
import Form from './Components/Form/Form';
import Filter from './Components/Filter/Filter';
import { useGetContactsQuery } from './redux/contactsApi';

function App() {
  const [filterValue, setFilterValue] = useState('');
  const { data, error, isError } = useGetContactsQuery('');

  const onChangeFilter = e => {
    setFilterValue(e.currentTarget.value);
  };

  const filterContacts = contacts => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase()),
    );
  };

  return (
    <div className="App">
      <PhoneBookTitle title="Phonebook" />
      {data && <Form contacts={data} />}
      {data && <PhoneBookTitle title="Contacts" />}
      {isError && (
        <p>
          {error.data}, <br />
          Status - {error.status}
        </p>
      )}
      {data && <Filter value={filterValue} onChange={onChangeFilter} />}
      {data && <ContactsList contacts={filterContacts(data)} />}
    </div>
  );
}

export default App;
