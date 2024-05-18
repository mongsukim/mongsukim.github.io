<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Site | 로그인</title>

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
                <div class="login">
                <p style="text-align:center">[로그인 페이지]</p>
                    <h2><strong>Hyesu's portfolio</strong> 사이트에 오신걸 환영합니다.</h2>
                    <form name="logIn" method="post" action="logInSave.php">
                        <fieldset>
                            <legend class="sr-only">로그인 영역입니다.</legend>
                            <div>
                                <label for="userEmail" class="sr-only">이메일</label>
                                <input type="email" name="userEmail" id="userEmail" class="input-text" placeholder="이메일을 적어주세요." required autofocus>
                            </div>
                            <div>
                                <label for="userPW" class="sr-only">이메일</label>
                                <input type="password" name="userPW" id="userPW" class="input-text" placeholder="패스워드를 적어주세요." required>
                            </div>
                            <button class="login-btn" type="submit" value="로그인">로그인</button>
                            <p class="login-desc">회원가입을 원하면? <a href="signup.php">회원가입</a></p>
                        </fieldset>
                    </form>
                </div>  
            </section>
        </main>
    </div>
</body>
</html>