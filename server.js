const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config;
}

const stripe = require("stripe")(process.env.STRIPE_KEY);

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
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (strError, strResponse) => {
    if (strError) {
      res.status(500).send({ error: strError });
    } else {
      res.status(200).send({ success: strResponse });
    }
  });
});
