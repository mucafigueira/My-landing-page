const parseBody = require("../utils/parseBody");
const { createContact } = require("../controllers/contactController");

async function contactRoute(req, res) {
    try {
        const body = await parseBody(req);
        return createContact(req, res, body);

    } catch (error) {
        return require("../utils/sendJson")(res, 400, {
            error: error.message,
        });
    }
}

module.exports = contactRoute;