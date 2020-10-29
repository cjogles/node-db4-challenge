const db = require('../data/recipes.db3');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

// select all from recipes
function getRecipes() {
    return db
        .select('*')
        .from('recipes');
}

/*
select i.name as ingredient_name
    , r.ingredient_quantity 
from recipes as r
join ingredients as i
    on i.id = r.ingredient_id
where r.id = 1;
*/
function getShoppingList(id) {
    return db
        .select("i.name as ingredient_name", "r.ingredient_quantity")
        .from("recipes as r")
        .join("ingredients as i", "i.id", "r.ingredient_id")
        .where({ recipe_id: "id" })
}
/*
select i.steps from instructions as i
join recipes as r on r.instruction_id = i.id
where r.id = 1;

*/
function getInstructions(id) {
    return db
        .select("i.steps")
        .from("instructions as i")
        .join("recipes as r", "r.instruction_id", "i.id")
        .where({ "recipe.id": id })
}
