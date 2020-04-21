const server = require("./api/server-sessions");

const PORT = process.env.PORT || 5110;
server.listen(PORT, () => console.log(`\n Running on port: ${PORT} \n`))