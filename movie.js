let openMenu = false;

const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.querySelector(".close-btn");

if (menuBtn && sidebar && closeBtn) {

  menuBtn.addEventListener("click", () => {
    sidebar.style.left = "0";
    openMenu = true;
  });

  closeBtn.addEventListener("click", () => {
    sidebar.style.left = "-250px";
    openMenu = false;
  });

}

function validateForm() {

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let message = document.getElementById("message");

  if (
    name === "" ||
    email === "" ||
    phone === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    message.innerHTML = "⚠️ Please fill all fields";
    message.style.color = "red";
    return;
  }

if (password.length < 6 || password.length > 20) {
  message.innerHTML = "❌ Password must be 6 to 20 characters";
  message.style.color = "red";
  return;
}

  if (password !== confirmPassword) {
    message.innerHTML = "❌ Passwords do not match";
    message.style.color = "red";
    return;
  }

  message.innerHTML = "✅ Registration Successful";
  message.style.color = "green";
}

function loginForm() {

  let user = document.getElementById("loginUser").value.trim();
  let password = document.getElementById("loginPassword").value;
  let message = document.getElementById("loginMessage");

  if (user === "" || password === "") {
    message.innerHTML = "⚠️ Please fill all fields";
    message.style.color = "red";
    return;
  }
  
  if (password.length < 6 || password.length > 20) {
  message.innerHTML = "❌ Password must be 6 to 20 characters";
  message.style.color = "red";
  return;
}

  // Email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Bangladesh mobile number check
  const phonePattern = /^01[3-9]\d{8}$/;

  if (!emailPattern.test(user) && !phonePattern.test(user)) {
    message.innerHTML = "❌ Invalid Email or Mobile Number";
    message.style.color = "red";
    return;
  }

  message.innerHTML = "✅ Login Successful";
  message.style.color = "green";
}

function togglePassword() {

  let password = document.getElementById("loginPassword");
  let eyeIcon = document.getElementById("eyeIcon");

  if (password.type === "password") {
    password.type = "text";
    eyeIcon.innerHTML = "🙈";
  } else {
    password.type = "password";
    eyeIcon.innerHTML = "👁️";
  }

}

/* accordin js start here*/

const buttons = document.querySelectorAll(".acc-btn");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        const content = btn.nextElementSibling;

        btn.classList.toggle("active");

        if(content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });

});



/* accordin js end here*/

// android & iphone setting

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");

    const target = document.getElementById(
      tab.dataset.tab
    );

    target.classList.add("active");
    
    const accContent = tab.closest(".acc-content");
    if (accContent) {
      accContent.style.maxHeight = accContent.scrollHeight + "px";
    }

  });
});
    
    
    /* coming soon*/
  
// Countdown
const launchDate = new Date("Dec 31, 2026 23:59:59").getTime();

setInterval(() => {

    let now = new Date().getTime();
    let dist = launchDate - now;

    document.getElementById("d").innerText = Math.floor(dist/(1000*60*60*24));
    document.getElementById("h").innerText = Math.floor((dist%(1000*60*60*24))/(1000*60*60));
    document.getElementById("m").innerText = Math.floor((dist%(1000*60*60))/(1000*60));
    document.getElementById("s").innerText = Math.floor((dist%(1000*60))/1000);

},1000);


/* -------------------------
   PARTICLE ANIMATION
--------------------------*/

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle{
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;

        if(this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if(this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw(){
        ctx.fillStyle = "cyan";
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
    }
}

function init(){
    for(let i=0;i<80;i++){
        particlesArray.push(new Particle());
    }
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let i=0;i<particlesArray.length;i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }

    requestAnimationFrame(animate);
}

init();
animate();