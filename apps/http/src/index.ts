import express, { Express, Response } from 'express';

const app: Express = express();

app.use(express.json());

app.get('/', (_, res: Response) => {
  res.json({
    message: 'hello',
  });
});

app.listen(3000, () => {
  console.log(`HTTP server running on port: 3000`);
});
