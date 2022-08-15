const knex = require("../db");

class DashboardModel {
  async getStatistics() {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1 < 10 ? "0" : "") +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    const tasksForDay = await knex("tasks").count("*", { as: "tasks_for_day" }).whereBetween("due_date", [date, date]);

    const allLists = await knex
      .select("lists.id", "lists.name")
      .count("tasks.id", { as: "undone" })
      .from("lists")
      .rightJoin("tasks", "tasks.list_id", "lists.id")
      .where("tasks.done", false)
      .groupBy("lists.id")
      .orderBy("lists.id");

    let result = tasksForDay[0];
    result.lists = allLists;
    result.tasks_for_day = parseInt(result.tasks_for_day);

    return result;
  }
}

module.exports = new DashboardModel();
