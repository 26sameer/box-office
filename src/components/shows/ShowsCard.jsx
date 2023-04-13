import { Link } from 'react-router-dom';

const ShowsCard = ({ name, image, id, summary }) => {
  const summaryStriped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No Description';

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{summaryStriped}.....</p>

      <div>
        <Link to={`/show/${id}`}>Read More</Link>
        <button type="button">Star Me</button>
      </div>
    </div>
  );
};

export default ShowsCard;