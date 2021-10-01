const { response } = require('express');
const express = require('express');
const { getPairsOfPlayers } = require('./controller');
const router = express.Router();

router.get('/:height', async (req, resp = response, next) => {
  //try {
    height = parseInt(req.params.height)
    console.log(height)
    players = await getPairsOfPlayers(req, resp, height, next)
    console.log('play:',players)
    resp.json(players);
  // } catch (error) {
  //   resp.status(500).json({ error });
  // }
});

module.exports = router;
