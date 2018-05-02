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
        console.log('green received');
        socket.broadcast.emit('green');
    })

    socket.on('blue', function()
    {
        socket.broadcast.emit('blue');
    })

    socket.on('pink', function()
    {
        socket.broadcast.emit('pink');
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