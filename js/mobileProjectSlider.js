(function () {
    const contentLists = document.querySelectorAll('.content-list');
    const controllerLists = document.querySelectorAll('.content-controller');
    const PAGING_STEP = 3;
    const SLIDE_SPEED = 0.5;

    console.log(controllerLists);
    const init = function () {
        contentLists.forEach(function (contentList) {
            const controllerElem = contentList.nextElementSibling;
            const controllerList = controllerElem.querySelectorAll('.content-control-item');
            let startX = 0;
            let moveX = 0;
            let currentX = 0;
            let moveRange = 0;
            let maxX = 0;

            controllerElem.addEventListener('click', function (e) {
                if (e.target.tagName === 'LI') {
                    const current = controllerElem.querySelector('.active');

                    if (current !== e.target) {
                        const elemeWidth = contentList.getBoundingClientRect().width;
                        const clickIndex = [...controllerList].indexOf(e.target);

                        current.classList.remove('active');
                        controllerList[clickIndex].classList.add('active');
                        currentX = -(elemeWidth * clickIndex);
                        contentList.style.transition = `${SLIDE_SPEED}s`;
                        contentList.style.transform = `translateX(${currentX}px)`;
                    }

                }
            });
            contentList.addEventListener('touchstart', function (e) {
                const elemeWidth = contentList.getBoundingClientRect().width;
                console.log(moveX);
                moveX = 0;
                startX = e.touches[0].clientX;
                moveRange = elemeWidth / PAGING_STEP;
                contentList.style.transition = 'none';
                maxX = -(contentList.scrollWidth - elemeWidth);
            });
            contentList.addEventListener('touchmove', function (e) {
                moveX = e.touches[0].clientX - startX;
                if (moveX >= 0 && currentX === 0) {
                    moveX = 0;
                } else if (moveX + currentX <= maxX) {
                    moveX = 0;
                }
                console.log(moveX + currentX, maxX);
                contentList.style.transform = `translateX(${moveX + currentX}px)`;
            });
            contentList.addEventListener('touchend', function (e) {
                const controlItems = controllerElem.querySelectorAll('.content-control-item');
                const currentItem = controllerElem.querySelector('.active');

                let current = [...controlItems].indexOf(currentItem);
                console.log(current);
                let next = current;
                if (moveX <= -moveRange) {
                    currentX = -(moveRange * PAGING_STEP) + currentX;
                    next++;
                } else if (moveX >= moveRange) {
                    currentX = (moveRange * PAGING_STEP) + currentX;
                    next--;
                }
                if (next !== current) {
                    currentItem.classList.remove('active');
                    controlItems[next].classList.add('active');
                    current = next;
                }
                contentList.style.transition = `${SLIDE_SPEED}s`;
                contentList.style.transform = `translateX(${currentX}px)`;
            })
        });
    };

    init();
})();