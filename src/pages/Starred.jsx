import { useQuery } from '@tanstack/react-query';
import AppTitle from '../components/AppTitle';
import { useStarredShows } from '../lib/useStarredShows';
import { getShowsByIds } from '../api/tvmaze';
import ShowsGrid from '../components/shows/ShowsGrid';
const Starred = () => {
  const [starredShowIds] = useStarredShows();

  const { data: starredShow, error: starredShowError } = useQuery({
    queryKey: ['starred', starredShowIds],
    queryFn: async () =>
      getShowsByIds(starredShowIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  console.log(starredShow);

  if (starredShow?.length === 0) {
    return <div>No Shows are Starred</div>;
  }
  if (starredShow?.length > 0) {
    return <ShowsGrid apiData={starredShow} />;
  }
  if (starredShowError) {
    return <div>Error Occured: {starredShowError.message}</div>;
  }

  return (
    <div>
      <AppTitle />
      <div>Shows Are Loading</div>
    </div>
  );
};

export default Starred;
