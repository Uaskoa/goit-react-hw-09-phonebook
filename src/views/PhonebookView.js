import { useEffect } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { useDispatch } from 'react-redux';
import { phonebookOperations } from '../redux/phonebook';
// import { getIsLoading } from "../redux/phonebook/phonebook-selectors";

export default function PhonebookView() {
  const dispatch = useDispatch();
  // const isLoadingContacts = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div className="form-wrapper">
      <div className="form-view">
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}

// class PhonebookView extends Component {
//   componentDidMount() {
//     this.props.fetchContacts();
//   }
//   render() {
//     return (
//       <div className="form-wrapper">
//         <div className="form-view">
//           <ContactForm />
//           <Filter />
//           <ContactList />
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   isLoadingContacts: getIsLoading(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(PhonebookView);
