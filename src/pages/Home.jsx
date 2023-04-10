import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  // const onSearch = async({ q, s });
  // or either directly  pass arguments or pass as objects
  const onSearch = async (searchStr, searchOption) => {
    // https://api.tvmaze.com/search/shows?q=marvel

    try {
      setApiDataError(null);
      let result;
      if (searchOption === 'shows') {
        result = await searchForShows(searchStr);
      } else {
        result = await searchForPeople(searchStr);
      }
      setApiData(result);
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
      <SearchForm onSearch={onSearch} />

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
