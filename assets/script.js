
const b=document.querySelector('.menu-btn'),n=document.querySelector('.nav');
if(b&&n)b.addEventListener('click',()=>n.classList.toggle('open'));
const y=document.getElementById('year'); if(y)y.textContent=new Date().getFullYear();
