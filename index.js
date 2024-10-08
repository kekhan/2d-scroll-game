// Hide loading screen after assets load
PIXI.Loader.shared.add('sprite', 'player.png').load(() => {
    document.getElementById('loading-screen').style.display = 'none';

//Canvas element from html file
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    
    // global Variables
    const currentBg = 0;
    const bg = ["room2.png","livingRoom.png","kitchen.png","bg.png"];
    let count =0;
    let image = new Image();
    
    window.addEventListener("keydown",function(e){
     window.key = e.keyCode;
     console.log(window.key);
    });
    window.addEventListener("keyup",function(e){
     window.key = false;
     console.log(window.key);
    });
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    
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
          context.clearRect(canvas.width,canvas.height,0,0);
     
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
      context.clearRect(0,0,canvas.width,canvas.height)
      main_player.draw();
    },250);
});
