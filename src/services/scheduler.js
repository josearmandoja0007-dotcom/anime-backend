const cron = require('node-cron');
const { fetchAnimes } = require('./animeService');
const Anime = require('../models/Anime');

// "*/5 * * * *" = a cada 5 minutos
cron.schedule('*/5 * * * *', async () => {
  console.log('Atualizando animes...');
  const animes = await fetchAnimes();

  for (const anime of animes) {
    await Anime.findOneAndUpdate(
      { id: anime.id },   // critério de busca
      anime,              // dados a atualizar
      { upsert: true }    // cria se não existir
    );
  }

  console.log('Base atualizada!');
});