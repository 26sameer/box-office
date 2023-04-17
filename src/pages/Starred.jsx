import { useQuery } from '@tanstack/react-query';
import { useStarredShows } from '../lib/useStarredShows';
import { getShowsByIds } from '../api/tvmaze';
import ShowsGrid from '../components/shows/ShowsGrid';
import AppTitle from '../components/AppTitle';
import Navs from '../components/Navs';
import { TextCenter } from '../components/common/TextCenter';

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
    return (
      <div>
        <AppTitle />
        <Navs />
        <TextCenter>No Shows are Starred</TextCenter>
      </div>
    );
  }
  if (starredShow?.length > 0) {
    return (
      <div>
        <AppTitle />
        <Navs />
        <ShowsGrid apiData={starredShow} />
      </div>
    );
  }
  if (starredShowError) {
    return (
      <div>
        <AppTitle />
        <Navs />
        <TextCenter> Error Occured: {starredShowError.message}</TextCenter>
      </div>
    );
  }

  return (
    <div>
      <AppTitle />
      <Navs />
      <TextCenter>Shows Are Loading</TextCenter>
    </div>
  );
};

export default Starred;
