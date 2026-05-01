const nock = require('nock');
const { fetchAnimes } = require('./animeService');

test('deve retornar lista de animes', async () => {
  // simula a API sem fazer request real
  nock('https://api-animaflix.herokuapp.com')
    .get('/animes?fields=genres&text=Legendado')
    .reply(200, [{ id: '1', title: 'Naruto' }]);

  const animes = await fetchAnimes();

  expect(animes).toHaveLength(1);
  expect(animes[0].title).toBe('Naruto');
});
