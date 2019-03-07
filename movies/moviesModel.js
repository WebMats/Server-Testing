const db = require('../data/dbConfig');



const insert = async (hobbit) => {
    const [id] = await db('movies').insert(hobbit);
    return db('movies').where({id}).first()
}

const getAll = () => {
    return db('movies')
}

module.exports = {
    insert,
    getAll
}