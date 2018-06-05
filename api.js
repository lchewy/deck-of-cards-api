const models = require("./models");
const Cards = models.card;
const sequelize = models.sequelize;
const utils = require("./utils");

module.exports = app => {
  app.get("/api/all_cards", async (req, res) => {
    const new_deck = await Cards.findAll({ order: sequelize.random() });
    req.session.deck = req.session.deck || new_deck;
    res.send(req.session.deck);
  });

  app.get("/api/shuffle_deck", (req, res) => {
    const new_deck = utils.randomize(req.session.deck);
    req.session.deck = new_deck;
    res.send(req.session.deck);
  });

  app.get("/api/deck_spades", (req, res) => {
    const spades = utils.getBySuit(req.session.deck, "SPADES");
    req.session.deck = spades;
    res.send(req.session.deck);
  });

  app.get("/api/deck_hearts", (req, res) => {
    const hearts = utils.getBySuit(req.session.deck, "HEARTS");
    req.session.deck = hearts;
    res.send(req.session.deck);
  });

  app.get("/api/deck_clubs", (req, res) => {
    const clubs = utils.getBySuit(req.session.deck, "CLUBS");
    req.session.deck = clubs;
    res.send(req.session.deck);
  });

  app.get("/api/deck_diamonds", (req, res) => {
    const diamonds = utils.getBySuit(req.session.deck, "DIAMONDS");
    req.session.deck = diamonds;
    res.send(req.session.deck);
  });

  app.get("/api/order_deck", (req, res) => {
    const order_deck = utils.sortBySuits(req.session.deck);
    req.session.deck = order_deck;
    res.send(req.session.deck);
  });

  
};
