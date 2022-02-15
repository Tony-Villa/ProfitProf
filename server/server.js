const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3737;

// Middleware
app.use(express.json());
app.use(cors());

// Routes

app.get('/v1', (req, res) => {
  res.send('Hi Profit Prof');
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listnening on por ${PORT}`);
});
