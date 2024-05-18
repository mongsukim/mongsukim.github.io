(function () {
    const skillSlider = document.querySelector('.skill-slide');
    const skillList = skillSlider.querySelectorAll('.skill-item');
    const skillListElem = skillSlider.querySelector('.skill-list');
    let clickX = 0;
    let moveX = 0;
    let clicked = false;
    let clickClose = false;
    let max = 0;

    function moveCard(elem, x) {
        elem.style.left = `${x}px`;
        elem.style.transform = `rotate(${x / 30}deg)`;
    }

    function returnCard(elem) {
        elem.style.transition = '1s';
        elem.style.left = 0;
        elem.style.transform = `rotate(0)`;
    }

    function deleteCard(elem) {
        clickClose = true;
        elem.style.transition = '0.5s'
        elem.style.left = `${max}px`;
        elem.style.transform = `rotate(${max / 30}deg)`;
        elem.style.animation = 'deleteCard 1s forwards'
        setTimeout(function () {
            clickClose = false;
            clickX = 0;
            moveX = 0;
            console.log(clickClose);
            elem.style.transition = 'none';
            elem.style.left = 0;
            elem.style.transform = 'rotate(0) scale(0.75)';
            elem.style.animation = 'upCard 1s'
            skillListElem.insertBefore(elem, skillListElem.firstChild);
            let scale = 0.8;
            const skillList = skillSlider.querySelectorAll('.skill-item');
            skillList.forEach(function (item, index) {
                if (index !== 0) {
                    item.style.transform = `scale(${scale})`;
                    scale += 0.05;
                }
            });
        }, 1000);
    }

    const init = function () {
        skillList.forEach(function (elem) {
            elem.addEventListener('mousedown', function (e) {
                console.log('down~!!', clickClose);
                const skillList = skillSlider.querySelectorAll('.skill-item');
                if (this === skillList[skillList.length - 1] && !clickClose) {
                    max = -(this.getBoundingClientRect().width / 2);
                    elem.style.transition = `none`;
                    clickX = e.clientX;
                    clicked = true;
                }
            });
            elem.addEventListener('mouseup', function (e) {
                const skillList = skillSlider.querySelectorAll('.skill-item');
                const deleteMax = max - max / 2;
                console.log(deleteMax);

                if (this === skillList[skillList.length - 1] && !clickClose) {
                    if (moveX <= deleteMax) {
                        clicked = false;
                        deleteCard(elem)
                    } else {
                        clicked = false;
                        returnCard(elem);
                    }
                }
            });
            elem.addEventListener('mousemove', function (e) {
                const skillList = skillSlider.querySelectorAll('.skill-item');
                if (clicked && (this === skillList[skillList.length - 1]) && !clickClose) {
                    console.log(moveX);
                    moveX = e.clientX - clickX;
                    if (moveX <= max) {
                        moveX = max;
                    } else if (moveX >= 0) {
                        moveX = 0;
                    }
                    moveCard(this, moveX);
                }
            });
            elem.addEventListener('mouseleave', function (e) {
                if (clicked) {
                    clicked = false;
                    returnCard(this);
                }
            });
            elem.addEventListener('touchstart', function (e) {
                console.log('down~!!', clickClose);
                const skillList = skillSlider.querySelectorAll('.skill-item');
                if (this === skillList[skillList.length - 1] && !clickClose) {
                    max = -(this.getBoundingClientRect().width / 2);
                    elem.style.transition = `none`;
                    clickX = e.touches[0].clientX;
                    clicked = true;
                }
            });
            elem.addEventListener('touchend', function (e) {
                const skillList = skillSlider.querySelectorAll('.skill-item');
                const deleteMax = max - max / 2;
                console.log(deleteMax);

                if (this === skillList[skillList.length - 1] && !clickClose) {
                    if (moveX <= deleteMax) {
                        clicked = false;
                        deleteCard(elem)
                    } else {
                        clicked = false;
                        returnCard(elem);
                    }
                }
            });
            elem.addEventListener('touchmove', function (e) {
                const skillList = skillSlider.querySelectorAll('.skill-item');
                if (clicked && (this === skillList[skillList.length - 1]) && !clickClose) {
                    console.log(moveX);
                    moveX = e.touches[0].clientX - clickX;
                    if (moveX <= max) {
                        moveX = max;
                    } else if (moveX >= 0) {
                        moveX = 0;
                    }
                    moveCard(this, moveX);
                }
            });
            elem.addEventListener('mouseleave', function (e) {
                if (clicked) {
                    clicked = false;
                    returnCard(this);
                }
            });
        });
    }

    init();
})();
