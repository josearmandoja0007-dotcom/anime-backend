const express = require('express');
const router = express.Router();
const Anime = require('../models/Anime');

router.get('/animes', async (req, res) => {
  try {
    const animes = await Anime.find();
    res.json(animes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar animes' });
  }
});

module.exports = router;