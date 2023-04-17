import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchForShows, searchForPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';
import AppTitle from '../components/AppTitle';
import Navs from '../components/Navs';
import { TextCenter } from '../components/common/TextCenter';

const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.searchStr)
        : searchForPeople(filter.searchStr),
    // ⬇️ disabled as long as the filter is empty
    // Whenever search is clicked, filter changes hence queryKey changes and react query will fetch data again
    enabled: !!filter,
    // If set to true, the query will refetch on window focus if the data is stale. If set to false,
    //⬇️ the query will not refetch on window focus.
    refetchOnWindowFocus: false,
  });

  const onSearch = async ({ searchStr, searchOption }) => {
    // https://api.tvmaze.com/search/shows?q=marvel
    setFilter({ searchStr, searchOption });
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <TextCenter>Error Occurred: {apiDataError.message}</TextCenter>;
    }

    if (apiData?.length === 0) {
      return <TextCenter>No Results</TextCenter>;
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
      <AppTitle />
      <Navs />
      <SearchForm onSearch={onSearch} />

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
