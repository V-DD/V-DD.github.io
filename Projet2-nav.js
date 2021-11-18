function toggleMenu(){
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', ()=>{
        navbar.classList.toggle('show_nav');
    })
}

toggleMenu();