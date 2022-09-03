DROP DATABASE IF EXISTS twisted_recipes;

CREATE DATABASE twisted_recipes;

USE twisted_recipes;

CREATE TABLE classics(
    id INTEGER NOT NULL,
    recipe_name VARCHAR(30) NOT NULL,
    ingredients VARCHAR(500) NOT NULL,
    method VARCHAR(500) NOT NULL
);