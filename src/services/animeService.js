const axios = require('axios');

const API_URL = 'https://api.jikan.moe/v4/anime?q=legendado&limit=20';

async function fetchAnimes() {
  const { data } = await axios.get(API_URL);
  const animes = data.data;
  
  // ver o que está chegando
  console.log('Primeiro anime:', JSON.stringify(animes[0], null, 2));
  
  return animes;
}

module.exports = { fetchAnimes };