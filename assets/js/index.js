let msg = '';
let app = new Vue({
    el: '#errorField',
    data: {
        msg: msg,
        seen: false
    }
})

$('.goToSingUp').click(function () {
    app.msg = 'Данная функция пока не доступна. Пожалуйста, подождите немного, скоро мы ее сделаем!';
    app.seen = true
})
$('.btnSingIn').click(function (e) {
    e.preventDefault()
    app.msg = 'Данная функция пока не доступна. Пожалуйста, подождите немного, скоро мы ее сделаем!';
    app.seen = true
})
$('.btnToJustSchedule').click(function () {
    document.location.href = 'whoAreYou.php'
})