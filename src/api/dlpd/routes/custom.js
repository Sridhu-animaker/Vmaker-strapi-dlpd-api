module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/dlpds/:slug',
            handler: 'dlpd.findOne',
            config: {
                auth: false,
            }
        }
    ]
}