const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config;

if (process.env.NODE_ENV !== "production") {
}

const stripe = require("stripe")(
  "sk_test_51I6L4NBp2IrUmTJGKmkGIQdbpdpKYjtG4gie3xSkrFaBixoO9PwSQ3vSHjaGaubNuISi5F4oGAGkZ9lxYxqPEpJd00SO4sQWrq"
);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(
      express.static(path.join(__dirname, "client/build", "index.html"))
    );
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server on ${port}`);
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amout,
    currency: "usd",
  };

  stripe.charges.create(body, (strError, strResponse) => {
    if (strError) {
      console.log(strError);
      res.status(500).send({ error: strError });
    } else {
      res.status(200).send({ success: strResponse });
    }
  });
});
