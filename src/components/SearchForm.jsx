import { useState } from 'react';
import { useSearchState } from '../lib/useSearchState';
import CustomRadio from './CustomRadio';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useSearchState('');
  const [searchOption, setsearchOption] = useState('shows'); //Either shows or actors

  // Array of dependencies are present in useEffect --> []
  // If one of argument passed in Array of dependencies value changes useEffect will re-run

  const onSearchInputChange = event => {
    setSearchStr(event.target.value);
  };

  const onRadioChange = event => {
    setsearchOption(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    onSearch({ searchStr, searchOption });
    // Always destructure objects PLS REMEMBER IT!

    // const options = {
    //   q: searchStr,
    //   s: searchOption,
    // };
    // or pass as object or directly pass arguments
    // onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} onChange={onSearchInputChange} />

      <CustomRadio
        label="Shows"
        name="search-options"
        value="shows"
        onChange={onRadioChange}
        checked={searchOption === 'shows'}
      />

      <CustomRadio
        label="Actors"
        name="search-options"
        value="people"
        onChange={onRadioChange}
        checked={searchOption === 'people'}
      />

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
