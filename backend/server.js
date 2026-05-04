
require("dotenv").config();
const http = require("http");
const router = require("./routes");
const setCors = require("./utils/cors");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    setCors(res);

    // Preflight request (OBRIGATÓRIO para POST do browser)
    if (req.method === "OPTIONS") {
        res.writeHead(204);
        return res.end();
    }

    console.log(`${req.method} ${req.url}`);

    router(req, res);
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});