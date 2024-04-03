<script>
import { DateClass } from "@/assets/DateClass";

export default {
    data() {
      return {
        weekDays: new Map ([
          ['Пн', 0],
          ['Вт', 1],
          ['Ср', 2],
          ['Чт', 3],
          ['Пт', 4],
          ['Сб', 5],
          ['Вс', 6]
        ]),
        today: '',
        array: [],
        weekNumberInt: 0
      }
    },
    methods: {
      viewDays() {
        let days = document.querySelectorAll('.day')
        for (let day of days) {
          day.remove()
        }
        if (this.weekNumberInt === 0) {
          this.today = DateClass.getWeekDay(new Date())
        } else {
          this.today = ''
        }
        let daysByWeekNumber = DateClass.dateByWeekNumber(new Date().getFullYear(), DateClass.getWeekNumber() + this.weekNumberInt)
        let num = 0;
        for (let el of this.weekDays) {
          el[1] = daysByWeekNumber[num]
          num++
          this.array.push(el)
        }
      },
      switchWeek(dir) {
        if (dir === 'left') {
          this.weekNumberInt--
        } else {
          this.weekNumberInt++
        }
        DateClass.week = this.weekNumberInt
        this.viewDays()
      }
    },
    created() {
      this.viewDays()
    },
  }
</script>

<template>
  <div class="left"
       @click="switchWeek('left')"
  ><=</div>

  <div class="day"
       v-for="element in array"
       v-bind:class="{ today: element[0] === today}"
       :id="element[1]"
  >{{element[0]}}<br>{{element[1]}}</div>

  <div class="right"
       @click="switchWeek('right')"
  >=></div>
</template>

<style scoped>
.day {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-size: 2.5vh;
  padding: 3px;
}
.today {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
}
.selectDayClass {
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 15px;
}
</style>