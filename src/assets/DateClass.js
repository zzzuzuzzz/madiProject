class DateClass {

    static weekType() {
        let date = new Date();
        let startDate = new Date(date.getFullYear(), 0, 1);
        let days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
        let weekNumber = Math.ceil(days / 7);
        return (weekNumber%2) ? 'Знаменатель' : 'Числитель';
    }

    static getWeekDay(date) {
        let days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
        return days[date.getDay() - 1];
    }

    static getWeekFullDay(date) {
        let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
        return days[date.getDay() - 1];
    }
}

export { DateClass }