document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.getElementById('navbar-toggler');
    const menu = document.getElementById('mobile__sidebar');
    const closeBtn = document.getElementById('navbar-close');
    
    const selector = document.getElementById("coin__selector")
    const selector2 = document.getElementById("coin__selector2")
  
    const selectorDropdown = document.getElementById("coin__dropdown")
    const selectorDropdown2 = document.getElementById("coin__dropdown2")

    toggler.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        menu.classList.remove('active');
    });


    selector.addEventListener('click', () => {
    selectorDropdown.classList.toggle('show');
    });

    selector2.addEventListener('click', () => {
        selectorDropdown.classList.toggle('show');
        });

    
});


document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.getElementById('navbar-toggler');
    const menu = document.getElementById('mobile__sidebar');
    const closeBtn = document.getElementById('navbar-close');

   
});