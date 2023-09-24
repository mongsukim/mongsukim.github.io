<?php
  include '../connect/connect.php';
  include '../connect/session.php';
  // include '';
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
  <main id="main">
    <div class="conatiner">
      <!-- boardCont -->
      <section id="boardCont">
        <div class="container">
          <div class="listBoard">
              <h2>무엇이든지 물어보세요!!!</h2>
              <div class="listSearch">
                  <form name="tableSearch" method="post" action="searchResult.php">
                      <fieldset>
                          <legend class="sr-only">게시판 검색 영역입니다.</legend>
                          <input type="search" name="searchKeyword" class="form-search" placeholder="검색어를 입력하세요!" aria-label="search" />
                          <select name="searchOption" id="searchOption" class="form-select">
                              <option value="title">제목</option>
                              <option value="content">내용</option>
                              <option value="tandc">제목과 내용</option>
                              <option value="torc">제목 또는 내용</option>
                          </select>
                          <button type="submit" class="form-btn">검색</button>
                          <a class="form-btn black" href="writeBoard.php">글 쓰기</a>
                      </fieldset>
                  </form>
              </div>
              <!-- //listSearch -->
              <div class="listTable">
                  <table class="table">
                      <colgroup>
                          <col style="width: 10%">
                          <col style="width: 65%">
                          <col style="width: 10%">
                          <col style="width: 15%">
                      </colgroup>
                      <thead>
                          <tr>
                              <th>번호</th>
                              <th>제목</th>
                              <th>등록자</th>
                              <th>등록일</th>
                          </tr>
                      </thead>
                      <tbody>
                        <?php
                          if( isset($_GET['page'])  ){
                            $page = (int) $_GET['page'];
                          } else {
                            $page = 1;
                          }
                          $numView = 20;
                          $viewLimit = ($numView * $page) - $numView;

                          //1~20 : DESC LIMIT 0, 20 -> $page =1 {$numView * $page} - $numView
                          //21-40 DESC LIMIT 20, 20 -> $page =2 {$numView * $page} - $numView
                          //41~60 DESC LIMIT 40, 20 -> $page =3 {$numView * $page} - $numView
                          //61~80 DESC LIMIT 60, 20 -> $page =4 {$numView * $page} - $numView
                          //81~100 DESC LIMIT 80, 20 -> $page =5 {$numView * $page} - $numView


                          $sql = "SELECT b.boardID, b.title, m.youNickName, b.regTime FROM ";
                          $sql .= "myBoard b JOIN mymember m ON (m.memberID = b.memberID) ORDER BY boardID ";
                          $sql .= "DESC LIMIT {$viewLimit}, {$numView}";

                          $result = $dbConnect -> query($sql);
                          if( $result ){
                            $dataCount = $result -> num_rows;
                            if($dataCount > 0){
                              for( $i=1; $i<= $dataCount; $i++ ){
                                $memberInfo = $result -> fetch_array(MYSQLI_ASSOC);
                                echo"<tr>";
                                echo"<td>".$memberInfo['boardID']."</td>";
                                echo"<td class='left'><a href='viewBoard.php?boardID={$memberInfo['boardID']}'>".$memberInfo['title']."</a></td>";
                                echo"<td>".$memberInfo['youNickName']."</td>";
                                echo"<td>".date('Y-m-d H:i' , $memberInfo['regTime'])."</td>";
                                echo "</tr>";
                              }
                            } else{
                              echo "<tr><td colspan='4' > 게시글이 없습니다</td></td>";
                            }
                          } else {
                              echo "에러발생";
                          }
                        ?>
                    
                          <!-- <tr>
                              <td>1</td>
                              <td><a href="#">안녕하세요</a></td>
                              <td>웹스</td>
                              <td>2021-01-07</td>
                          </tr>  -->
                      
                      </tbody>
                  </table>

              </div>
              <?php
                include 'pagination.php'
              ?>
          </div>
        </div>
      </section>
    </div>
  </main>
</body>
</html>