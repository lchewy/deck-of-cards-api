const _ = require("lodash");

exports.randomize = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

exports.getBySuit = (array, suits) => {
  const removeSuit = _.filter(array, ({ suit }) => {
    return suit === suits;
  });
  const deck = _.filter(array, ({ suit }) => {
    return suit !== suits;
  });

  return [...removeSuit, ...deck];
};

const sortBySuit = (array, deck) => {
  switch (deck.val) {
    case "ACE":
      array[0] = deck;
      break;
    case "JACK":
      array[10] = deck;
      break;
    case "QUEEN":
      array[11] = deck;
      break;
    case "KING":
      array[12] = deck;
      break;
    default:
      array[deck.val - 1] = deck;
  }
};

exports.sortBySuits = deck => {
  const spades = [];
  const hearts = [];
  const clubs = [];
  const diamonds = [];

  for (var i = 0; i < deck.length; i++) {
    if (deck[i].suit === "SPADES") {
      sortBySuit(spades, deck[i]);
    } else if (deck[i].suit === "HEARTS") {
      sortBySuit(hearts, deck[i]);
    } else if (deck[i].suit === "CLUBS") {
      sortBySuit(clubs, deck[i]);
    } else {
      sortBySuit(diamonds, deck[i]);
    }
  }

  return [...diamonds, ...clubs, ...hearts, ...spades];
};
