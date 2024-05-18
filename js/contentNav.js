(function () {
    const projects = document.querySelectorAll('.project-aricle');
    // 각 프로젝트내의 선택된 인덱스를 담는 객체
    const current = {};

    const ACTIVE_CLASS = 'active';

    // 카테고리 선택여부를 바꿔주는 함수
    function changeNavItem(navList, changeItem, index) {
        const currentItem = navList[current[index]];

        currentItem.classList.remove(ACTIVE_CLASS);
        changeItem.classList.add(ACTIVE_CLASS);
    }

    // 카테고리에 따른 콘텐츠를 바꿔주는 함수
    function changeContentItem(project, changeIndex, projectIndex) {
        const contentList = project.querySelectorAll('.content-item');
        const currentContent = contentList[current[projectIndex]];
        const changeContent = contentList[changeIndex];

        currentContent.classList.remove(ACTIVE_CLASS);
        changeContent.classList.add(ACTIVE_CLASS);
    }

    // 클릭이벤트 추가해주는 함수
    function addChangeProjectEvnet(project, index) {
        const navList = project.querySelectorAll('.spec-item');
        for (let i = 0; i < navList.length; i++) {
            navList[i].addEventListener('click', function () {
                // 이미 선택된 요소면 작동 X
                if (current[index] === i) {
                    return;
                }

                changeNavItem(navList, navList[i], index);
                changeContentItem(project, i, index);

                current[index] = i;
            });
        }
    }

    function init() {
        let name = 'asd';

        for (let i = 0; i < projects.length; i++) {
            addChangeProjectEvnet(projects[i], i);
            // 객체 초기화
            current[i] = 0;
        }
    }

    init();
})();
