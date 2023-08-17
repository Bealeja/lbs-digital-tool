const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const newsRoutes = require("./routes/news.js");
const fundraiserRoutes = require("./routes/fundraiser.js");
const tablesRoutes = require("./routes/tables.js");
// const paymentRoutes = require("./routes/payment.js");
const path = require("path");
const multer = require("multer");

//Allows access to dotenv file for MongoDB connection
dotenv.config();

//Express configuration for JSON
const app = express();
app.use(express.json());

/*EXTERNAL CONNECTIONS*/
//Allows you to connect to external ports
app.use(cors());

/*STRIPE*/
const storeItems = new Map([
  [1, { priceInCents: 10000, name: "Learn React Today" }],
  [2, { priceInCents: 20000, name: "Learn CSS Today" }],
]);

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/success.html`,
      cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/* ROUTES */
//app.use(/news, router.get("/", getNews(res, resp, next)))
app.use("/news", newsRoutes);
//app.use(/fundraisers, router.get("/", getFundraisers(res, resp, next)))
app.use("/fundraisers", fundraiserRoutes);
//app.use(/tables, router.get("/", getTables(res, resp, next)))
app.use("/tables", tablesRoutes);

/*FILE STORAGE*/
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

//Need Multer to upload asset folder to the server and make it accessible for the frontend
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

/*DATABASE CONNECTION*/
const PORT = process.env.PORT || 6001;
//These params set to true due to mongo depreciation
//Ref: https://arunrajeevan.medium.com/understanding-mongoose-connection-options-2b6e73d96de1#:~:text=1,that%20prevents%20you%20from%20connecting.
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) =>
    console.log(`${error} did not connect to mongoDB database`)
  );
