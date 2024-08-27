const pool = require('./bd');

// Obtener todas las reviews
async function getReviews() {
    const query = 'SELECT * FROM reviews';
    const rows = await pool.query(query);
    return rows;
}

// Crear una nueva review
async function createReview(data) {
    const query = 'INSERT INTO reviews SET ?, fecha = CURRENT_DATE';
    const rows = await pool.query(query, [data]);
    return rows;
}

// Actualizar una review
async function updateReview(id, data) {
    const query = 'UPDATE reviews SET ? WHERE id = ?';
    const rows = await pool.query(query, [data, id]);
    return rows;
}

// Eliminar una review
async function deleteReview(id) {
    const query = 'DELETE FROM reviews WHERE id = ?';
    const rows = await pool.query(query, [id]);
    return rows;
}

module.exports = { getReviews, createReview, updateReview, deleteReview };
