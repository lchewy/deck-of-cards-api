const supertest = require("supertest-as-promised");
const expect = require("chai").expect;
const agent = supertest.agent(require("../index"));
const Cards = require("../models").card;

describe("API routes", () => {
  describe("/api/get_deck", () => {
    it("responds with an array of 52 elements", () => {
      return agent
        .get("/api/get_deck")
        .expect(200)
        .expect(res => {
          expect(res.body.length).to.eql(52);
        });
    });
  });

  describe("/api/shuffle_deck", () => {
    it("responds with an array of 52 elements", () => {
      return agent
        .get("/api/shuffle_deck")
        .expect(200)
        .expect(res => {
          expect(res.body.length).to.eql(52);
        });
    });

    it("reponds with a shuffled array", () => {
      // super simple test for randomness
      return agent
        .get("/api/shuffle_deck")
        .expect(200)
        .expect(async res => {
          const deck = await Cards.findAll();
          const index = Math.floor(Math.random() * 51) + 1;
          expect(res.body[index].val).to.not.eql(deck[index].val);
        });
    });
  });

  describe("/api/get_spades", () => {
    it("responds with 13 items", () => {
      return agent
        .get("/api/get_spades")
        .expect(200)
        .expect(res => {
          const index = Math.floor(Math.random() * 12) + 1;
          expect(res.body.length).to.eql(13);
        });
    });
    it("responds with suit of SPADES", () => {
      return agent
        .get("/api/get_spades")
        .expect(200)
        .expect(res => {
          const index = Math.floor(Math.random() * 12) + 1;
          expect(res.body[index].suit).to.equal("SPADES");
        });
    });
  });

  describe("/api/get_hearts", () => {
    it("responds with 13 items", () => {
      return agent
        .get("/api/get_hearts")
        .expect(200)
        .expect(res => {
          const index = Math.floor(Math.random() * 12) + 1;
          expect(res.body.length).to.eql(13);
        });
    });
    it("responds suits of hearts", () => {
      return agent
        .get("/api/get_hearts")
        .expect(200)
        .expect(res => {
          const index = Math.floor(Math.random() * 12) + 1;
          expect(res.body[index].suit).to.equal("HEARTS");
        });
    });
  });

  describe("/api/get_clubs", () => {
    it("responds with 13 items", () => {
      return agent
        .get("/api/get_clubs")
        .expect(200)
        .expect(res => {
          const index = Math.floor(Math.random() * 12) + 1;
          expect(res.body.length).to.eql(13);
        });
    });
    it("responds with suit of CLUBS", () => {
      return agent
        .get("/api/get_clubs")
        .expect(200)
        .expect(res => {
          const index = Math.floor(Math.random() * 12) + 1;
          expect(res.body[index].suit).to.equal("CLUBS");
        });
    });
  });

  describe("/api/get_diamonds", () => {
    it("responds with 13 items", () => {
      return agent
        .get("/api/get_diamonds")
        .expect(200)
        .expect(res => {
          const index = Math.floor(Math.random() * 12) + 1;
          expect(res.body.length).to.eql(13);
        });
    });
    it("responds with suit of DIAMONDS", () => {
      return agent
        .get("/api/get_diamonds")
        .expect(200)
        .expect(res => {
          const index = Math.floor(Math.random() * 12) + 1;
          expect(res.body[index].suit).to.equal("DIAMONDS");
        });
    });
  });

  describe("/api/sort_deck", () => {
    it("expects King of Clubs at index 25", () => {
      const kC = {
        id: 13,
        img:
          "https://upload.wikimedia.org/wikipedia/commons/2/22/Playing_card_club_K.svg",
        val: "KING",
        suit: "CLUBS",
        code: "KC",
        createdAt: "2018-06-04T23:33:10.304Z",
        updatedAt: "2018-06-04T23:33:10.304Z"
      };

      return agent
        .get("/api/sort_deck")
        .expect(200)
        .expect(res => {
          expect(res.body[25]).to.deep.equal(kC);
        });
    });

    it("expects 6 of Hearts at index 31", () => {
      const sixH = {
        id: 32,
        img:
          "https://upload.wikimedia.org/wikipedia/commons/c/cd/Playing_card_heart_6.svg",
        val: "6",
        suit: "HEARTS",
        code: "6H",
        createdAt: "2018-06-04T23:33:10.304Z",
        updatedAt: "2018-06-04T23:33:10.304Z"
      };
      return agent
        .get("/api/sort_deck")
        .expect(200)
        .expect(res => {
          expect(res.body[31]).to.deep.equal(sixH);
        });
    });
  });
});
