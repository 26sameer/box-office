import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

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

    if (apiData?.length === 0) {
      return <div>No Results</div>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowsGrid apiData={apiData} />
      ) : (
        <ActorsGrid apiData={apiData} />
      );
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
