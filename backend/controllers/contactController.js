const sendJson = require("../utils/sendJson");
const pool = require("../utils/db");

function validate(data) {
    const { nome, email, telefone, mensagem } = data;

    if (!nome || nome.length < 5) return "Nome inválido";
    if (!email || !email.includes("@")) return "Email inválido";
    if (!telefone || telefone.length < 9) return "Telefone inválido";
    if (!mensagem || mensagem.length < 10) return "Mensagem muito curta";

    return null;
}

async function createContact(req, res, body) {
    const error = validate(body);

    if (error) {
        return sendJson(res, 400, { error });
    }

    const { nome, email, telefone, mensagem } = body;

    try {
        const result = await pool.query(
            `INSERT INTO contacts (nome, email, telefone, mensagem)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
            [nome, email, telefone, mensagem]
        );

        return sendJson(res, 201, {
            message: "Mensagem enviado com sucesso",
            data: result.rows[0],
        });

    } catch (err) {
        console.error(err); // 👈 IMPORTANTE

        return sendJson(res, 500, {
            error: "Erro ao salvar no banco",
        });
    }
}

module.exports = { createContact };