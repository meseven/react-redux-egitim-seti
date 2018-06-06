const express = require('express');
const next = require('next');
const { join } = require('path')
const { parse } = require('url')
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	// Custom routes go here
	server.get('/@/:name', (req, res) => {
		const mergedQuery = Object.assign({}, req.query, req.params);
		return app.render(req, res, '/user', mergedQuery);
	});

	// This is the default route, don't edit this.
	server.get('*', (req, res) => {
		const parsedUrl = parse(req.url, true);
		const { pathname } = parsedUrl;

		if (pathname === '/service-worker.js') {
			const filePath = join(__dirname, '.next', pathname)

			app.serveStatic(req, res, filePath)
		} else {
			handle(req, res, parsedUrl)
		}
	});
	const port = process.env.PORT || 3000;

	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on port ${port}...`);
	});
});