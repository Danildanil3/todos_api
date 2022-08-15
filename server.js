const app = require("./app");

app.listen(3000, function (error) {
  if (error) console.log(error);
  console.log("Server started on port 3000");
});
