const express = require("express");
const server = express();
const data = require("./config/data");

server.listen(3000, () => {
  console.log("Server is conected ✅");
});

server.get("/getAllData", (req, res) => {
  try {
    //const allData = await data.find({});
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});
server.get("/getRes/:resturent", async (req, res) => {
  try {
    const resName = req.params.resturent;
    const resturent =  data.find((ele) => {
      return ele.restaurantName === resName;
    });
    res.send(resturent);
  } catch (error) {
    res.send(error.message);
  }
});
