import Engine from "./models/engine";
import express from 'express';

const engine = new Engine("shr.tt");
const bodyParser = require('body-parser');
const app = express()
const port = 3001

app.use(bodyParser.json()); // Per JSON
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/api/shortify', (req, res) => res.json({"message": engine.shortify(req.body.URL)}))
app.post('/api/translate', (req, res) => res.json({"message": engine.translate(req.body.URL)}))
app.post('/api/track', (req, res) => res.json({"message": engine.track(req.body.URL)}))
app.post('/api/statics', (req, res) => res.json({"message": engine.statics(req.body.URL)}))
app.post('/api/log', (req, res) => res.json({"message": engine.log(req.body.URL)}))
app.post('/api/delete', (req, res) => res.json({"message": engine.delete(req.body.URL)}))
app.post('/api/list', (req, res) => res.json({"list": engine.list}))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})