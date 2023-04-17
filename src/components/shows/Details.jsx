import styled from 'styled-components';

const Details = ({ status, premiered, webChannel, network }) => {
  return (
    <DetailsWrapper>
      <p>Status: {status}</p>
      <p>Premier Date: {premiered}</p>
      <div>
        Channel: {webChannel ? webChannel.name : ''}
        {network ? network.name : ''}
      </div>
    </DetailsWrapper>
  );
};

export default Details;

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;
