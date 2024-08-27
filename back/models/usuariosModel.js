const pool = require('./bd');

async function getUserByUsernameAndPassword(username, password) {
    try {
        const query = 'SELECT * FROM usuarios WHERE usuario = ? AND password = ?';
        const rows = await pool.query(query, [username, password]);
        if (rows.length > 0) {
            return rows[0]; 
        } else {
            return null; 
        }
    } catch (error) {
        console.error("Error en getUserByUsernameAndPassword:", error);
        throw error;
    }
}

async function createUser(data) {
    try {
        const query = 'INSERT INTO usuarios SET ?';
        const result = await pool.query(query, [data]);
        return result;
    } catch (error) {
        console.error("Error en createUser:", error);
        throw error;
    }
}

module.exports = { getUserByUsernameAndPassword, createUser };
