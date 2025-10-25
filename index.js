const express = require('express');
const { createServer } = require('node:http');
const app = express();
const server = createServer(app);
const path = require("path")
const port = 8080;
// create socket io server
const { Server } = require('socket.io');
const io = new Server(server);



// is used to serve static files — like images, CSS, JavaScript, or HTML — directly to the browser.

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});



//handle socket io

// when new user come lunch the callback socket
io.on('connection', (socket) => {
    // console.log("A new user has connected" , socket.id)

    // catch the message from front-end we use this
    // socket.on[this is use for graving message from front-end]
    // "user-message"[The custom name you give in the front end]
    // sendMessage[the message]

    socket.on("user-message", (sendMessage) => {
        // console.log("A new User message", sendMessage)
        // io.emit()[this is use for sending something]
        io.emit('message', sendMessage);    
    })
});





server.listen(port , () => {
    console.log(`server started at http://localhost:${port}`)
});






// git push origin main








