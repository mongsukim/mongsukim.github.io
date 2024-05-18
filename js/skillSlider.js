(function() {
    const skillSlider = document.querySelector('.skill-slide');
    const skillList = skillSlider.querySelector('.skill-list');
    const leftBtn = skillSlider.querySelector('.arrow.left');
    const rightBtn = skillSlider.querySelector('.arrow.right');

    const skillCount = skillList.children.length;
    const current = {
        moveX: 0,
    };

    function moveLeft() {
        if(current.moveX <= 0) {
            return;
        }
        current.moveX -= 100;
        skillList.style.transform = `translateX(-${current.moveX}%)`;
    }

    function moveRight() {
        if(current.moveX >= 100 * (skillCount-1)) {
            return;
        }
        current.moveX += 100;
        skillList.style.transform = `translateX(-${current.moveX}%)`;
    }

    function init() {
        leftBtn.addEventListener('click', moveLeft);
        rightBtn.addEventListener('click', moveRight);
    }

    init();
})();