import ShowsCard from './ShowsCard';

const ShowsGrid = ({ apiData }) => {
  return apiData.map(data => (
    <ShowsCard
      key={data.show.id}
      name={data.show.name}
      image={data.show.image ? data.show.image.medium : '/Not-Found.png'}
      id={data.show.id}
      summary={data.show.summary}
    />
  ));
};

export default ShowsGrid;
