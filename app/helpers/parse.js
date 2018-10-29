var Busboy = require('busboy');

/**
 * Parses a single file from a Node request.
 *
 * @param  {http.IncommingRequest} req
 * @return {Promise<{ file: Stream, filename: string>}
 */
function parse(req) {
    console.log('starting parse')
    return new Promise((resolve, reject) => {
        const busboy = new Busboy({
            headers: req.headers,
            limits: {
                files: 1 // allow only a single upload at a time.
            }
        })

        busboy.once('file', _onFile)
        busboy.once('error', _onError)
        req.pipe(busboy)

        function _cleanup() {
            console.log('cleanup')
            busboy.removeListener('file', _onFile)
            busboy.removeListener('error', _onError)
        }

        function _onFile(fieldname, file, filename) {
            console.log('onfileeeee')
            _cleanup()
            resolve({ file, filename })
        }

        function _onError(err) {
            console.log('AYAYAYYAYA', err)
            _cleanup()
            reject(err)
        }
    })
}

module.exports = { parse };