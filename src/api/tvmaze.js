const BASE_URL = 'https://api.tvmaze.com';

const apiGet = async queryStr => {
  const response = await fetch(`${BASE_URL}${queryStr}`);
  const body = await response.json();
  return body;
};

export const searchForShows = query => apiGet(`/search/shows?q=${query}`);
