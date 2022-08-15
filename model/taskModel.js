const knex = require("../db");

class TaskModel {
  async getTasks_List(listId) {
    if (listId) {
      const tasks = await knex("tasks").where("list_id", listId);
      return tasks;
    }
    const tasks = await knex("tasks");
    return tasks;
  }

  async getTask(id) {
    const task = await knex("tasks").where("id", id);
    return task;
  }

  async createTask(body) {
    const newTask = await knex("tasks").insert(body).returning("*");
    return newTask;
  }

  async updateTask(id, body) {
    const task = await knex("tasks").where("id", id).update(body).returning("*");
    return task;
  }

  async deleteTask(id) {
    await knex("tasks").where("id", id).del();
    return;
  }
}

module.exports = new TaskModel();
