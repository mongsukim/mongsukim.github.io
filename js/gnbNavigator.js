(function () {
    const gnbList = document.querySelector('.gnb-list');

    function moveScroll(name) {
        const scrollToElem = document.querySelector(`#${name}`);

        scrollToElem.scrollIntoView();
    }

    // function activeNav(elem) {
    //     if (!elem.classList.contains('active')) {
    //         const currentActive = gnbList.querySelector('.active');
    //         currentActive.classList.remove('active');
    //         elem.classList.add('active');
    //     }
    // }

    function navEventHadler(e) {
        const navItemElem = e.target;
        const name = navItemElem.getAttribute('name');

        if (name !== null) {
            moveScroll(name);
            // activeNav(navItemElem);
        }
    }

    function init() {
        gnbList.addEventListener('click', navEventHadler);
    }

    init();

})();