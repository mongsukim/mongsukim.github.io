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
          <h2>게시판입니다.</h2>
          <div class="listTable">
              <table class="table">
                  <colgroup>
                      <col style="width: 20%">
                      <col style="width: 80%">
                  </colgroup>
                  <tbody>

            <?php
								if(isset($_GET['boardID']) && (int) $_GET['boardID'] > 0){
                  $boardID = $_GET['boardID'];
							    $sql = "SELECT b.title, b.content, m.youNickName, b.regTime FROM myBoard b JOIN mymember m ON (b.memberID = m.memberID) WHERE b.boardID = {$boardID}";
                          $result = $dbConnect -> query($sql);
                                    
							    	if( $result ){
							    		$memberInfo = $result -> fetch_array(MYSQLI_ASSOC);
                      echo "<tr><th>제목</th><td class='left'>".$memberInfo['title']."</td></tr>";
                      echo "<tr><th>글쓴이</th><td class='left'>".$memberInfo['youNickName']."</td></tr>";
                      echo "<tr><th>등록일</th><td class='left'>".date('Y-m-d H:i', $memberInfo['regTime'])."</td></tr>";
                      echo "<tr><th class='height'>내용</th><td class='left'>".$memberInfo['content']."</td></tr>";
							    	}
							    }
                            ?>
                            

                                <!-- <tr>
                                    <th>제목</th>
                                    <td>sdf</td>
                                </tr>
                                <tr>
                                    <th>등록자</th>
                                    <td>sdf</td>
                                </tr>
                                <tr>
                                    <th>등록일</th>
                                    <td>sdf</td>
                                </tr>
                                <tr>
                                    <th>내용</th>
                                    <td>sdf</td>
                                </tr> -->
                            </tbody>
                        </table>
                    </div>

                    <div class="listSearch">
                        <a class="form-btn black mt20" href="board.php">목록보기</a>
                    </div>
                </div>
        </div>
      </section>
    </div>
  </main>
</body>
</html>