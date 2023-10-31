import Engine from "./models/engine";
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import pug from 'pug';
// VAR
const engine = new Engine();
const app = express()
const port = process.env.PORT || 3001
// JSON BODY
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// INDEX
app.get('/', (req, res) => res.render(path.join(__dirname, '../views/index.pug')));
app.get('/about', (req, res) => res.render(path.join(__dirname, '../views/about.pug')));
app.get('/admin', (req, res) => res.render(path.join(__dirname, '../views/admin.pug'), {"list": engine.list}));
// REDIRECT
app.get('/:route', (req, res) => {
  let longURL:string | undefined = engine.translate(req.params.route);
  (longURL) ? res.redirect(longURL) : res.redirect('/');
});
// API
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