import express from 'express';
import bodyParser from 'body-parser'

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
