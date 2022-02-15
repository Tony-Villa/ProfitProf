const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3737;

// Middleware
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hi Profit Prof');
});

app.listen(PORT, () => {
  console.log(`Server listnening on por ${PORT}`);
});
