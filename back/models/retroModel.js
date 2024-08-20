const pool = require('./bd');

async function getRetro() {
    const query = 'SELECT * FROM retro';
    const rows = await pool.query(query);
    return rows;
}

async function createRetro(data) {
    const query = 'INSERT INTO retro SET ?';
    const rows = await pool.query(query, [data]);
    return rows;
}

async function updateRetro(id, data) {
    const query = 'UPDATE retro SET ? WHERE id = ?';
    const rows = await pool.query(query, [data, id]);
    return rows;
}

async function deleteRetro(id) {
    const query = 'DELETE FROM retro WHERE id = ?';
    const rows = await pool.query(query, [id]);
    return rows;
}

module.exports = { getRetro, createRetro, updateRetro, deleteRetro };
