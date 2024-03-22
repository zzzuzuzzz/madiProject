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
    <div class="container">
        <input type="search" class="search" :placeholder="msg">
        <div class="resultBlock"></div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script src="assets/js/jquery-3.7.1.min.js"></script>
    <script src="assets/js/studentList.js"></script>
    <script src="assets/js/teacherList.js"></script>
    <script>

        function getCookie(name) {
            let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }

        let msg = 'Поиск'

        if (String(getCookie('userWork')) === 'student') {
            for (let pair of studentList.entries()) {
                let div = document.createElement('p');
                div.id = pair[0];
                div.classList.add('result');
                div.innerHTML = pair[1];
                document.querySelector('.resultBlock').append(div);
                msg = 'Выберете группу';
            }
        } else if (String(getCookie('userWork')) === 'teacher') {
            for (let pair of teacherList.entries()) {
                let div = document.createElement('p');
                div.id = pair[0];
                div.classList.add('result');
                div.innerHTML = pair[1];
                document.querySelector('.resultBlock').append(div);
                msg = 'Выберете себя';
            }
        }

        let app = new Vue({
            el: '.search',
            data: {
                msg: msg,
            }
        })
    </script>
    <script>
        $('.result').click(function () {
            let id = this.id

            $.ajax({
                url: 'vendor/authCookie.php',
                type: 'POST',
                data: {
                    id: id,
                },
                success (data) {
                    document.location.href = 'schedule.php'
                }
            });
        })
    </script>
</body>
</html>