var pool = require('./bd');

async function getNoticias() {
    var query = 'SELECT * FROM noticias';
    var rows = await pool.query(query);
    return rows;
}

async function createNoticia(data) {
    var query = 'INSERT INTO noticias SET ?';
    var rows = await pool.query(query, [data]);
    return rows;
}

async function updateNoticia(id, data) {
    var query = 'UPDATE noticias SET ? WHERE id = ?';
    var rows = await pool.query(query, [data, id]);
    return rows;
}

async function deleteNoticia(id) {
    var query = 'DELETE FROM noticias WHERE id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

module.exports = { getNoticias, createNoticia, updateNoticia, deleteNoticia };
