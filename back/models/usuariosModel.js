const pool = require('./bd');

async function getUserByUsernameAndPassword(username, password) {
    const query = 'SELECT * FROM usuarios WHERE usuario = ? AND password = ?';
    const rows = await pool.query(query, [username, password]);
    return rows[0];
}

async function createUser(data) {
    const query = 'INSERT INTO usuarios SET ?';
    const rows = await pool.query(query, [data]);
    return rows;
}

module.exports = { getUserByUsernameAndPassword, createUser };
