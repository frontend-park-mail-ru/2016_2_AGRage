let express = require('express');
let swagger = require("swagger-node-express");
let parser = require('body-parser');
let app = express();
let technoDoc = require('techno-gendoc');
let subpath = express();
/*let path = require('path');*/

let technolibs = require('technolibs');

app.use('/', express.static('public', {
	maxAge: 1
}));

technoDoc.generate(require('./api'), 'public');


app.use(parser.json());
app.use('/libs', express.static('node_modules'));

app.use("/v1", subpath);
swagger.setAppHandler(subpath);

app.get('/api/session', (req, res) => {
	res.send(technoDoc.mock(require('./api/scheme/Session')));
});


app.post('/api/messages', (req, res) => {
	technolibs.publish(req.body).then(body => res.json(req.body));
});

app.get('/api/messages', function(req, res) {
	res.send([
		technoDoc.mock(require('./api/scheme/Message')),
		technoDoc.mock(require('./api/scheme/Message')),
		technoDoc.mock(require('./api/scheme/Message')),
		technoDoc.mock(require('./api/scheme/Message'))
	]);
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`App started on port ${process.env.PORT || 3000}`);
});
