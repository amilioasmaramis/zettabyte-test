const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

connect().then(async (database) => {
  console.log(`Mongo succesfully connected`);
  app.listen(PORT, () => {
    console.log(`Host connected on port ${PORT}`);
  });
});
