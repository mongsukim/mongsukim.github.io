<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Site | 로그ㅇ아웃</title>

    <!-- CSS -->
    <link rel="stylesheet" href="../assets/css/fonts.css">
    <link rel="stylesheet" href="../assets/css/reset.css">
    <link rel="stylesheet" href="../assets/css/style5.css">
    <link rel="stylesheet" href="../assets/css/mediaquery.css">


    <!-- webfonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900" rel="stylesheet">
</head>
<body>
    <div id="wrap">
    <?php
        include '../component/header.php'
    ?>
        <!-- //header -->

        <main id="main">
          <section id="login-cont">
          <?php
              include '../connect/session.php';

              unset($_SESSION['memberID']);
              unset($_SESSION['youNickName']);

              echo "<div class='out'>로그아웃 되었습니다.<br><a href='../pages/index5.html'>메인페이지로 이동하기</a></div>"
            ?>
          </section>
        </main>
    </div>
</body>
</html>