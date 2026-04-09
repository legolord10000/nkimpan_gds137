var canvas;
var context;
var player;
var timer;
var interval = 1000/60


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new GameObject(100,canvas.height/2,100,100,"#00ffff");
player.vx=0;
player.vy=0;

npc1 = new GameObject(300,canvas.height/2,100,100,"#00ff00")
npc2 = new GameObject(600,canvas.height/2,100,100,"#0000ff")
npc3 = new GameObject(900,canvas.height/2,100,100,"#FF00ff")


timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0,0,canvas.width,canvas.height);
    
    if (d)
    {
        player.x += 4
    }
    if (a)
    {
        player.x -= 4
    }
      if (w)
    {
        player.x += 4
    }
    if (s)
    {
        player.x -= 4
    }


    player.drawRect();   
    npc1.drawCircle();  
    npc2.drawCircle();  
    npc3.drawRect();  

}

