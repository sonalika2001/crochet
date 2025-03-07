import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5500;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, backend is here');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
