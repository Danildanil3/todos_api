const knex = require("../db");

class ListModel {
  async getAllLists() {
    const lists = await knex("lists");
    return lists;
  }

  async getList(list_id, all) {
    if (all) {
      const list = await knex("tasks").where("list_id", list_id);
      return list;
    } else {
      const list = await knex("tasks").where("list_id", list_id).andWhere("done", false);
      return list;
    }
  }

  async createList(body) {
    const newList = await knex("lists").insert(body).returning("*");
    return newList;
  }

  async updateList(id, body) {
    const list = await knex("lists").where("id", id).update(body).returning("*");
    return list;
  }

  async deleteList(id) {
    await knex("lists").where("id", id).del();
    await knex("tasks").where("list_id", id).del();
    return;
  }
}

module.exports = new ListModel();
