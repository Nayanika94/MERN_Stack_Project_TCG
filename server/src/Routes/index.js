const searchRouter = require("./search.routes")

const applyRoutes = (app) => {
    app.use('/search', searchRouter);
    app.use('/*', (req, res, next) => {
        console.error('Not found!!');
        res.status(404).send('Page not found!!');
    })

    /** API level error handling */
    app.use((err, req, res, next) => {
        console.error('Internal server error!! ', err);
        res.status(500).send({success: false, error: 'OOPS!! Something went wrong!!'});
    })
}

module.exports = applyRoutes;