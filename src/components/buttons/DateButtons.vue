<template>
  <div class="dateBlock">{{days}}</div>
</template>

<script>
  export default {
    data() {
      return {
        days: '',
      }
    },
    created() {
      let weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
      let i = 0
      for (i; i<7; i++) {
        let div = document.createElement('div');
        div.id = i;
        if (i === (new Date()).getDay() - 1) {
          div.classList.add('today');
          div.classList.add('selectDay');
        } else {
          div.classList.add('anotherDay');
        }
        div.classList.add('day');
        div.innerHTML = weekDays[i];
        return append(div)
      }
      this.days.append(div)
    }
  }
</script>

<style scoped>
.dateBlock {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.today, .anotherDay {
  width: 50%;
  height: 70%;
  text-align: center;
  padding: 2px;
}
.today {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(50px);
  border-radius: 5px;
}
.selectDay {
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
}
</style>