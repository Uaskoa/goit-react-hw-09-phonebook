import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/phonebook/";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";

const Filter = ({ value, onChange }) => (
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

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  value: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
