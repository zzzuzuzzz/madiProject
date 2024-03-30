<template>
  <div class="day"
       v-for="weekDay in weekDays"
       v-bind:class="{ today: weekDay === today}"
  >{{weekDay}}</div>
</template>

<script>
import { DateClass } from "@/assets/DateClass";

export default {
    data() {
      return {
        weekDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        today: ''
      }
    },
    created() {
      this.today = DateClass.getWeekDay(new Date())
    }
  }
</script>

<style scoped>
.day {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2.5vh;
  padding: 3px;
}
.today {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 15px;
}
</style>