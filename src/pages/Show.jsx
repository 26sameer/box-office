import { useParams } from 'react-router-dom';

const Show = () => {
  const { showId } = useParams();
  return <div>{showId}</div>;
};

export default Show;
