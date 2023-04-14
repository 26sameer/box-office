const Season = ({ seasons }) => {
  return (
    <div>
      <p>Seasons in total: {seasons.length}</p>
      <p>
        Episodes in total:{' '}
        {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
      </p>

      <div>
        {seasons.map(season => {
          return (
            <div key={season.id}>
              <h3>Season: {season.number}</h3>
              <p>Episode: {season.episodeOrder}</p>

              <div>
                <p>Premier Date: {season.premiereDate}</p>
                <p>End Date: {season.endDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Season;
