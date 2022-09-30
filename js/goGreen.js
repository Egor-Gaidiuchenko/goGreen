// Tabs

const tabs = document.querySelectorAll('.tab'),
      navItem = document.querySelectorAll('.nav-item'),
      nav = document.querySelector('.nav'),
      footer = document.querySelector('.footer');

nav.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('nav-item')) {
        navItem.forEach((item, i) => {
            if (target == item) {
                item.classList.add('nav-checked');
                tabs[i].classList.remove('hide');
            } else {
                item.classList.remove('nav-checked');
                tabs[i].classList.add('hide');
            }
        });
    }

    if (navItem[0].classList.contains('nav-checked')) {
        footer.classList.add('hide');
    } else {
        footer.classList.remove('hide');
    }
});

// Burger

const burger = document.querySelector('.menu'),
      burgerMenu = document.querySelector('.burger'),
      hiddenMenu = document.querySelector('.hidden-menu'),
      hiddenNavItem = document.querySelectorAll('.hidden-nav-item');

burger.addEventListener('click', () => {
    burgerMenu.classList.toggle('hide');
    document.body.classList.toggle('lock');
});

burgerMenu.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('hidden-nav-item')) {
        hiddenNavItem.forEach((item, i) => {
            if (target == item) {
                item.classList.add('hidden-nav-checked');
                tabs[i].classList.remove('hide');
            } else {
                item.classList.remove('hidden-nav-checked');
                tabs[i].classList.add('hide');
            }
        });
    }

    if (hiddenNavItem[0].classList.contains('hidden-nav-checked')) {
        footer.classList.add('hide');
    } else {
        footer.classList.remove('hide');
    }

    document.body.classList.toggle('lock');

    burgerMenu.classList.add('hide');
});