const { response } = require("express");
const express = require("express");
const app = express();

app.get("/users/info", function(req, res) {
  let response = {
    status: 200,
    data: [
      {
        id: 1,
        name: "Jerry",
      },
      {
        id: 2,
        name: "Sunday",
      },
    ],
  };
  res.send(response);
});

app.listen(4000, () => {
  console.log("服务器已启动");
});
