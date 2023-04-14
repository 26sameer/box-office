import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';

const Show = () => {
  const { showId } = useParams();
  // const { showData, showError } = useByShowId(showId);

  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
  });

  if (showError) {
    return <div>Error: {showError.message}</div>;
  }

  if (showData) {
    return <div>Data: {showData.name}</div>;
  }
  // We need to run logic only once so we specify an empty array of dependencies in useEffect()
  return <div>Data Loading</div>;
};

export default Show;
