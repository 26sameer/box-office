const ShowMainData = ({ image, name, rating, summary, genres }) => {
  return (
    <div>
      <img src={image ? image.original : '/Not-Found.png'} alt={name} />

      <div>
        <h2>{name}</h2>
        <p>Rating: {rating.average || 'N/A'}</p>
        <p dangerouslySetInnerHTML={{ __html: summary }} />
        <div>
          Genres:{' '}
          {genres.map((genre, idx) => (
            <span key={genre}>{genres[idx]} </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowMainData;
