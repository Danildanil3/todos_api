const model = require("../model/listModel");

class ListController {
  getAllLists(req, res, next) {
    model
      .getAllLists()
      .then((result) => res.json(result))
      .catch(next);
  }

  getList(req, res, next) {
    const id = req.params.id;
    const all = req.query.all || false;
    model
      .getList(id, all)
      .then((result) => res.json(result))
      .catch(next);
  }

  createList(req, res, next) {
    const body = req.body;
    model
      .createList(body)
      .then((result) => res.json(result))
      .catch(next);
  }

  updateList(req, res, next) {
    const id = req.params.id;
    const body = req.body;
    model
      .updateList(id, body)
      .then((result) => res.json(result))
      .catch(next);
  }

  deleteList(req, res, next) {
    const id = req.params.id;
    model
      .deleteList(id)
      .then((_) => res.status(204).end())
      .catch(next);
  }
}

module.exports = new ListController();
