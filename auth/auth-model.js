const db = require('../database/dbConfig');

function find() {
    return db('users').select('id', 'username');
};

function findById(id){
    return db('users')
        .where({id})
        .select('id', 'username')
        .first();
};

function findBy(filter){
    return db('users')
    .where(filter)
};

async function add(user){
    const [id] = await db('users').insert(user);

    return findById(id);
};

module.exports = {
    find,
    findBy,
    findById,
    add
};