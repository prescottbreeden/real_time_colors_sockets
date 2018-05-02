const express = require('express');
const app = express();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/bower_components")));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

server.listen(1337);
const io = require('socket.io')(server);

io.on('connection', function(socket) 
{
    
    socket.on('green', function() 
    {
        var color = "green";
        socket.broadcast('green', color);
    })

    socket.on('blue', function()
    {
        var color = "blue";
        socket.emit('blue', color);
    })

    socket.on('pink', function()
    {
        var color = "pink";
        socket.emit('pink', color);
    })

})

app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/', function(req, res) 
{
    res.render('index');
})

app.listen(8000, function() 
{
    console.log("Power Overwhelming")
})