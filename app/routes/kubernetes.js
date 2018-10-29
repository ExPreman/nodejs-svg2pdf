const Router = require('koa-router'),
    {readyz,healthz, version} = require('../controllers/kubernetesController');

const router = new Router();

    router
        // Kubernetes features
        .get('/api/v1/relocation/main/readyz',  readyz)
        .get('/api/v1/relocation/main/healthz', healthz)
        .get('/api/v1/relocation/main/version', version)

    ;

module.exports = {
    routesKubernetes () { return router.routes() },
    allowedKubernetesMethods () { return router.allowedMethods() }
};
