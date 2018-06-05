const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const models = require("./models");

const keys = require("./config/keys");

const app = express();
app.use(morgan("dev"));
app.use(express.json(""));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const myStore = new SequelizeStore({
  db: models.sequelize,
  expiration: 24 * 60 * 60 * 1000
});

app.use(
  session({
    secret: keys.sessionSecret,
    resave: false,
    saveUninitialized: false,
    proxy: true,
    store: myStore,
  })
);

myStore.sync();

require("./api")(app);

const PORT = process.env.PORT || 5000;

models.sequelize.sync().then(() => {
  app.listen(PORT, async () => {
    console.log("listening on port ", PORT);
  });
});
