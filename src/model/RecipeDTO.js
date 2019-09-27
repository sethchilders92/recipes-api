class RecipeDTO {
    constructor(name, description, author, ingredients, steps) {
        this.name = name;
        this.description = description;
        this.author = author;
        this.ingredients = ingredients;
        this.steps = steps;
    }

    getName() {
        return this.name;
    }
    
    getDescription() {
        return this.description;
    }

    getAuthor() {
        return this.author;
    }

    getIngredients() {
        return this.ingredients;
    }

    getSteps() {
        return this.steps;
    }

    setName(name) {
        this.name = name;
    }

    setDescription(description) {
        this.description = description;
    }

    setAuthor(author) {
        this.author = author;
    }

    setIngredients(ingredients) {
        this.ingredients = ingredients;
    }

    setSteps(steps) {
        this.steps = steps;
    }
}

module.exports.RecipeDTO = RecipeDTO;