//import { nanoid } from 'nanoid';
import { ContactForm } from './contactForm/contactForm';
import Filter from './filter/filter';
import ContactList from './contactList/contactList';
// import { useSelector, useDispatch } from 'react-redux';
// import { getContacts, getFilter } from 'redux/selectors';

// const INITIAL_STATE = {
//   contacts: savedContacts,
//   filter: '',
// };

export const App = () => {
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);

  // const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(INITIAL_STATE.contacts);
  // const [filter, setFilter] = useState(INITIAL_STATE.filter);

  // const addContact = ({ name, number }) => {
  //   const includedСontact = contacts.find(contact => contact.name === name);
  //   if (includedСontact) {
  //     alert(name + 'is already in contacts.');
  //     return;
  //   }
  //   dispatch(
  //     addContact(
  //       {
  //         id: nanoid(),
  //         name,
  //         number,
  //       },
  //       ...contacts
  //     )
  //   );
  // };
  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const normalizedValue = filter.toLocaleLowerCase();
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLocaleLowerCase().includes(normalizedValue)
  // );

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // useEffect(() => {
  //   const LSContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(LSContacts);
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <div className="wrap">
        <div>
          <ContactForm />
          <Filter />
        </div>
        <div>
          <h2>Contacts</h2>
          <ContactList />
        </div>
      </div>
    </div>
  );
};
