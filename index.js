const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const cors = require("cors");

const models = require("./models");

const keys = require("./keys/keys");

const app = express();
app.use(morgan("dev"));
app.use(express.json(""));

app.use(cors({
  origin: ["http://localhost:3000/"],
  credentials: true,
  allowedHeaders: true,
  methods:['GET', 'POST']
}))

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
    store: myStore
  })
);

myStore.sync();

require("./api")(app);

app.use(express.static("client"));

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

const PORT = process.env.PORT || 5000;

if (!module.parent) {
  models.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log("listening on port ", PORT);
    });
  });
}

module.exports = app;
