const hamburger=document.getElementById('hamburger');
const navUl=document.getElementById('list');

hamburger.addEventListener('click',()=> {
    navUl.classList.toggle('show');
})