import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

// Component Life Cycle
// MOUNT
// RE-RENDER
// UNMOUNT
// Component Life Cycle
// 1.MOUNT
// 2.RE-RENDER
// 2.5) Logic before next re render
// 3.UNMOUNT

// useEffect runs atleast once
// useEffect(() => {
//   console.log('searchOption Changes', searchOption);
// Logic inside useEffect is rendered only once when component mounts
// Also returns a cleanup function
// return () => {
// console.log('Before next render', searchOption);
// Return function is executed for each change in argument passed in array of dependencies
//   };
// }, [searchOption]);

// console.log('Comp Re-renders');

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
