$(document).ready(function(){
    console.log("Power Overwhelming...")

    var socket = io();

    socket.on('green', function()
    {
        $(".wrapper").parents().removeClass("pink", "blue");
        $(".wrapper").parents().addClass("green");
    })
    socket.on('blue', function()
    {
        $(".wrapper").parents().removeClass("green", "pink");
        $(".wrapper").parents().addClass("blue");
    })
    socket.on('pink', function()
    {
        $(".wrapper").parents().removeClass("green", "blue");
        $(".wrapper").parents().addClass("pink");
    })

    $(document).on('click', "#green", function()
    {
        socket.emit('green');
    })

    $(document).on('click', "#blue", function()
    {
        socket.emit('blue');
    })

    $(document).on('click', "#pink", function()
    {
        socket.emit('pink');
    })


})