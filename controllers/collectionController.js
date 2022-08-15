const model = require("../model/collectionModel");

class CollectionController {
  getStatistics(req, res, next) {
    model
      .getStatistics()
      .then((result) => res.json(result))
      .catch(next);
  }
}

module.exports = new CollectionController();
