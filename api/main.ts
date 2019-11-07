import * as express from 'express';

const app = express();

app.use(express.json());
app.get('/', (req, res, next) => {
  res.json({connected : true});
});

app.listen(3002);
