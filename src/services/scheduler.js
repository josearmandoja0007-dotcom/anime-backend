const cron = require('node-cron');
const { fetchAnimes } = require('./animeService');
const Anime = require('../models/Anime');

cron.schedule('*/5 * * * *', async () => {
  console.log('Atualizando animes...');

  const animes = await fetchAnimes();

  await Promise.all(
    animes.map(anime =>
      Anime.findOneAndUpdate(
        { mal_id: anime.mal_id },
        {
          mal_id: anime.mal_id,
          title: anime.title,
          genres: anime.genres,
        },
        { upsert: true, new: true }
      )
    )
  );

  console.log('Base atualizada!');
});