const express = require("express");
const config = require("./config/index");
require('dotenv').config();
async function startServer() {
    const app = express();
    app.use(express.static('public')); 
    app.use('/images', express.static('images'));
    await require("./loaders/index")(app);
    console.info("Loaded all loaders");
    app
        .listen(process.env.PORT, () => {
            console.info(`
  ################################################
  🛡️  Server listening on port: ${process.env.PORT} 🛡️
  ################################################
`);
        })
        .on("error", (err) => {
            console.error(err);
            process.exit(1);
        });
}

startServer();