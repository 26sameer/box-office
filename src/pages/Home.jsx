import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOption, setsearchOption] = useState('shows'); //Either shows or actors

  console.log(searchOption);
  const OPTION = searchOption;

  const onSearchInputChange = event => {
    setSearchStr(event.target.value);
  };

  const onRadioChange = event => {
    setsearchOption(event.target.value);
  };

  const onSearch = async event => {
    event.preventDefault();
    // https://api.tvmaze.com/search/shows?q=marvel

    try {
      setApiDataError(null);
      if (OPTION === 'shows') {
        const result = await searchForShows(searchStr);
        setApiData(result);
      } else {
        const result = await searchForPeople(searchStr);
        setApiData(result);
      }
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occurred: {apiDataError.message}</div>;
    }

    if (apiData) {
      return apiData[0].show
        ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    }

    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
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
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
