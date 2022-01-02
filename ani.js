let drops = [];
let width = 1980;
let height = 1080;


class dot
{
	constructor(x, y, v)
	{
		this.x = x;
		this.y = y;
		this.v = v;
	}
	
}

let screen = document.getElementById("screen");
let ctx = screen.getContext("2d");

//Create drops
for (i = 0; i < 1000; i++)
{
	drops.push(new dot(Math.floor((Math.random() * width) + 1), Math.floor((Math.random() * height) + 1), 0));
}

//Launch Animation
setInterval(aniLoop, 7);


//Animation loop
function aniLoop()
{
	//Clear Screen
	ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
	ctx.fillRect(0, 0, width, height);
	
	ctx.fillStyle = "#00003F";
	for (i = 0; i < drops.length; i++)
	{
		ctx.fillRect(drops[i].x, drops[i].y, 2, 3);
		
		drops[i].y = drops[i].y + drops[i].v;
		
		drops[i].v = drops[i].v + 0.95;
		
		if (drops[i].y > height)
		{
			drops[i].y = Math.floor((Math.random() * 20) + 1);
			drops[i].v = Math.floor((Math.random() * 20) + 1);
		}
	}
	
}




