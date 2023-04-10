import ActorsCard from './ActorsCard';

const ActorsGrid = ({ apiData }) => {
  console.log(apiData);

  return apiData.map(data => (
    <ActorsCard
      key={data.person.id}
      name={data.person.name}
      image={data.person.image ? data.person.image.medium : '/Not-Found.png'}
      gender={data.person.gender}
      birthday={data.person.birthday}
      deathday={data.person.deathday}
      country={data.person.country}
    />
  ));
};

export default ActorsGrid;
