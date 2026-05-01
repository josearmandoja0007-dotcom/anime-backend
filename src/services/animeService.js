const axios = require('axios');

const API_URL = 'https://api-animaflix.herokuapp.com/animes?fields=genres&text=Legendado';

async function fetchAnimes() {
  const { data } = await axios.get(API_URL);
  return data;
}

module.exports = { fetchAnimes };
