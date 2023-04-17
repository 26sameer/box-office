import { useState } from 'react';
import { useSearchState } from '../lib/useSearchState';
import CustomRadio from './CustomRadio';
import styled from 'styled-components';

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
      <SearchInput
        placeholder="Search for Something"
        type="text"
        value={searchStr}
        onChange={onSearchInputChange}
      />

      <RadiosWrapper>
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
      </RadiosWrapper>
      <SearchButtonWrapper>
        <button type="submit">Search</button>
      </SearchButtonWrapper>
    </form>
  );
};

export default SearchForm;

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
