
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        { title: 'A Quiet Place', director: 'John Krasinski' },
        { title: 'Avengers: Infinity War', director: 'Anthony Russo' },
        { title: 'Arrival', director: 'Denis Villeneuve' }
      ]);
    });
};
