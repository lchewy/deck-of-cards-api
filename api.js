const models = require("./models");
const Cards = models.card;
const sequelize = models.sequelize;
const utils = require("./utils");

module.exports = app => {
  app.get("/api/get_deck", async (req, res) => {
    const new_deck = await Cards.findAll({ order: sequelize.random() });
    req.session.deck = req.session.deck || new_deck;
    res.send(req.session.deck);
  });

  app.get("/api/shuffle_deck", (req, res) => {
    const new_deck = utils.randomize(req.session.deck);
    req.session.deck = new_deck;
    res.send(req.session.deck);

  });

  app.get("/api/get_spades", (req, res) => {
    const hand = utils.getBySuit(req.session.deck, "SPADES");
    res.send(hand);
  });

  app.get("/api/get_hearts", (req, res) => {
    const hand = utils.getBySuit(req.session.deck, "HEARTS");
    res.send(hand);
  });

  app.get("/api/get_clubs", (req, res) => {
    const hand = utils.getBySuit(req.session.deck, "CLUBS");
    res.send(hand);
  });

  app.get("/api/get_diamonds", (req, res) => {
    const hand = utils.getBySuit(req.session.deck, "DIAMONDS");
    res.send(hand);
  });

  app.get("/api/order_deck", (req, res) => {
    const order_deck = utils.sortBySuits(req.session.deck);
    req.session.deck = order_deck;
    res.send(req.session.deck);
  });
};
