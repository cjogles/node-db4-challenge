
exports.up = function (knex) {
    return knex.schema
        .createTable("ingredients", tbl => {
            tbl.increments();

            tbl.string("name")
                .notNullable()
                .unique();
        })
        .createTable("instructions", tbl => {
            tbl.increments();

            tbl.string("steps")
                .notNullable()
                .unique();
        })
        .createTable("recipes", tbl => {
            tbl.increments()

            tbl.string("name")
                .notNullable()
                .unique();
            tbl.integer("ingredient_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("ingredients")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
            tbl.integer("instructions_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("instructions")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
            tbl.string("ingredient_quantity", 256)
                .notNullable()

        })
};

exports.down = function (knex) {

};
