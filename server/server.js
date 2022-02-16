const express = require('express');
const cors = require('cors');
const routes = require('./routes');
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

app.use('/v1/auth', routes.users);
app.use('/v1/income', routes.income);
app.use('/v1/expenses', routes.expenses);
app.use('/v1/goals', routes.goals);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listnening on por ${PORT}`);
});
