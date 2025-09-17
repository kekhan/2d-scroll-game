# 2D JavaScript Scroll Game For Beginners

Let’s create a simple 2D side-scroll game in JavaScript.
This tutorial will walk you through setting up game movement and graphics. You will learn to animate a sprite and add backgrounds. 
You can find the game demo and play it at the following links:
Game demo: https://kekhan.github.io/2d-scroll-game/
Game code: https://github.com/kekhan/2d-scroll-game/

## Game Controls

In a 2D scroll game, a character can only move two ways, left and right, or up and down. 
In this game, the character moves left and right:
* The right arrow key moves the character to the right 
* The left arrow key moves the game character to the left

In this tutorial, the game character moves into other rooms. To enter another room, press the space bar when the player reaches an exit.

## HTML Setup

An HTML file is required to render your game in the browser. 


1. Create a separate folder to store all your code files.
2. Create the HTML file (index.html) and add the following HTML skeleton code. The HTML file needs the canvas tag for the game animation.
3. Add the following HTML tags and link the script path to your JavaScript file:

## JavaScript Setup

Set up the JavaScript file with skeleton code. Make sure to include all required code to render your game on the web.

### 1. Canvas setup

Follow the steps below to set up your JS file. 

1. Inside your folder, create a JavaScript file called index.js.
2. First, create a loading loop. The game opens with a loading screen for a smooth transition. 
3. Next, create a canvas variable and assign it to the <canvas> element from the HTML file.
4. Create a context variable and assign it to getContext(‘2d’). The 2d parameter allows the canvas element to use 2d mechanisms.
5. Set the canvas width and height
   
The following code sample sets up the initial game canvas. You will now see a blank canvas when you render to the HTML file.

### 2. Game Background Environments

Let's set up the rest of the game variables required to render your game on screen.

1. Create a variable called currentBg to track the current game background.
2. You will need an array to store the background images. In the bg array, the first item is the bedroom image.
3. You will need a counter to count arrey indexes.
4. Once a background image is used, the image will be stored in the used array. This step will track level setting. 


The kitchen background image. 

### 3. Event Listeners

Create event listeners for the game controls. The game will listen for the arrow keys and space bar inputs.

#### Key Down 

The following code snippets detail each event listener from the above code.
The key-down event listener checks keys pressed. The key code is stored in the event parameter if a key is pressed.
Assign window.key to e.keyCode
A conditional statement is used to determine what each keyCode does.

#### Key Up

The key-up event listener checks if the user or player stops pressing any keys. When the user lifts their hand off the keyboard, the window.key variable turns false. The keyup event listener stops the player activity.

### 4. Character Spritesheet
A 2d game requires a spritesheet to animate a character or objects. Use the following steps to assign and loop through a spritesheet. The player sprite sheet variable is assigned to a png file source.


The player sprite sheet

1. Create a constant variable called playerSpriteSheet and assign it to the player sprite sheet png.
2. In JavaScript, new Image() creates an image object. If you did not create the image variable at the beginning of this tutorial, create the image variable before assigning image.src to the playSpriteSheet.

## Game Functions

### 1. Animate the Spritesheet

The code below creates function to animate a spritesheet. This functions gives movement to your character. The game object function allows you to create different game objects, such as players, keys, and other game objects.
function game_object(x,y, currentFrame, rows, columns,imgWidth, imgHeight,srcX,
  srcY, is_person, is_interact){}
The game_object parameters can be adjusted when you create the new game_object. For the main player object, set the variables to the following values.
Set the parameters for the game objects as follows:
Var main_player = new game_object(500, 230, 0, 2, 4, 800, 600, true, true); 

The above x and y variables store the position of the character on the background images.
The currentFrame stores the single square frame of the character sprite sheet. The currentFrame starts at 0.
The sprite sheet has two rows and four columns. A
Create a rows variable and assign the rows variable to 2
Create a columns variable and assign the columns variable to 4.
The size of the image is 800 by 600.
Create the width and height variables for the sprite sheet.
The sprite sheet width is 800 and the height is 600.
Create the variable for the size of the row and the size of the column. These variables track the frame size.
srcX is the x position on the sprite sheet. The sprite sheet has a srcX value of 800 and a srcY of 600. That means 800 pixels to the right. The srcY position is the y position on the sprite sheet. That means 600 pixels down.
Once the parameters are set,, use the this keyword to initiate each object variable inside the the game_object function. The this method binds the game object to a variable or a function.


### 2. The this.draw Method 

Inside the game_object function, create two methods, update and draw. The draw method draws the image on the canvas screen.
The draw method also creates the background image.
context.drawImage takes multiple parameters about the game character.
context.drawImage(image,this.srcX,this.srcY,rowSize, colSize,this.x,this.y,rowSize, colSize);
Inside the draw method, the clearRect method clears the canvas to have a smooth animation transition.
Clear the canvas area using context.clearRect(canvas.width,canvas.height,0,0);
3. This.update Method
The update method updates the player’s position and background based on the event listener. This functions naked sure the that when the left arrow is being pressed, only the left moving sprite sheet is used. 
 In this part, the game character renders on the screen and goes into different rooms.

Here is an explanation of the sprite sheet shown above. The sprite sheet has two rows, r1 and r2. It also has 4 columns. Each frame has a row and a column index. For example, the third frame on the top is in row 1(r1) and column 3. Row 1 includes images of the character moving left while row 2 has images of the character moving right.
In the code, the rows, this.srcY, are assigned to zero for top and the bottom row is assigned to 1. The image seen on screen or  the single image frame is assigned to this.srcX.

4. Move the character across the canvas
Move the character to the right
In the update function, create a conditional statement that checks if the right and left arrows are pressed. The character sprite sheet has two rows and the bottom row moves right.
The srcY variable is assigned to the top of the second row. Look at the sprite sheet and srcY is assigned to the height of a single frame.
If the x position of the main player is less than 450 plus the sprite sheet width and the user presses the right arrow, move the frame position and move the character object 20 pixels to the right.

Move the character to the left

The if conditional checks if the user presses the right arrow(key:37) and the character object’s x position is greater than 0.
The sprite sheet frame moves to the next rectangle and the y position of the spite sheet is assigned to 0.
The x position of the character objects moves 20 pixels to the left.

5. Background Switch
The background changes when the player goes near the exit and presses the space button.
The switch case loops through each background in the bg array.
 



















Game loop
The game loop repeats the animation until the game is over or until the user exits the window.
Create the main_player object: use new game_object() with your parameters.
Inside the setInterval function, call main_player.update to update the player’s position and frame. 
Call main_player.draw to render the game images to the screen. 
Clear the canvas before calling the draw method on the main_player object.

Conclusion
Creating a 2d Javascript game is exciting and does not require a game engine. If you followed this 2D game guide, you should have a character moving left and right between different backgrounds. 
