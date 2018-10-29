const Router = require('koa-router'),
      KoaBody = require('koa-body'),
     {generateRelocation} = require('../controllers/relocationController');

const router = new Router();

    router
        // .get('/api/v1/relocation/:id', getById)
        .post('/api/v1/relocation/generate', KoaBody(), generateRelocation)
        // .put('/api/v1/relocation/:id',    KoaBody(), updateRelocation)
        // .delete('/api/v1/relocation/:id', removeRelocation);

module.exports = {
    routes () { return router.routes() },
    allowedMethods () { return router.allowedMethods() }
};
