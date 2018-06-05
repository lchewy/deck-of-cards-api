
const cards = [
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Playing_card_club_A.svg",
    val: "ACE",
    suit: "CLUBS",
    code: "AC"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Playing_card_club_2.svg",
    val: "2",
    suit: "CLUBS",
    code: "2C"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Playing_card_club_3.svg",
    val: "3",
    suit: "CLUBS",
    code: "3C"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/Playing_card_club_4.svg",
    val: "4",
    suit: "CLUBS",
    code: "4C"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Playing_card_club_5.svg",
    val: "5",
    suit: "CLUBS",
    code: "5C"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/Playing_card_club_6.svg",
    val: "6",
    suit: "CLUBS",
    code: "6C"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Playing_card_club_7.svg",
    val: "7",
    suit: "CLUBS",
    code: "7C"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Playing_card_club_8.svg",
    val: "8",
    suit: "CLUBS",
    code: "8C"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/2/27/Playing_card_club_9.svg",
    val: "9",
    suit: "CLUBS",
    code: "9C"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Playing_card_club_10.svg",
    val: "10",
    suit: "CLUBS",
    code: "10C"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Playing_card_club_J.svg",
    val: "JACK",
    suit: "CLUBS",
    code: "JACKC"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/Playing_card_club_Q.svg",
    val: "QUEEN",
    suit: "CLUBS",
    code: "QUEENC"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/2/22/Playing_card_club_K.svg",
    val: "KING",
    suit: "CLUBS",
    code: "KINGC"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Playing_card_diamond_A.svg",
    val: "ACE",
    suit: "DIAMONDS",
    code: "AD"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/5/59/Playing_card_diamond_2.svg",
    val: "2",
    suit: "DIAMONDS",
    code: "2D"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/8/82/Playing_card_diamond_3.svg",
    val: "3",
    suit: "DIAMONDS",
    code: "3D"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/2/20/Playing_card_diamond_4.svg",
    val: "4",
    suit: "DIAMONDS",
    code: "4D"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/Playing_card_diamond_5.svg",
    val: "5",
    suit: "DIAMONDS",
    code: "5D"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/8/80/Playing_card_diamond_6.svg",
    val: "6",
    suit: "DIAMONDS",
    code: "6D"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/e/e6/Playing_card_diamond_7.svg",
    val: "7",
    suit: "DIAMONDS",
    code: "7D"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/7/78/Playing_card_diamond_8.svg",
    val: "8",
    suit: "DIAMONDS",
    code: "8D"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Playing_card_diamond_9.svg",
    val: "9",
    suit: "DIAMONDS",
    code: "9D"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Playing_card_diamond_10.svg",
    val: "10",
    suit: "DIAMONDS",
    code: "10D"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Playing_card_diamond_J.svg",
    val: "JACK",
    suit: "DIAMONDS",
    code: "JACKD"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Playing_card_diamond_Q.svg",
    val: "QUEEN",
    suit: "DIAMONDS",
    code: "QUEEND"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/7/78/Playing_card_diamond_K.svg",
    val: "KING",
    suit: "DIAMONDS",
    code: "KINGD"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg",
    val: "ACE",
    suit: "HEARTS",
    code: "AH"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Playing_card_heart_2.svg",
    val: "2",
    suit: "HEARTS",
    code: "2H"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Playing_card_heart_3.svg",
    val: "3",
    suit: "HEARTS",
    code: "3H"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/Playing_card_heart_4.svg",
    val: "4",
    suit: "HEARTS",
    code: "4H"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/5/52/Playing_card_heart_5.svg",
    val: "5",
    suit: "HEARTS",
    code: "5H"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/Playing_card_heart_6.svg",
    val: "6",
    suit: "HEARTS",
    code: "6H"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/Playing_card_heart_7.svg",
    val: "7",
    suit: "HEARTS",
    code: "7H"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Playing_card_heart_8.svg",
    val: "8",
    suit: "HEARTS",
    code: "8H"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Playing_card_heart_9.svg",
    val: "9",
    suit: "HEARTS",
    code: "9H"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Playing_card_heart_10.svg",
    val: "10",
    suit: "HEARTS",
    code: "10H"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/4/46/Playing_card_heart_J.svg",
    val: "JACK",
    suit: "HEARTS",
    code: "JACKH"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Playing_card_heart_Q.svg",
    val: "QUEEN",
    suit: "HEARTS",
    code: "QUEENH"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/d/dc/Playing_card_heart_K.svg",
    val: "KING",
    suit: "HEARTS",
    code: "KINGH"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Playing_card_spade_A.svg",
    val: "ACE",
    suit: "SPADES",
    code: "AS"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/Playing_card_spade_2.svg",
    val: "2",
    suit: "SPADES",
    code: "2S"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/5/52/Playing_card_spade_3.svg",
    val: "3",
    suit: "SPADES",
    code: "3S"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Playing_card_spade_4.svg",
    val: "4",
    suit: "SPADES",
    code: "4S"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/Playing_card_spade_5.svg",
    val: "5",
    suit: "SPADES",
    code: "5S"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Playing_card_spade_6.svg",
    val: "6",
    suit: "SPADES",
    code: "6S"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/6/66/Playing_card_spade_7.svg",
    val: "7",
    suit: "SPADES",
    code: "7S"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/2/21/Playing_card_spade_8.svg",
    val: "8",
    suit: "SPADES",
    code: "8S"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Playing_card_spade_9.svg",
    val: "9",
    suit: "SPADES",
    code: "9S"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Playing_card_spade_10.svg",
    val: "10",
    suit: "SPADES",
    code: "10S"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Playing_card_spade_J.svg",
    val: "JACK",
    suit: "SPADES",
    code: "JS"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Playing_card_spade_Q.svg",
    val: "QUEEN",
    suit: "SPADES",
    code: "QS"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Playing_card_spade_K.svg",
    val: "KING",
    suit: "SPADES",
    code: "KS"
  }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cards', cards, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
