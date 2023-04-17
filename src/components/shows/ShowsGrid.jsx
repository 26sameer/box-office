import ShowsCard from './ShowsCard';
import { useStarredShows } from '../../lib/useStarredShows';
import { FlexGrid } from '../common/FlexGrid';

const ShowsGrid = ({ apiData }) => {
  const [starredShow, dispatchStarred] = useStarredShows();

  const onStarMeClick = showId => {
    const isStarred = starredShow.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  };

  return (
    <FlexGrid>
      {apiData.map(data => (
        <ShowsCard
          key={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : '/Not-Found.png'}
          id={data.show.id}
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
          isStarred={starredShow.includes(data.show.id)}
        />
      ))}
      ;
    </FlexGrid>
  );
};

export default ShowsGrid;
