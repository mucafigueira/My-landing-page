const sendJson = require("../utils/sendJson");
const parseBody = require("../utils/parseBody");

async function testPost(req, res) {
    try {
        const data = await parseBody(req);

        return sendJson(res, 200, {
            message: "Dados enviados com sucesso",
            data,
        });

    } catch (error) {
        return sendJson(res, 400, {
            error: error.message,
        });
    }
}

module.exports = testPost;