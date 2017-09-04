const ticketsRoutes = require('./tickets_routes');

module.exports = function(app, db) {
    ticketsRoutes(app, db);
};