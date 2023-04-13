const btnMenu = document.getElementById('hamburger')
const menu = document.querySelector('.items-navbar')

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active-navbar')
})