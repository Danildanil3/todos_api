const model = require("../model/dashboardModel");

class DashboardController {
  getStatistics(_, res, next) {
    model
      .getStatistics()
      .then((result) => res.json(result))
      .catch(next);
  }
}

module.exports = new DashboardController();