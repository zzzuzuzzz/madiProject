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
    <link rel="manifest" href="manifest.json">
</head>
<body>
    <div class="container">
        <div class="logoBlock">
            <div class="img"></div>
            <p>Расписание МАДИ</p>
        </div>
        <form class="singInBlock">
            <input type="email" placeholder="Логин" class="email">
            <input type="password" placeholder="Пароль" class="password">
            <input type="submit" value="Войти" class="btnSingIn">
        </form>
        <div class="moreBlock">
            <input type="button" class="btnToJustSchedule" value="Продолжить без входа">
            <p class="goToSingUp">
                У вас нет аккаунта? - <m>Зарегистрируйтесь!</m>
            </p>
        </div>
    </div>
    <div id="errorField" v-if="seen">
        {{ msg }}
    </div>
    <script src="assets/js/jquery-3.7.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script src="assets/js/index.js"></script>
    <script src="assets/js/app.js"></script>
</body>
</html>