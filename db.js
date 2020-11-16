const Sequelize = require("sequelize");
const sequelize = new Sequelize("WorkoutLog", "postgres", "Letmein4817", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.authenticate().then(
  function () {
    console.log("Connected to WorkoutLog postgres database");
  },
  function (err) {
    console.log(err);
  }
);
module.exports = sequelize;
