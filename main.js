// change navbar style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
});


// show / hide nav menu
const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
});
const closeNav = () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
};
closeBtn.addEventListener('click', closeNav);


// close nav when menu item is clicked
if (window.innerWidth < 1024) {
    document.querySelectorAll('.nav-menu li a').forEach((item)=>{
        item.addEventListener('click', closeNav);
    });
}