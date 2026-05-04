const sendJson = require("../utils/sendJson");
const pool = require("../utils/db");

async function getMessages(req, res) {
    try {
        const result = await pool.query(
            `SELECT * FROM contacts ORDER BY data DESC`
        );

        return sendJson(res, 200, {
            total: result.rows.length,
            data: result.rows,
        });

    } catch (error) {
        return sendJson(res, 500, {
            error: "Erro ao buscar mensagens",
        });
    }
}

module.exports = { getMessages };