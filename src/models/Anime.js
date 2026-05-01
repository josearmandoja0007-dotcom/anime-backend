const mongoose = require('mongoose');

const AnimeSchema = new mongoose.Schema({
  id: String,
  title: String,
  genres: [String],
  // adicione outros campos conforme a API retornar
}, { timestamps: true });

module.exports = mongoose.model('Anime', AnimeSchema);