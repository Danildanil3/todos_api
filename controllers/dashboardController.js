const model = require("../model/dashboardModel");

class DashboardController {
  getStatistics(_, res, next) {
    model
      .getStatistics()
      .then((result) => {
        // result.tasks_for_day = parseInt(result.tasks_for_day);
        res.json(result);
      })
      .catch(next);
  }
}

module.exports = new DashboardController();
