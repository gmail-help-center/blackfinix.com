const canvas = document.getElementById("particles");
let ctx = null;

if(canvas){
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

/* Countdown elements */
const d = document.getElementById("d");
const h = document.getElementById("h");
const m = document.getElementById("m");
const s = document.getElementById("s");

if(d && h && m && s){

    const launchDate = new Date("Jul 3, 2026 23:59:59").getTime();

    setInterval(()=>{

        let now = new Date().getTime();
        let dist = launchDate - now;

        d.innerText = Math.floor(dist/(1000*60*60*24));
        h.innerText = Math.floor((dist%(1000*60*60*24))/(1000*60*60));
        m.innerText = Math.floor((dist%(1000*60*60))/(1000*60));
        s.innerText = Math.floor((dist%(1000*60))/1000);

    },1000);
}

/* Simple particles */
if(ctx){

    let particles = [];

    for(let i=0;i<70;i++){
        particles.push({
            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height,
            r:2
        });
    }

    function animate(){
        ctx.clearRect(0,0,canvas.width,canvas.height);

        ctx.fillStyle="cyan";

        particles.forEach(p=>{
            ctx.beginPath();
            ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();
}