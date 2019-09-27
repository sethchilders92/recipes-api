const express = require('express');

const app = express();
const CONTEXT_PATH = "/v1/recipes";

app.get(`${CONTEXT_PATH}/maintenance/health-check`, require('express-healthcheck')({
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

module.exports = app;