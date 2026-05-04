const { getMessages } = require("../controllers/messagesController");

async function messagesRoute(req, res) {
    return getMessages(req, res);
}

module.exports = messagesRoute;