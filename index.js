// Initialize the Pixi application
const app = new PIXI.Application({
    view: document.getElementById('canvas'),
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x1099bb
});

// Hide loading screen after assets load
PIXI.Loader.shared
    .add('sprite', 'player.png').load(() => {
    .add('key', 'door_key.png') // Load the key sprite
    .load(() => {
        document.getElementById('loading-screen').style.display = 'none';
        setup();
    
    //Canvas element from html file
        
        // global Variables
        const currentBg = 0;
        const bg = ["room2.png","livingRoom.png","kitchen.png","bg.png"];
        let count =0;
        let image = new Image();
        let key;
    
        
        window.addEventListener("keydown",function(e){
         window.key = e.keyCode;
         console.log(window.key);
        });
        window.addEventListener("keyup",function(e){
         window.key = false;
         console.log(window.key);
        });
    
    // Setup key function after loading key asset
        function setup() {
            // Create key sprite
            key = new PIXI.Sprite(PIXI.Loader.shared.resources['key'].texture);
            key.x = Math.random() * (app.renderer.width - 50); // Random position
            key.y = Math.random() * (app.renderer.height - 50);
            key.anchor.set(0.5);
            app.stage.addChild(key);
    
        // Add interaction
        app.stage.interactive = true;
        app.stage.on('pointerdown', onPointerDown);
    
        // Start the game loop
        app.ticker.add(gameLoop);
    }
    
        
        
        const usedbg = [];
        
        const playerSpriteSheet = "player.png";
        image.src = playerSpriteSheet;
    
        let bgImg = new Image();
        bgImg.width = window.innerWidth / 3;
        bgImg.src = bg[count];
        
        count+=1;
        
        usedbg.push(bgImg.src);
        
        function game_object(x,y, currentFrame, rows, columns,imgWidth, imgHeight,srcX,
           srcY, is_person, is_interact){
          
          this.x = x;
            this.y = y;
            this.currentFrame = currentFrame;
            this.rows = rows;
            this.columns = columns;
            this.imgWidth = imgWidth;
            this.imgHeight = imgHeight;
            this.srcX = srcX;
            this.srcY = srcY;
            const rowSize = this. imgWidth/this.columns;
            const colSize = this.imgHeight/this.rows;
            this.srcY = 1*colSize;
            this.draw = function (){
              
              context.drawImage(bgImg,0,0);
              context.drawImage(image,this.srcX,this.srcY,rowSize, colSize,this.x,this.y,rowSize, colSize);
              context.clearRect(app.renderer.width,app.renderer.height,0,0);
         
            }
          this.update = function(){
             if(window.key == 39 && this.x <= bgImg.width+365){
                this.srcY = 1*colSize;
                this.currentFrame = ++this.currentFrame % this.columns;
                console.log(x,bgImg.width+500);
                this.x = this.x+20;
                }
             if(window.key == 37 && this.x > 0 ){
                this.currentFrame =  ++this.currentFrame % this.columns;
                this.srcY = 0*colSize;
                this.x = this.x-20;
                }
             this.srcX = this.currentFrame * rowSize;
             if (this.x >= bgImg.width - 200 && window.key == 32) {
                 switch (count) {
                   case 1:
                     bgImg.src = bg[count];
                     count+=1;
                     this.x=50;
                     break;
                  case 2:
                    bgImg.src = bg[count];
                    count+=1;
                    console.log(table);
                    this.x=0;
                    break;
                 default:
                   this.x=0;
                   break;
                 }
                    }
            }
        
        }
        var main_player = new game_object(500, 230, 0, 2, 4, 800, 600, true, true);
        
        setInterval(function(){
          main_player.update();
          context.clearRect(0,0,app.renderer.width,app.renderer.height)
          main_player.draw();
        },250);
    
    // Pointer down event for picking up the key
    function onPointerDown(event) {
        const mousePos = event.data.global;
    
        // Check for collision with the key
        if (key.getBounds().contains(mousePos.x, mousePos.y)) {
            console.log("Key picked up!");
            
            // Remove the key from the stage
            app.stage.removeChild(key);
            key.destroy(); // Clean up
            key = null; // Reset the key variable or handle inventory
        }
    }
});


