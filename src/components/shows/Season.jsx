import styled from 'styled-components';

const Season = ({ seasons }) => {
  return (
    <SeasonsWrapper>
      <p>Seasons in total: {seasons.length}</p>
      <p>
        Episodes in total:{' '}
        {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
      </p>

      <SeasonList>
        {seasons.map(season => {
          return (
            <div key={season.id} className="season-item">
              <div className="left">
                <h3>Season: {season.number}</h3>
                <p>Episode: {season.episodeOrder}</p>
              </div>

              <div className="right">
                <p>
                  <strong>Aired Date: </strong>
                  {season.premiereDate}--- {season.endDate}
                </p>
              </div>
            </div>
          );
        })}
      </SeasonList>
    </SeasonsWrapper>
  );
};

export default Season;

const SeasonsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;

const SeasonList = styled.div`
  display: flex;
  flex-direction: column;
  .season-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
    &:last-child {
      margin-bottom: 0;
    }
    .left {
      flex: 0 0 30%;
      border-right: 1px solid #b0b0b0;
      padding-right: 20px;
    }
    .right {
      padding-left: 20px;
      flex: 1;
    }
  }
`;
