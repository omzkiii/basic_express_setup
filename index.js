const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES IN htttp://localhost:3000/users/.....
app.use("/users", require("./routes/users"));

// START THE SERVER
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
