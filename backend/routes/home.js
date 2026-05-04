const sendJson = require("../utils/sendJson");

function homeRoute(req, res) {
    return sendJson(res, 200, { message: "API funcionando" });
}

module.exports = homeRoute;