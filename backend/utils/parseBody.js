function parseBody(req) {
    return new Promise((resolve, reject) => {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();

            // proteção básica contra payload gigante
            if (body.length > 1e6) {
                req.socket.destroy();
                reject(new Error("Payload muito grande"));
            }
        });

        req.on("end", () => {
            try {
                const parsed = body ? JSON.parse(body) : {};
                resolve(parsed);
            } catch (error) {
                reject(new Error("JSON inválido"));
            }
        });

        req.on("error", (err) => {
            reject(err);
        });
    });
}

module.exports = parseBody;