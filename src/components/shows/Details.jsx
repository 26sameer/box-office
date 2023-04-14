const Details = ({ status, premiered, webChannel, network }) => {
  return (
    <div>
      <p>Status: {status}</p>
      <p>Premier Date: {premiered}</p>
      <div>
        Channel: {webChannel ? webChannel.name : ''}
        {network ? network.name : ''}
      </div>
    </div>
  );
};

export default Details;
