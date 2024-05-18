(function () {
    const menuButton = document.querySelector('button.menu-btn');
    const menuTexts = menuButton.querySelectorAll('em');
    const gnb = document.querySelector('.gnb');
    const gnbList = gnb.querySelectorAll('ul');
    const topMenu = document.querySelector('.menu-top');
    const bottomMenu = document.querySelector('.menu-bottom');

    let isOpend = false;

    const styledToggle = function (elem, isOpend) {
        if (!isOpend) {
            elem.style.padding = '0 3rem';
        } else {
            elem.style.padding = '0 1.5rem';
        }
    }

    const slideText = function (elem, isOpend) {
        if (!elem) return;

        if (!isOpend) {
            elem.style.transform = 'translateY(-100%)';
        } else {
            elem.style.transform = 'translateY(0)';
        }
    }

    const menuToggle = function (menuElem, isOpend) {
        if (!isOpend) {
            menuElem.style.transform = 'translateY(0)';
        } else {
            menuElem.style.transform = 'translateY(-100%)';
        }
    };

    const menuToggleHandler = function (e) {
        if (!isOpend) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        styledToggle(this, isOpend);
        menuTexts.forEach(function (menuText) {
            slideText(menuText, isOpend);
        });
        gnbList.forEach(function (gnb) {
            slideText(gnb, isOpend);
        });

        menuToggle(topMenu, isOpend);

        isOpend = !isOpend;
    }

    const init = function () {
        menuButton.addEventListener('click', menuToggleHandler);
        topMenu.addEventListener('transitionend', function () {
            if (this.style.transform === 'translateY(0px)') {
                bottomMenu.style.transform = 'translateY(0)';
                this.classList.add('opend');
            }
        });
        topMenu.addEventListener('transitionstart', function () {
            if (this.style.transform === 'translateY(-100%)') {
                bottomMenu.style.transform = 'translateY(100%)';
                this.classList.remove('opend');
            }
        });
        bottomMenu.addEventListener('transitionend', function () {
            if (this.style.transform === 'translateY(0px)') {
                this.classList.add('opend');
            }
        });
        bottomMenu.addEventListener('transitionstart', function () {
            if (this.style.transform === 'translateY(100%)') {
                this.classList.remove('opend');
            }
        });
    }

    init();
})();