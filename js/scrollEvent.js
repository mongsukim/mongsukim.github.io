(function() {
    const init = function() {
        window.addEventListener('scroll', function (e) {
            const scrollDistance = window.scrollY;
            const sectionList = document.querySelectorAll('section');
            const gnbList = document.querySelector('.gnb-list');
            const gnbItemList = gnbList.querySelectorAll('.gnb-item');

            sectionList.forEach(function (elem, index) {
                const elemY = window.pageYOffset + elem.getBoundingClientRect().top;

                if (elemY - 1 <= scrollDistance) {
                    gnbList.querySelector('.active').classList.remove('active');
                    gnbItemList[index].classList.add('active');
                }
            });
        });
    }

    init();
})();