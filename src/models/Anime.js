const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
  mal_id: Number,
  type: String,
  name: String,
  url: String,
}, { _id: false });

const AnimeSchema = new mongoose.Schema({
  mal_id: { type: Number, unique: true },
  title: String,
  genres: { type: [GenreSchema], default: [] },
}, { timestamps: true });

module.exports = mongoose.model('Anime', AnimeSchema);