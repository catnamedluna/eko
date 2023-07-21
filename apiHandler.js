module.exports = {
    get: function(app) {
        app.get('/', (request, response) => {
            response.send('h')
        })
    }
}