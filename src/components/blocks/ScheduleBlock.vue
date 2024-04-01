<script>
  import { DateClass } from "@/assets/DateClass";
  import { Cookie } from "@/assets/Cookie";
  import { API } from "@/assets/API";

  export default {
    data() {
      return {
        results: '',
        todayResult: []
      }
    },
    created() {
      let id = Cookie.getCookie('userId')
      let api = new API('/schedule/group/' + id);
      api.get().then(
          (data) => {
            this.results = data.data
          }
      )
          .then(
              () => {
                let today = DateClass.getWeekFullDay(new Date())
                let weekType = DateClass.weekType()
                let len = this.results.length
                let num = 0
                for (len; len>0; len-- && num++) {
                  if (this.results[num].weekday === today) {
                    if (this.results[num].date.friequency === weekType) {
                      this.todayResult.push(this.results[num])
                    }
                  }
                }
              }
          )
    }
  }
</script>

<template>
  <div class="result"
       v-for="result in todayResult"
  >
    <div class="lessonName">{{ result.discipline }}</div> <!-- Название занятия -->

    <div class="lessonStart">{{ result.date.time.start.slice(0, -3) }}</div> <!-- Начало занятия -->
    <div class="lessonEnd">{{ result.date.time.end.slice(0, -3) }}</div> <!-- Конец занятия -->

    <div class="lessonType" v-if="result.type === 'Практические занятия /семинар/'">Семинар</div>
    <div class="lessonType">{{ result.type }}</div> <!-- Тип занятия -->

    <div class="lessonAuditorium" v-if="result.auditorium === ''"></div> <!-- Аудитория -->
    <div class="lessonAuditorium" v-else>{{ result.auditorium }}</div>

    <div class="lessonGuest" v-if="!result.teacher.value"></div> <!-- Преподователь/группа -->
    <div class="lessonGuest" v-else>{{ result.teacher.value }}</div>
  </div>
</template>

<style scoped>
.result {
  background: rgba(0, 0, 0, 0.19);
  backdrop-filter: blur(50px);
  border-radius: 15px;
  padding: 10px;
  margin: 5px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
}

.lessonName {
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 3;
}
.lessonStart {
  grid-row: 1;
  grid-column: 3;
  text-align: right;
}
.lessonEnd {
  grid-row: 2;
  grid-column: 3;
  text-align: right;
}
.lessonType {
  grid-row: 3;
  grid-column-start: 1;
  grid-column-end: 3;
  margin-top: 1px;
  margin-bottom: 1px;
}
.lessonAuditorium {
  grid-row: 4;
  grid-column: 1;
  margin-top: 3px;
}
.lessonGuest {
  grid-row: 4;
  grid-column-start: 2;
  grid-column-end: 4;
  margin-top: 3px;
}
</style>