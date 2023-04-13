import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';

const Show = () => {
  const { showId } = useParams();
  const [showData, setShowData] = useState(null);
  const [showError, setshowError] = useState(null);

  useEffect(() => {
    // getShowById();
    async function fetchData() {
      try {
        const data = await getShowById(showId);
        setShowData(data);
      } catch (error) {
        setshowError(error);
      }
    }

    fetchData();
  }, [showId]);

  if (showError) {
    return <div>Error: {showError.message}</div>;
  }

  if (showData) {
    return <div>Data: {showData.name}</div>;
  }
  // We need to run logic only once so we specify an empty array of dependencies
  return <div>Data Loading</div>;
};

export default Show;
