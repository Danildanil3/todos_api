const db = require("../db");

class CollectionModel {
  async getStatistics() {
    const today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1 < 10 ? "0" : "") +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    const tasksForToday = await db.query(
      `SELECT tasks.*, lists.name AS "list name"
      FROM tasks
      LEFT JOIN lists
      ON tasks.list_id = lists.id
      WHERE due_date BETWEEN $1 AND $1;`,
      [date]
    );
    return tasksForToday.rows;
  }
}

module.exports = new CollectionModel();
