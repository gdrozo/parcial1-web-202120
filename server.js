const express = require('express');
const router = require('./src/router');
const path = require('path');
const port = 3000;
const cors = require('cors')
const app = express();

app.use(
  cors({
      origin: '*',
  }),
)
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);

app.listen(port, () => {
  console.log('Server on http://localhost:3000');
});
