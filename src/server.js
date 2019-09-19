const path = require('path');
const { Pool } = require('pg');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const connectionString = process.env.DATABASE_URL;

const app = express();
const pool = new Pool({
  connectionString: connectionString
});

const CONTEXT_PATH = "/v1/recipes";

app.get(`${CONTEXT_PATH}/health-check`, require('express-healthcheck') ({
  healthy: () => {
    return {
      status: 'UP'
    };
  }
}));

app.get(`${CONTEXT_PATH}/`, (req, res) => {
  const returnObject = {
    'name': 'Sam\'s Cheese Crisp',
    'description': 'Ugh, this is so freaking delicious',
    'author': 'sammcgrath67',
    'ingredients': [
      {
        'name': 'tortilla',
        'quantity': 'two whole pieces',
      },
      {
        'name': '4 cheese blend',
        'quantity': '4 cups'
      }
    ],
    'steps': [
      'Step 1 here!!',
      'Step 2 here!!',
      'Step 3 here!!',
      'Step 4 here!!',
      'Step 5 here!!'
    ]
  };

  res.status(200).json(returnObject);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
