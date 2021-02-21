const newRoute = require('./news');
const siteRoute = require('./news');
function route(app) {
    app.use('news', newRoute);
    app.use('search', siteRoute);
    app.use('/', siteRoute);
    // app.get('/', (req, res) => {
    //     res.render('home');
    //   });
    //   app.get('search', (req, res) => {
    //     res.render('search');
    //   })
}
module.exports = route;
