<header id="header">
    <div class="header-left">
      <a href="https://mongsukim.github.io/" target="_blank">REACT PORTFOLIO</a>
    </div>
    <div class="header-mid">
      <a href="https://developermong2.gitbook.io/javascript/"
      target="_blank">GITBOOK</a>
    </div>
    <div class="header-right">
    <nav class="nav">
      <ul>
      <?php if( isset($_SESSION['memberID']) ){ ?>
                        <li class="line"><?=$_SESSION['youNickName']?>님 환영합니다.</li>
                        <li><a href="../sign/logOut.php">로그아웃</a></li>
                <?php } else { ?>
                        <li><a href="../sign/signup.php">회원가입</a></li>                
                        <li><a href="../sign/logIn.php">로그인</a></li>
                <?php } ?> 
                <li><a href="../board/writeBoard.php">글쓰기</a></li>
                <li><a href="../board/board.php">게시판</a></li>
      </ul>
    </nav>
    </div>
</header>