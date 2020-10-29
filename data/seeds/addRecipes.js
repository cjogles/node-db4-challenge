
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { id: 1, name: "Cake", ingredient_id: 1, instruction_id: 1, ingredient_quantity: '1 cup' },
        { id: 2, name: "Chocolate Cake", ingredient_id: 2, instruction_id: 1, ingredient_quantity: '1 cup' },
        { id: 3, name: "Rainbow Cake", ingredient_id: 3, instruction_id: 1, ingredient_quantity: '1 cup' }
      ]);
    });
};
