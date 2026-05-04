const sendJson = require("../utils/sendJson");
const homeRoute = require("./home");
const testPost = require("./test");
const contactRoute = require("./contact");
const messageRoute = require("./messages");

function router(req, res) {
    const { method, url } = req;

    if (method === "GET" && url === "/messages") {
        return messageRoute(req, res);
    }

    if (method === "GET" && url === "/") {
        return homeRoute(req, res);
    }

    if (method === "POST" && url === "/test") {
        return testPost(req, res);
    }

    if (method === "POST" && url === "/contact") {
        return contactRoute(req, res);
    }

    return sendJson(res, 404, { error: "Rota não encontrada" });
}

module.exports = router;