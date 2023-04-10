import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState('');
  const [searchOption, setsearchOption] = useState('shows'); //Either shows or actors

  const onSearchInputChange = event => {
    setSearchStr(event.target.value);
  };

  const onRadioChange = event => {
    setsearchOption(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    onSearch(searchStr, searchOption);

    // const options = {
    //   q: searchStr,
    //   s: searchOption,
    // };
    // or pass as object or directly pass arguments
    // onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Shows
        <input
          type="radio"
          name="search-options"
          value="shows"
          onChange={onRadioChange}
          checked={searchOption === 'shows'}
        />
      </label>

      <label>
        Actors
        <input
          type="radio"
          name="search-options"
          value="people"
          onChange={onRadioChange}
          checked={searchOption === 'people'}
        />
      </label>

      <input type="text" value={searchStr} onChange={onSearchInputChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;