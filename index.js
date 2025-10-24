const express = require('express');
const { createServer } = require('node:http');
const app = express();
const server = createServer(app);
const path = require("path")
const port = 8080;




// is used to serve static files — like images, CSS, JavaScript, or HTML — directly to the browser.

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});








server.listen(port , () => {
    console.log(`server started at http://localhost:${port}`)
});















