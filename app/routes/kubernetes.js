const Router = require('koa-router'),
    {readyz,healthz, version} = require('../controllers/kubernetesController');

const router = new Router();

    router
        // Kubernetes features
        // .get('/api/v1/relocation/main/metrics',  metrics)
        .get('/readyz',  readyz)
        .get('/healthz', healthz)
        .get('/version', version)

    ;

module.exports = {
    routesKubernetes () { return router.routes() },
    allowedKubernetesMethods () { return router.allowedMethods() }
};
