

/** BASIC SETUP
 * 
 *  define canvas size
 *  define canvas context
 *  define keyboard/mouse input handlers
 * 
 *  **/

//Canvas dimension multipliers
let canvasScale_W = .9;
let canvasScale_H = .6;

//Canvas dimensions
const canvas=
{
    //This will use maximum available width and height of your browser. YMMV with results
    w: window.screen.availWidth * canvasScale_W,
    h: window.screen.availHeight * canvasScale_H,
    //This lets you reference the canvas HTML element by using canvas.html
    html: document.getElementById("canvas")
};

//IMPORTANT: this provides context to the canvas element and will be used the most for drawing
const CTX = canvas.html.getContext("2d");

//input handler array
let keysDown = {};

//Adds ANY pressed key into keysDown array
addEventListener("keydown", function(event)
{
    keysDown[event.key] = true;
    //console.log(event.key + " was pressed");
});
//Removes released key from the keysDown array
addEventListener("keyup", function(event)
{
    delete keysDown[event.key];
    //console.log(event.key + " was released");
});
//Adds mousedown event to keysDown array
addEventListener("mousedown", function(event)
{
    keysDown[event.type] = true;
    //console.log("mouse was clicked");
});
//Removes mousedown event from keysDown array
addEventListener("mouseup", function(event)
{
    delete keysDown["mousedown"];
    //console.log("mouse was released");
});

/** INITIALIZATION AND LOOP
 * 
 *  do an initialization of the canvas and initialize the loop
 *  loop update(), draw(), and a callback to keep looping
 * 
 *  **/

//This gets the loop started
window.onload = init();

function init()
{
    //Assign the width and height to the canvas
    canvas.html.setAttribute("width", canvas.w);
    canvas.html.setAttribute("height", canvas.h);
    
    //start the loop
    loop();
}

function loop()
{
    update();
    draw();
    requestAnimationFrame(loop);
}

//Generally, update will handle user input and any calculations done (i.e. frame rate math, object position adjustment, etc.)
function update()
{
    //keys can be handled like so:
    if('w' in keysDown || 'W' in keysDown)
    {
        //do something
    }
    if('d' in keysDown || 'D' in keysDown)
    {
        //do something
    }

    //mouse click can be handled similarly
    if('mousedown' in keysDown)
    {
        //do something
    }

    //All of the above can be wrapped into a function like handleInput() and then be called within this update() function.
}

//Draw will handle anything to do with making objects appear on the canvas.
//Drawing goes from "top to bottom" in the sense that the first thing drawn will be below every subsequent thing drawn.
//Drawing functions can be super modularized, but should all get wrapped in this draw() function.

//Canvas coordinate system starts in the top-left corner at 0,0.
function draw()
{
    //If the canvas doesn't get cleared each time the loop runs, renders will be drawn over top each other.
    clearCanvas();
    //draw things to the canvas
    //examples described below in their function definitions
    drawCanvasBG("white");
    drawRectangle("#00ffff", "rgb(255,0,255)");
    //note that above allows many different color definitions as parameters
}

function clearCanvas()
{
    //This is a 2D context method(?)/function(?) that clears a rectangle from X, Y, to W , H
    //This call clears the entire canvas since it covers from the top left corner to the bottom right corner
    CTX.clearRect(0,0, canvas.w, canvas.h);
}

function drawCanvasBG(fill)
{
    //This takes the fill parameter and tells the canvas context to use this color on its next draw method(?)/function(?)
    CTX.fillStyle = fill;
    //This is a 2D context method(?)/function(?) that makes a rectangle from X, Y, to W , H
    //This call fills the entire canvas since it covers from the top left corner to the bottom right corner
    CTX.fillRect(0, 0, canvas.w, canvas.h);
}

function drawRectangle(fill, stroke)
{
    //Much like the drawCanvasBG() call, we can make a rectangle of any size at any position on (or off of) the canvas
    //Again, this takes the fill parameter and tells the canvas context to use this color on its next fill method(?)/function(?)
    CTX.fillStyle = fill;
    //This takes the stroke parameter and tells the canvas context to use this color on its next stroke method(?)/function(?)
    CTX.strokeStyle = stroke;

    CTX.fillRect(canvas.w/2, canvas.h/2, 25, 25);
    CTX.strokeRect(canvas.w/2, canvas.h/2, 25, 25);

    //If you were to draw ANOTHER object without changing fill or stroke, that object will use the most recent color
}