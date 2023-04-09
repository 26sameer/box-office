import { useState } from 'react';

const Home = () => {
  const [searchStr, setsearchStr] = useState('');

  const onSearchInputChange = event => {
    setsearchStr(event.target.value);
  };

  const onSearch = async event => {
    event.preventDefault();

    // https://api.tvmaze.com/search/shows?q=marvel
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchStr}`
    );
    const body = await response.json();
    console.log(body);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home;
