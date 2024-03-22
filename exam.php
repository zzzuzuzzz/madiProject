<?php

if (!$_COOKIE['userId']) {
    header('Location: index.php');
}

?>

<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Экзамены</title>
    <link rel="stylesheet" href="assets/css/exam.css">
</head>
<body>

    <div class="header">
        <div class="info">
            <div class="group">{{name}}</div>
            <div class="scheduleType">{{weekNumber}}</div>
        </div>
        <div class="dateBlock"></div>
    </div>
    <div class="blockWithScheduleBlocks"></div>
    <div class="footer">
        <div class="schedule">
            <a href="schedule.php" class="">Расписание</a>
        </div>
        <div class="exam">
            <a href="exam.php" class="">Экзамены</a>
        </div>
        <div class="exit">
            <a href="vendor/logout.php" class="">Выход</a>
        </div>
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

    function todayWeekNumber() {
        let date = new Date();
        let startDate = new Date(date.getFullYear(), 0, 1);
        let days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
        let weekNumber = Math.ceil(days / 7);
        return this.date = (weekNumber%2) ? 'Знаменатель' : 'Числитель';
    }

    let id = String(getCookie('userId'));
    let work = String(getCookie('userWork'));
    let name = '';
    let weekNumber = todayWeekNumber();
    let weekNumberPart = '';

    if (weekNumber === 'Числитель') {
        weekNumberPart = 'Числ. 1 раз в месяц';
    } else if (weekNumber === 'Знаменатель') {
        weekNumberPart = 'Знам. 1 раз в месяц';
    }

    if (work === 'student') {
        for (let pair of studentList.entries()) {
            if (pair[0] == id) {
                name = pair[1];
            }
        }
    } else if (work === 'teacher') {
        for (let pair of teacherList.entries()) {
            if (pair[0] == id) {
                name = pair[1];
            }
        }
    }

    let app = new Vue({
        el: '.info',
        data: {
            name: name,
            weekNumber: weekNumber,
        }
    })


        $('.resultBlock').remove()
        $('.nullResult').remove()


        if (work == 'student') {
            $.ajax({
                url: 'http://134.0.107.94:9110/exam/group/' + id,
                type: 'GET',
                success: function (result) {


                    let resNumber = 0;
                    let res = result.data

                    console.log(res)


                    for (let key in res) {

                        let div = document.createElement('div');
                        div.classList.add('resultBlock');

                        let divLessonName = document.createElement('div')
                        divLessonName.classList.add('lessonName');
                        divLessonName.innerHTML = res[key].discipline;

                        let divTimeStart = document.createElement('div')
                        divTimeStart.classList.add('timeStart');
                        divTimeStart.innerHTML = res[key].date.day;


                        let divTimeEnd = document.createElement('div')
                        divTimeEnd.classList.add('timeEnd');
                        if (res[key].date.time !== null) {
                            divTimeEnd.innerHTML = res[key].date.time.start.slice(0, -3);
                        }

                        let divLessonType = document.createElement('div')
                        divLessonType.classList.add('lessonType');
                        divLessonType.innerHTML = res[key].type;

                        let divAudience = document.createElement('div')
                        divAudience.classList.add('audience');
                        divAudience.innerHTML = res[key].auditorium;

                        let divTeacherName = document.createElement('div')
                        divTeacherName.classList.add('teacherName');
                        if (res[key].teacher == null ) {
                            console.log('ok')
                        } else if (res[key].teacher.value == '') {
                            divTeacherName.innerHTML = 'Преподаватель не определен'
                        } else {
                            divTeacherName.innerHTML = res[key].teacher.value;
                        }



                        div.append(divLessonName);
                        div.append(divTimeStart);
                        div.append(divTimeEnd);
                        div.append(divLessonType);
                        div.append(divAudience);
                        div.append(divTeacherName);
                        $('.blockWithScheduleBlocks').append(div);

                        resNumber++
                    }
                    if (resNumber === 0) {
                        let div = document.createElement('div')
                        div.classList.add('nullResult');
                        div.innerHTML = 'Экзаменов нет';
                        $('.blockWithScheduleBlocks').append(div);
                    }
                }
            });
        } else {
            $.ajax({
                url: 'http://134.0.107.94:9110/exam/teacher/' + id,
                type: 'GET',
                success: function (result) {


                    let resNumber = 0;
                    let res = result.data

                    console.log(res)


                    for (let key in res) {

                        let div = document.createElement('div');
                        div.classList.add('resultBlock');

                        let divLessonName = document.createElement('div')
                        divLessonName.classList.add('lessonName');
                        divLessonName.innerHTML = res[key].discipline;

                        let divTimeStart = document.createElement('div')
                        divTimeStart.classList.add('timeStart');
                        divTimeStart.innerHTML = res[key].date.day;


                        let divTimeEnd = document.createElement('div')
                        divTimeEnd.classList.add('timeEnd');
                        if (res[key].date.time !== null) {
                            divTimeEnd.innerHTML = res[key].date.time.start.slice(0, -3);
                        }

                        let divLessonType = document.createElement('div')
                        divLessonType.classList.add('lessonType');
                        divLessonType.innerHTML = res[key].type;

                        let divAudience = document.createElement('div')
                        divAudience.classList.add('audience');
                        divAudience.innerHTML = res[key].auditorium;

                        let divTeacherName = document.createElement('div')
                        divTeacherName.classList.add('teacherName');
                        if (res[key].group == null) {
                            console.log('ok')
                        } else if (res[key].group.value == '') {
                            divTeacherName.innerHTML = 'Группа не определена'
                        } else {
                            divTeacherName.innerHTML = res[key].group.value;
                        }


                        div.append(divLessonName);
                        div.append(divTimeStart);
                        div.append(divTimeEnd);
                        div.append(divLessonType);
                        div.append(divAudience);
                        div.append(divTeacherName);
                        $('.blockWithScheduleBlocks').append(div);

                        resNumber++
                    }
                    if (resNumber === 0) {
                        let div = document.createElement('div')
                        div.classList.add('nullResult');
                        div.innerHTML = 'Экзаменов нет';
                        $('.blockWithScheduleBlocks').append(div);
                    }
                }
            });
        }

</script>

</body>
</html>
