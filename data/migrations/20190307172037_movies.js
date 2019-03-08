
exports.up = function(knex, Promise) {
    return knex.schema.createTable( 'movies', function(tbl) {
    tbl
        .increments()
        .notNullable()
    tbl
        .string('title', 120)
        .notNullable()
        .unique()
    tbl
        .string('director', 120)
        .notNullable()
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('movies');
};
