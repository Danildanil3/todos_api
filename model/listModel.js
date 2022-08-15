const db = require("../db");

class ListModel {
  async getAllLists() {
    const lists = await db.query("SELECT * FROM lists");
    return lists.rows;
  }

  async getList(list_id, all) {
    if (all) {
      const list = await db.query("SELECT * FROM tasks WHERE list_id = $1", [list_id]);
      return list.rows;
    } else {
      const list = await db.query("SELECT * FROM tasks WHERE list_id = $1 AND done = false", [list_id]);
      return list.rows;
    }
  }

  async createList(body) {
    const { name } = body;
    const newList = await db.query("INSERT INTO lists (name) VALUES ($1) RETURNING *", [name]);
    return newList.rows[0];
  }

  async updateList(id, body) {
    const { name } = body;
    const list = await db.query("UPDATE lists SET name = $2 WHERE id = $1 RETURNING *", [id, name]);
    return list.rows[0];
  }

  async deleteList(id) {
    const list = await db.query("DELETE FROM lists WHERE id = $1", [id]);
    const tasks = await db.query("DELETE FROM tasks WHERE list_id = $1", [id]);
    return;
  }
}

module.exports = new ListModel();
