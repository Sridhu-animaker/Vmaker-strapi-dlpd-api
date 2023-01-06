module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/vmakers/:slug',
            handler: 'vmaker.findOne',
            config: {
                auth: false,
            }
        }
    ]
}