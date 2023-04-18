import ActorsCard from './ActorsCard';
import { FlexGrid } from '../common/FlexGrid';
import NotFoundImgSrc from '../../lib/Not-Found.png';

const ActorsGrid = ({ apiData }) => {
  console.log(apiData);

  return (
    <FlexGrid>
      {apiData.map(data => (
        <ActorsCard
          key={data.person.id}
          name={data.person.name}
          image={data.person.image ? data.person.image.medium : NotFoundImgSrc}
          gender={data.person.gender}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          country={data.person.country}
        />
      ))}
      ;
    </FlexGrid>
  );
};

export default ActorsGrid;
