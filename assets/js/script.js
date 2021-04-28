function toggle() {
  var menu = document.getElementById("menu");
    menu.style = "height: max-content; display: block;";
}


const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('#menu')


hamburger.addEventListener('click', () => {
  menu.classList.toggle('showMenu')
})