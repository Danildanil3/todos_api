const db = require("../db");

class DashboardModel {
  async getStatistics() {
    const today = new Date();
    const date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

    const tasksForDay = await db.query(
      `SELECT COUNT(*) AS tasks_for_day FROM tasks WHERE due_date BETWEEN $1 AND $1;`,
      [date]
    );
    const allLists = await db.query(`SELECT lists.id, lists.name, COUNT(tasks.id) AS undone FROM lists 
                                     RIGHT JOIN tasks ON tasks.list_id = lists.id
                                     WHERE tasks.done = false
                                     GROUP BY lists.id
                                     ORDER BY lists.id;`);
    let result = { ...tasksForDay.rows[0] };
    result.lists = allLists.rows;
    return result;
  }
}

module.exports = new DashboardModel();
