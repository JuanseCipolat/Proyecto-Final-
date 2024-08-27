const pool = require('./bd');

// Obtener todos los juegos retro
async function getRetro() {
    const query = 'SELECT * FROM retro';
    const rows = await pool.query(query);
    return rows;
}

// Crear un nuevo juego retro
async function createRetro(data) {
    const query = 'INSERT INTO retro SET ?';
    const rows = await pool.query(query, [data]);
    return rows;
}

// Editar un juego retro
async function updateRetro(id, data) {
    const query = 'UPDATE retro SET ? WHERE id = ?';
    const rows = await pool.query(query, [data, id]);
    return rows;
}

// Eliminar un juego retro
async function deleteRetro(id) {
    const query = 'DELETE FROM retro WHERE id = ?';
    const rows = await pool.query(query, [id]);
    return rows;
}

module.exports = { getRetro, createRetro, updateRetro, deleteRetro };
