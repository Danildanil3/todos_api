const db = require("../db");

class TaskModel {
  async getTasks_List(listId) {
    if (listId) {
      const list = await db.query("SELECT * FROM tasks where list_id = $1", [listId]);
      return list.rows;
    }
    const tasks = await db.query("SELECT * FROM tasks");
    return tasks.rows;
  }

  async getTask(id) {
    const task = await db.query("SELECT * FROM tasks WHERE id = $1", [id]);
    return task.rows[0];
  }

  async createTask(body) {
    const { name, description, due_date, done, list_id } = body;
    const newTask = await db.query(
      "INSERT INTO tasks (name, description, due_date, done, list_id) values ($1, $2, $3, $4, $5) RETURNING *",
      [name, description, due_date || "default current_date", done, list_id || 1]
    );
    return newTask.rows[0];
  }

  async updateTask(id, body) {
    const fields = Object.entries(body);
    const partialQuery = fields.map(([name], i) => `${name} = $${i + 1}`).join(" , ");
    const values = fields.map(([_, v]) => v);
    const illativeQuery = "UPDATE tasks SET " + partialQuery + ` WHERE id = ${id} RETURNING *`;

    const task = await db.query(illativeQuery, values);
    return task.rows[0];
  }

  async fullyUpdateTask(id, body) {
    const { name, description, due_date, done, list_id } = body;

    const task = await db.query(
      "UPDATE tasks SET name = $1, description = $2,  due_date = $3, done = $4, list_id = $5 WHERE id = $6 RETURNING *",
      [name, description, due_date || "default current_date", done, list_id, id]
    );
    return task.rows[0];
  }

  async deleteTask(id) {
    const task = await db.query("DELETE FROM tasks WHERE id = $1", [id]);
    return;
  }
}

module.exports = new TaskModel();
