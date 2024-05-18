
<?php
  include '../connect/connect.php';
  include '../connect/session.php';
?>


<!DOCTYPE html>
<html lang="ko"> 
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- style -->
  <link rel="stylesheet" href="../assets/css/style5.css">
  <link rel="stylesheet" href="../assets/css/reset.css">
  <link rel="stylesheet" href="../assets/css/mediaquery.css">
  <title>게시판</title>
</head>
<body>
<?php
  include '../component/header.php';
?>
<!--1.게시판 테이블 만들기
    2.게시판 등록 페이지(writeBoard.php)
    3.게시판 데이터 저장 페이지(saveBoard.php)
  4. 게시판 데이터 불러오기 페이지(board.php)-->
  <section id="board-cont">
    <div class="container">
      <div class="writeBoard">
        <h2>게시글을 작성해 보세요.</h2>
        <form action="saveBoard.php" name="boardWrite" method="post">
            <fieldset>
                <legend class="sr-only">게시판 작성 영역입니다.</legend>
                <div>
                    <label for="boardTitle">제목</label>
                    <input type="text" name="boardTitle" id="boardTitle" class="title-text" required autofocus placeholder="제목을 작성해주세요!" />
                </div>
                <div>
                    <label for="boardContent">내용</label>
                    <textarea name="boardContent" id="boardContent" class="title-text" rows="13" required placeholder="내용을 작성해주세요!"></textarea>
                </div>
            </fieldset>
            <button class="writeBoardBtn" type="submit" value="저장하기">저장하기</button>
        </form>
      </div>
    </div>
  </section>
</body>
</html>