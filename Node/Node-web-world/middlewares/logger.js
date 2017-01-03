

function logger(req, resp, next) {

    let out = process.stdout; // writable stream

    let start = Date.now();
    let url = req.url;
    let method = req.method;

    resp.on('finish', function () {
        let end = Date.now();
        let duration = end - start;
        let message = `${method} to ${url} took ${duration} ms \n`;
        out.write(message);
    });

    next();

}

module.exports = logger;