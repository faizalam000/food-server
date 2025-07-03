const express = require("express");
const server = express();
const data = require("./config/data");
const cors = require("cors");

server.listen(3000, () => {
  console.log("Server is conected ✅");
});

server.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

server.get("/getRes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const resData = data.find((data) => {
      return data.id == id;
    });

    if (!resData) {
      return res.status(404).send({
        message: "Restaurant not found",
      });
    }

    res.send({
      message: "successfully fetched",
      data: resData,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

server.get("/getAllData", (req, res) => {
  try {
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});
