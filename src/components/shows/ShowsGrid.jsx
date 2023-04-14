import ShowsCard from './ShowsCard';
import { useReducer, useEffect } from 'react';

const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const persistedValue = localStorage.getItem(localStorageKey);
    return persistedValue ? JSON.parse(persistedValue) : initial;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
};

const starredShowReducer = (currentStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return currentStarred.concat(action.showId);
    case 'UNSTAR':
      return currentStarred.filter(showId => showId !== action.showId);
    default:
      return currentStarred;
  }
};

const ShowsGrid = ({ apiData }) => {
  const [starredShow, dispatchStarred] = usePersistedReducer(
    starredShowReducer,
    [],
    'starredShows'
  );
  console.log(starredShow);
  const onStarMeClick = showId => {
    const isStarred = starredShow.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  };

  return apiData.map(data => (
    <ShowsCard
      key={data.show.id}
      name={data.show.name}
      image={data.show.image ? data.show.image.medium : '/Not-Found.png'}
      id={data.show.id}
      summary={data.show.summary}
      onStarMeClick={onStarMeClick}
    />
  ));
};

export default ShowsGrid;
