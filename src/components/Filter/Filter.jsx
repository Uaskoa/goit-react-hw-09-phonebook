import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const onChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        className="input"
        value={value}
        name="filter"
        onChange={onChange}
      ></input>
    </>
  );
}
