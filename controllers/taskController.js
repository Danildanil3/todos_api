const model = require("../model/taskModel");

class TaskController {
  getTasks_List(req, res, next) {
    const list_id = req.query.listId;
    model
      .getTasks_List(list_id)
      .then((result) => res.json(result))
      .catch(next);
  }

  getTask(req, res, next) {
    const id = req.params.id;
    model
      .getTask(id)
      .then((result) => res.json(result))
      .catch(next);
  }

  createTask(req, res, next) {
    const body = req.body;
    model
      .createTask(body)
      .then((result) => res.json(result))
      .catch(next);
  }

  updateTask(req, res, next) {
    const id = req.params.id;
    const body = req.body;
    model
      .updateTask(id, body)
      .then((result) => res.json(result))
      .catch(next);
  }

  fullyUpdateTask(req, res, next) {
    const id = req.params.id;
    const body = req.body;
    model
      .fullyUpdateTask(id, body)
      .then((result) => res.json(result))
      .catch(next);
  }

  deleteTask(req, res, next) {
    const id = req.params.id;
    model
      .deleteTask(id)
      .then((result) => res.json(result))
      .catch(next);
  }
}

module.exports = new TaskController();
