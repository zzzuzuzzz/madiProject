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
    <title>Расписание</title>
    <link rel="stylesheet" href="assets/css/schedule.css">
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

        Date.prototype.getWeek = function() {
            let date = new Date(this.getTime());
            date.setHours(0, 0, 0, 0);
            date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
            let week1 = new Date(date.getFullYear(), 0, 4);
            return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
        }

        const dateByWeekNumber = (year, week) => {
            const date = new Date(year, 0, 7);
            let array = []
            date.setDate(date.getDate() - (date.getDay() + 10) % 7);
            date.setDate(date.getDate() + (week - 1) * 7);
            array.push(new Date(date.setDate(date.getDate() - 3)).getDate());
            array.push(new Date(date.setDate(date.getDate() + 1)).getDate());
            array.push(new Date(date.setDate(date.getDate() + 1)).getDate());
            array.push(new Date(date.setDate(date.getDate() + 1)).getDate());
            array.push(new Date(date.setDate(date.getDate() + 1)).getDate());
            array.push(new Date(date.setDate(date.getDate() + 1)).getDate());
            array.push(new Date(date.setDate(date.getDate() + 1)).getDate());
            return array;
        };

        let todayWeek = dateByWeekNumber(new Date().getFullYear(), new Date().getWeek())

        let weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
        let weekDaysFull = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
        let weekDay = weekDaysFull[new Date().getDay() - 1];
        let i = 0;
        let timePoint = 0;

        let divLeft = document.createElement('div');
        divLeft.classList.add('left');
        divLeft.innerHTML = '<=';
        document.querySelector('.dateBlock').append(divLeft);

        for (i; i<7; i++) {
            let div = document.createElement('div');
            div.id = i;
            if (i == (new Date()).getDay() - 1) {
                div.classList.add('today');
                div.classList.add('selectDay');
            } else {
                div.classList.add('anotherDay');
            }
            div.classList.add('day');
            div.innerHTML = weekDays[i];
            document.querySelector('.dateBlock').append(div);
        }

        let divRight = document.createElement('div');
        divRight.classList.add('right');
        divRight.innerHTML = '=>';
        document.querySelector('.dateBlock').append(divRight);

        let g = 0
        for (g; g<7; g++) {
            let p = document.createElement('p');
            p.innerHTML = todayWeek[g];
            p.classList.add('dayNumber')
            $('#' + g).append(p);
        }

        function headerDays() {
            let divLeft = document.createElement('div');
            divLeft.classList.add('left');
            divLeft.innerHTML = '<=';
            document.querySelector('.dateBlock').append(divLeft);
            i=0

            for (i; i<7; i++) {
                let div = document.createElement('div');
                div.id = i;
                if (i == (new Date()).getDay() - 1) {
                    div.classList.add('today');
                    div.classList.add('selectDay');
                } else {
                    div.classList.add('anotherDay');
                }
                div.classList.add('day');
                div.innerHTML = weekDays[i];
                document.querySelector('.dateBlock').append(div);
            }

            let divRight = document.createElement('div');
            divRight.classList.add('right');
            divRight.innerHTML = '=>';
            document.querySelector('.dateBlock').append(divRight);


            if (timePoint !== 0) {
                todayWeek = dateByWeekNumber(new Date().getFullYear(), new Date().getWeek() + timePoint)
            } else if (timePoint === 0) {
                todayWeek = dateByWeekNumber(new Date().getFullYear(), new Date().getWeek())
            }

            g = 0
            for (g; g<7; g++) {
                let p = document.createElement('p');
                p.innerHTML = todayWeek[g];
                p.classList.add('dayNumber')
                $('#' + g).append(p);
            }
            console.log('end')
        }

        function viewSchedule(today) {
            $('.resultBlock').remove()
            $('.nullResult').remove()


            if (work == 'student') {
                $.ajax({
                    url: 'http://134.0.107.94:9110/schedule/group/' + id,
                    type: 'GET',
                    success: function (result) {


                        let resNumber = 0;
                        let res = result.data


                        for (let key in res) {


                            if (res[key].weekday == weekDaysFull[new Date(today).getDay() - 1]) {


                                if (res[key].date.friequency == weekNumber || res[key].date.friequency == 'Еженедельно' || res[key].date.friequency == weekNumberPart) {


                                    let div = document.createElement('div');
                                    div.classList.add('resultBlock');

                                    let divLessonName = document.createElement('div')
                                    divLessonName.classList.add('lessonName');
                                    divLessonName.innerHTML = res[key].discipline;

                                    let divTimeStart = document.createElement('div')
                                    divTimeStart.classList.add('timeStart');
                                    if (res[key].date.time !== null) {
                                        divTimeStart.innerHTML = res[key].date.time.start.slice(0, -3);
                                    }

                                    let divTimeEnd = document.createElement('div')
                                    divTimeEnd.classList.add('timeEnd');
                                    if (res[key].date.time !== null) {
                                        divTimeEnd.innerHTML = res[key].date.time.end.slice(0, -3);
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
                            }
                        }
                        if (resNumber === 0) {
                            let div = document.createElement('div')
                            div.classList.add('nullResult');
                            div.innerHTML = 'В этот день нет занятий!';
                            $('.blockWithScheduleBlocks').append(div);
                        }
                    }
                });
            } else {
                $.ajax({
                    url: 'http://134.0.107.94:9110/schedule/teacher/' + id,
                    type: 'GET',
                    success: function (result) {
                        let resNumber = 0;
                        let res = result.data
                        for (let key in res) {
                            if (res[key].weekday == weekDaysFull[new Date(today).getDay() - 1]) {
                                if (res[key].date.friequency == weekNumber || res[key].date.friequency == 'Еженедельно' || res[key].date.friequency == weekNumberPart) {
                                    let div = document.createElement('div');
                                    div.classList.add('resultBlock');

                                    let divLessonName = document.createElement('div')
                                    divLessonName.classList.add('lessonName');
                                    divLessonName.innerHTML = res[key].discipline;

                                    let divTimeStart = document.createElement('div')
                                    divTimeStart.classList.add('timeStart');
                                    divTimeStart.innerHTML = res[key].date.time.start.slice(0, -3);

                                    let divTimeEnd = document.createElement('div')
                                    divTimeEnd.classList.add('timeEnd');
                                    divTimeEnd.innerHTML = res[key].date.time.end.slice(0, -3);

                                    let divLessonType = document.createElement('div')
                                    divLessonType.classList.add('lessonType');
                                    divLessonType.innerHTML = res[key].type;

                                    let divAudience = document.createElement('div')
                                    divAudience.classList.add('audience');
                                    divAudience.innerHTML = res[key].auditorium;

                                    let divGroupName = document.createElement('div')
                                    divGroupName.classList.add('groupName');
                                    if (res[key].group.value == '') {
                                        divGroupName.innerHTML = 'Группа не определена'
                                    } else {
                                        divGroupName.innerHTML = res[key].group.value;
                                    }



                                    div.append(divLessonName);
                                    div.append(divTimeStart);
                                    div.append(divTimeEnd);
                                    div.append(divLessonType);
                                    div.append(divAudience);
                                    div.append(divGroupName);
                                    $('.blockWithScheduleBlocks').append(div);

                                    resNumber++
                                }
                            }
                        }
                        if (resNumber === 0) {
                            let div = document.createElement('div')
                            div.classList.add('nullResult');
                            div.innerHTML = 'В этот день нет занятий!';
                            $('.blockWithScheduleBlocks').append(div);
                        }
                    }
                });
            }
        }


        viewSchedule(new Date())


        $('.day').click(function () {
            document.getElementsByClassName("selectDay")[0].classList.remove('selectDay')
            this.classList.add('selectDay')
            let dayNumber = Number(this.querySelector('.dayNumber').textContent)
            let yearNumber = new Date().getFullYear()
            let monthNumber = new Date().getMonth()
            let newDate = new Date(yearNumber, monthNumber, dayNumber)
            viewSchedule(newDate)
        })

        $('.left').click(function () {
            $('.day').remove()
            $('.left').remove()
            $('.right').remove()

            timePoint--

            headerDays()
        });
        $('.right').click(function () {
            $('.day').remove()
            $('.left').remove()
            $('.right').remove()

            timePoint++

            headerDays()
        })

    </script>
</body>
</html>