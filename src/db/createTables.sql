-- Executable through `heroku pg:psql` prompt

DROP TABLE users CASCADE;
DROP TABLE recipes CASCADE;
DROP TABLE tokens CASCADE;
DROP TABLE categories CASCADE;
DROP TABLE ingredients CASCADE;
DROP TABLE instructions CASCADE;
DROP TABLE comments CASCADE;
DROP TABLE usersRecipes CASCADE;
DROP TABLE recipesCategories CASCADE;
DROP TABLE instructionsRecipes CASCADE;
DROP TABLE commentsRecipes CASCADE;
DROP TABLE ingredientsRecipes CASCADE;

CREATE TABLE users
(
    id              SERIAL          PRIMARY KEY,
    username        VARCHAR(60)     NOT NULL UNIQUE,
    password        VARCHAR(100)    NOT NULL
);

CREATE TABLE recipes
(
    id              SERIAL          PRIMARY KEY,
    name            VARCHAR(60)     NOT NULL UNIQUE,
    description     TEXT            NOT NULL
);

CREATE TABLE tokens
(
    id              SERIAL          PRIMARY KEY,
    userAuthToken   VARCHAR(100),
    apiAuthToken    VARCHAR(100)
);

CREATE TABLE categories
(
    id              SERIAL          PRIMARY KEY,
    category        VARCHAR(50)     NOT NULL UNIQUE
);

CREATE TABLE ingredients
(
    id              SERIAL          PRIMARY KEY,
    ingredient      VARCHAR(200)    NOT NULL UNIQUE
);

CREATE TABLE instructions
(
    id              SERIAL          PRIMARY KEY,
    instructions    TEXT            NOT NULL
);

CREATE TABLE comments
(
    id              SERIAL          PRIMARY KEY,
    comment         TEXT            NOT NULL
);

------------------------- LINKING TABLES ----------------------------------------

CREATE TABLE usersRecipes
(
    id              SERIAL          PRIMARY KEY,
    usersId         INT             NOT NULL REFERENCES users(id),
    recipesId       INT             NOT NULL REFERENCES recipes(id)
);

CREATE TABLE recipesCategories
(
    id              SERIAL          PRIMARY KEY,
    categoryId      INT             NOT NULL REFERENCES categories(id),
    recipesId       INT             NOT NULL REFERENCES recipes(id)
);

CREATE TABLE instructionsRecipes
(
    id              SERIAL          PRIMARY KEY,
    instructionsId  INT             NOT NULL REFERENCES instructions(id),
    recipesId       INT             NOT NULL REFERENCES recipes(id)
);

CREATE TABLE commentsRecipes
(
    id              SERIAL          PRIMARY KEY,
    commentsId      INT             NOT NULL REFERENCES comments(id),
    recipesId       INT             NOT NULL REFERENCES recipes(id),
    usersId         INT             NOT NULL REFERENCES users(id)
);

CREATE TABLE ingredientsRecipes
(
    id              SERIAL          PRIMARY KEY,
    ingredientId    INT             NOT NULL REFERENCES ingredients(id),
    recipesId       INT             NOT NULL REFERENCES recipes(id)
);