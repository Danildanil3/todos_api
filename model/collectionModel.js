const knex = require("../db");

class CollectionModel {
  async getStatistics() {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1 < 10 ? "0" : "") +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    const tasksForToday = await knex
      .select("tasks.*", "lists.name  as list name")
      .from("tasks")
      .leftJoin("lists", "tasks.list_id", "lists.id")
      .whereBetween("due_date", [date, date]);

    return tasksForToday;
  }
}

module.exports = new CollectionModel();
