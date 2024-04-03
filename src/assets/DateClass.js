class DateClass {

    static week = 0;

    static weekType(value) {
        let date = new Date();
        let startDate = new Date(date.getFullYear(), 0, 1);
        let days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
        let weekNumber = Math.ceil(days / 7);
        return ((value + weekNumber)%2) ? 'Знаменатель' : 'Числитель';
    }

    static getWeekDay(date) {
        let days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
        return days[date.getDay() - 1];
    }

    static getWeekFullDay(date) {
        let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
        return days[date.getDay() - 1];
    }

    static dateByWeekNumber = (year, week) => {
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

    static getWeekNumber = () => {
        let date = new Date();
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        let week1 = new Date(date.getFullYear(), 0, 4);
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    }

    static selectDay(el) {
        let selectedDay = document.querySelector('.selectDayClass')
        if (selectedDay) {
            selectedDay.classList.remove('selectDayClass')
        }
        if (el) {
            el.target.classList.add('selectDayClass')
        }
    }
}

export { DateClass }