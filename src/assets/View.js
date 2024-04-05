import {DateClass} from "@/assets/DateClass";

class View {

    static viewScheduleByDay(el, firstArray, secondArray, week) {
        let today = DateClass.getWeekFullDay(new Date())
        let weekType = DateClass.weekType(week)
        let len = firstArray.length
        let num = 0

        if (el) {
            switch (el) {
                case 'Пн':
                    today = 'Понедельник';
                    break
                case 'Вт':
                    today = 'Вторник';
                    break
                case 'Ср':
                    today = 'Среда';
                    break
                case 'Чт':
                    today = 'Четверг';
                    break
                case 'Пт':
                    today = 'Пятница';
                    break
                case 'Сб':
                    today = 'Суббота';
                    break
                case 'Вс':
                    today = 'Воскресенье'
            }
        }

        for (len; len>0; len-- && num++) {
            if (firstArray[num].weekday === today) {
                if (firstArray[num].date.friequency === 'Числ. 1 раз в месяц' || firstArray[num].date.friequency === 'Знам. 1 раз в месяц' || firstArray[num].date.friequency === weekType || firstArray[num].date.friequency === 'Еженедельно') {
                    if (firstArray[num].discipline !== 'Полнодневные занятия') {
                        secondArray.push(firstArray[num])
                    }
                }
            }
        }
    }

}

export { View }