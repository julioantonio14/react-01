import P from 'prop-types';
import "./styles.css";
export const TextInput = ({ searchValue, handleChange }) => {
    return (
        <input
            className="text-input"
            onChange={handleChange}
            type="search"
            value={searchValue}
            name=""
            id=""
            placeholder="Escreva Alguma coisa"
        />
    );
};


TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
}