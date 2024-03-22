<?php

if ($_COOKIE['userId']) {
    header('Location: schedule.php');
}

?>

<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Авторизация</title>
    <link rel="stylesheet" href="assets/css/index.css">
</head>
<body>
    <form class="container">
        <p>Кто Вы?</p>
        <input type="submit" value="Я студент" class="btnStudent">
        <input type="submit" value="Я преподователь" class="btnTeacher">
    </form>

    <script src="assets/js/jquery-3.7.1.min.js"></script>
    <script>
          $('.btnStudent').click(function (e) {
              e.preventDefault()

              $.ajax({
                  url: 'vendor/cookie.php',
                  type: 'POST',
                  data: {
                      value: 'student'
                  },
                  success () {
                       document.location.href = 'chooseMySelf.php'
                  }
              });
          })
          $('.btnTeacher').click(function (e) {
              e.preventDefault()

              $.ajax({
                  url: 'vendor/cookie.php',
                  type: 'POST',
                  data: {
                      value: 'teacher'
                  },
                  success () {
                       document.location.href = 'chooseMySelf.php'
                  }
              });
          })
    </script>
</body>
</html>