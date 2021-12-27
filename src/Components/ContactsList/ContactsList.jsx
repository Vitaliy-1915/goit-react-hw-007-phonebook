import React from 'react';
import Button from '../Button/Button';
import s from '../ContactsList/ContactsList.module.css';
import { useDeleteContactMutation } from '../../redux/contactsApi';

export default function ContactsList({ contacts }) {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul className={s.ul}>
      {contacts.map(({ id, name, phone }) => (
        <li className={s.li} key={id}>
          {name} : {phone}
          <Button
            type="button"
            text="Delete"
            onClick={() => deleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
}
