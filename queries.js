queries.saveRecipe = `
INSERT INTO recipes (recipename, recipeid, recipeimage)
VALUES ($1, $2, $3)
RETURNING recipename
`;