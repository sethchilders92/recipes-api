const express = require('express');
const RecipeDTO = require('./model/RecipeDTO').RecipeDTO;

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
    const recipeName = 'Sam\'s Cheese Crisp';
    const recipeDescription = 'SO GOOD';
    const recipeAuthor = 'Sam McGrath';
    const recipeIngredients = [
        {
            "name": "tortilla",
            "quantity": "two whole pieces"
        },
        {
            "name": "4 cheese blend",
            "quantity": "4 cups"
        }
    ];
    const recipeSteps = [
        "Step 1 here!!",
        "Step 2 here!!",
        "Step 3 here!!",
        "Step 4 here!!",
        "Step 5 here!!"
    ];
    const returnObject = new RecipeDTO(recipeName, recipeDescription, recipeAuthor, recipeIngredients, recipeSteps);

    res.status(200).json(returnObject);
});

module.exports = app;