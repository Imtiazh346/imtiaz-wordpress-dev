let showHamburger = document.getElementById('hamburgerShow');
let mobileMenu = document.querySelector('.mobile-menu')
let hamburgerClose = document.getElementById('hamburgerClose');

showHamburger.addEventListener('click',() =>{
    mobileMenu.style.display = "block";
    showHamburger.style.display = 'none';
    hamburgerClose.style.display = 'block';

})

hamburgerClose.addEventListener('click', ()=>{
    mobileMenu.style.display = "none";
    hamburgerClose.style.display = 'none';
    showHamburger.style.display = 'block';
})


