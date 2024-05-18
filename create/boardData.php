<?php
  include '../connect/connect.php';
  include '../connect/session.php';
  
  for ( $i=1; $i<=500; $i++){
    $regTime = time();

    $sql = "INSERT INTO myBoard(memberID, title, content, regTime) VALUES(1, '{$i}.번째 타이틀입니다.' , '{$i}번째 게시글입니다. 게시판을 만들었어요. 게시글입니다. 게시글입니다 ' ,'{$regTime}' )";
    $result = $dbConnect -> query($sql);

    if($result){
      echo "{$i} data input complete";
    } else {
      echo "{$i} data input false";
    }
  }
?>