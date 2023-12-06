const express = require("express");
const authRoutes = require("./routes/auth.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const fundraiserRoutes = require("./routes/fundraiser.js");
const helmet = require("helmet");
const http = require("http");
const mongoose = require("mongoose");
const multer = require("multer");
const newsRoutes = require("./routes/news.js");
const path = require("path");
const tablesRoutes = require("./routes/tables.js");
const { createServer } = require("http");
const { Server } = require("socket.io");

/*CONFIGURATION*/
//Express configuration for JSON
const app = express();
app.use(express.json());

//Allows access to dotenv file for MongoDB connection
dotenv.config();

/*REQ.BODY PARSING*/
//Body parse for Fetches with body: {object} calls
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/*EXTERNAL CONNECTIONS*/
//Allows you to connect to external ports

app.use(cors());

//Message
const server = http.createServer(app, {
  connectionStateRecovery: {},
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  // Connection Message
  console.log(`${socket.id} just connected!`);

  //Room Join
  socket.on("join_room", (data) => {
    const { username, room } = data;
    socket.join(room);

    let __createdtime__ = Date.now(); // Current timestamp

    socket.to(room).emit("receive_message", {
      message: `${username} has joined the chat room`,
      __createdtime__,
    });

    // Save user information
    chatRoom = room;
    allUsers.push({ id: socket.id, username, room });
    chatRoomUsers = allUsers.filter((user = user.room === room));
    socket.to(room).emit("chatroom_users", chatRoomUsers);
    socket.emit("chatroom_users", chatRoomUsers);
  });

  socket.on("send_message", (data) => {
    const { message, userName } = data;
    console.log(message);
    console.log(userName);
    io.emit("receive_message", data); // Send to all users in room, including sender
    // harperSaveMessage(message, username, room, __createdtime__) // Save message in db
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err));
  });
});

app.get("/", (req, res) => {
  res.send("hello world");
});

server.listen("3002", () => {
  console.log("Message Port: 3002");
});

/*FILE STORAGE - MULTER*/
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
const upload = multer();
app.use(upload.array());

/* ROUTES */
//app.use(/news, router.get("/", getNews(res, resp, next)))
app.use("/news", newsRoutes);
//app.use(/fundraisers, router.get("/", getFundraisers(res, resp, next)))
app.use("/fundraisers", fundraiserRoutes);
//app.use(/tables, router.get("/", getTables(res, resp, next)))
app.use("/tables", tablesRoutes);

/*AUTHENTICATION*/
app.use("/auth", authRoutes);

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
    app.listen(PORT, () => console.log(`Database Port: ${PORT}`));
  })
  .catch((error) =>
    console.log(`${error} did not connect to mongoDB database`)
  );
