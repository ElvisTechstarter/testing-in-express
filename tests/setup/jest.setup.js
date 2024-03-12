require("../../src/server");
const TodoModel = require("../../src/database/models/TodoModel");
const todoSequelize = require("../../src/database/setup/database");

module.exports = async () => {
  try {
    // todoSequelize.dropSchema("Todos").then(() => {
    //   todoSequelize.sync();
    // });
    console.log("PRDDD", process.env);
    await todoSequelize.sync();
    await todoSequelize.dropSchema("todos");
    await todoSequelize.sync();
    // DB mit Daten füllen, um DB auf Test Szenarien vorzubereiten
    await TodoModel.create({
      userId: 1,
      task: "Schlafen",
      dueDate: "2024-03-12",
      isDone: false,
    });
    console.log("Test DB init");
  } catch (e) {
    console.error("MY DB Issue", e);
  }
};
