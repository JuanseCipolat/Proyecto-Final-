var pool = require('./bd'); 

async function getProductos() {
    var query = "SELECT * FROM productos";
    var rows = await pool.query(query);
    return rows;
}

async function insertProducto(data) {
    var query = "INSERT INTO productos SET ?";
    var rows = await pool.query(query, [data]);
    return rows;
}

async function deleteProductoById(id) {
    var query = "DELETE FROM productos WHERE id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getProductoById(id) {
    var query = "SELECT * FROM productos WHERE id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function updateProductoById(id, data) {
    var query = "UPDATE productos SET ? WHERE id = ?";
    var rows = await pool.query(query, [data, id]);
    return rows;
}

module.exports = { 
    getProductos, 
    insertProducto, 
    deleteProductoById, 
    getProductoById, 
    updateProductoById 
};
