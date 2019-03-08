const db = require('../data/dbConfig');



const insert = async (movie) => {
    const [id] = await db('movies').insert(movie);
    return db('movies').where({id}).first()
}

const getAll = () => {
    return db('movies')
}

const getMovie = (movieID) => {
    return db('movies').where({id}).first()
}

const remove = async (movieID) => {
    return db('movies').where({id: movieID}).delete()
}

module.exports = {
    insert,
    getAll,
    remove,
    getMovie
}