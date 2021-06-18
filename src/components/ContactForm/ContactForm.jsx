import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { phonebookOperations } from '../../redux/phonebook/';
import shortId from 'shortid';
import './ContactForm.scss';

export default function ContactForm() {
  const dispatch = useDispatch();

  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const nameInputId = shortId.generate();
  const phoneInputId = shortId.generate();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setContact(prevContact => ({ ...prevContact, [name]: value }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = contact;
    dispatch(phonebookOperations.addContact(name, number));
    setContact({
      name: '',
      number: '',
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form-label" htmlFor={nameInputId}>
        <span className="form-label-title">Name</span>
        <input
          className="input"
          type="text"
          id={nameInputId}
          value={contact.name}
          onChange={handleChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className="form-label" htmlFor={phoneInputId}>
        <span className="form-label-title">Number</span>
        <input
          className="input"
          type="tel"
          id={phoneInputId}
          value={contact.number}
          name="number"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button className="form-button button button-center" type="submit">
          Add contact
        </button>
      </label>
    </form>
  );
}

// export default function ContactForm() {
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const nameInputId = shortId.generate();
//   const phoneInputId = shortId.generate();

//   const handleChange = evt => {
//     const { name, value } = evt.target;

//     switch (name) {
//       case 'name':
//         setName(value);
//         break;

//       case 'number':
//         setNumber(value);
//         break;

//       default:
//         console.warn('Such type of field is not valid');
//     }
//   };

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     dispatch(phonebookOperations.addContact(name, number));
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form className="form" onSubmit={handleSubmit}>
//       <label className="form-label" htmlFor={nameInputId}>
//         <span className="form-label-title">Name</span>
//         <input
//           className="input"
//           type="text"
//           id={nameInputId}
//           value={name}
//           onChange={handleChange}
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//           required
//         />
//       </label>
//       <label className="form-label" htmlFor={phoneInputId}>
//         <span className="form-label-title">Number</span>
//         <input
//           className="input"
//           type="tel"
//           id={phoneInputId}
//           value={number}
//           name="number"
//           onChange={handleChange}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//           required
//         />
//         <button className="form-button button button-center" type="submit">
//           Add contact
//         </button>
//       </label>
//     </form>
//   );
// }
