const express = require("express");
const orderRouter = require("./routes/order.routes.js");

const app = express();

app.use(express.json());

app.use("/delivery", orderRouter);

app.listen(8080, () => console.log("Listening on http://localhost:3001"));
