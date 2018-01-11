const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
  // Watch for incoming requests of method GET
  // to the route http://localhost:3000/api
  app.get('/api', DriversController.greeting);
};
