// AOS initialization
AOS.init({
    duration: 800
});

window.addEventListener('scroll', function () {
    // show to top button & attention navbar
    if (this.pageYOffset > 0) {
        document.querySelector('#toTop').classList.remove('hide');
        setTimeout(() => {
            document.querySelector('#toTop').classList.add('show');
        }, 1);
        document.querySelector('.navbar').classList.add('navbar--scroll');
    } else {
        document.querySelector('#toTop').classList.remove('show');
        setTimeout(() => {
            document.querySelector('#toTop').classList.add('hide');
        }, 150);
        document.querySelector('.navbar').classList.remove('navbar--scroll');
    }

    // hide KV content
    if (this.pageYOffset > document.querySelector('.container').offsetTop) {
        document.querySelector('.kv__wrap').classList.add('hide');
    } else {
        document.querySelector('.kv__wrap').classList.remove('hide');
    }
}, true);

// navbar toggle
document.querySelector('.navbar__trigger').addEventListener('click', function () {
    let menu = document.querySelector('.navbar__menu');

    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
    } else {
        menu.classList.add('open');
    }

}, true);


// page to top
document.querySelector('#toTop').addEventListener('click', function () {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
}, true);

// smooth hash jump
(function smoothHash() {
    let totalLink = [...document.querySelectorAll('a')],
        hasHash = totalLink.filter(element => element.hash !== '');

    hasHash.forEach(element => {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            let target = element.hash,
                navbarHeight = document.querySelector('.navbar').offsetHeight,
                wrapOffsetTop = document.querySelector('.container').offsetTop,
                trueOffsetTop = document.querySelector(target).offsetTop + wrapOffsetTop - navbarHeight;
            window.scroll({
                top: trueOffsetTop,
                behavior: 'smooth'
            })
        }, true);
    });
})();

// cpoyright show current year
(function getYear() {
    let date = new Date();
    return document.querySelector('#nowTime').textContent = date.getFullYear();
})();