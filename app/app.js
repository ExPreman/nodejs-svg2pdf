require('dotenv').config()

const http = require('http'),
    Koa = require('koa'),
    config = require('config'),
    err = require('./helpers/error'),
    prometheus = require('@echo-health/koa-prometheus-exporter'),
    httpMetrics = prometheus.httpMetricMiddleware,
    autoshutdown = require('./helpers/autoshutdown'),
    {routes, allowedMethods}  = require('./routes/relocation'),   
    {routesKubernetes, allowedKubernetesMethods } = require('./routes/kubernetes'),
    app = new Koa()
;

app.use(err);
app.use(routes());
app.use(allowedMethods());

app.use(httpMetrics);
app.use(prometheus.middleware({
    path: "/api/v1/relocation/main/metrics",
}));
app.use(routesKubernetes());
app.use(allowedKubernetesMethods());

const server = http.createServer(app.callback()).listen(config.server.port, function () {
    console.log('%s listening at port %d', config.app.name, config.server.port);
});

autoshutdown(server);

module.exports = {
    closeServer() {
        server.close();
    }
};