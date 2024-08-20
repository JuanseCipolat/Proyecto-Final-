const pool = require('./bd');

async function getReviews() {
    const query = 'SELECT * FROM reviews';
    const rows = await pool.query(query);
    return rows;
}

async function createReview(data) {
    const query = 'INSERT INTO reviews SET ?';
    const rows = await pool.query(query, [data]);
    return rows;
}

async function updateReview(id, data) {
    const query = 'UPDATE reviews SET ? WHERE id = ?';
    const rows = await pool.query(query, [data, id]);
    return rows;
}

async function deleteReview(id) {
    const query = 'DELETE FROM reviews WHERE id = ?';
    const rows = await pool.query(query, [id]);
    return rows;
}

module.exports = { getReviews, createReview, updateReview, deleteReview };
