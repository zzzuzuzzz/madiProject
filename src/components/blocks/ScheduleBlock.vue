<script>
  import { DateClass } from "@/assets/DateClass";
  import { View } from "@/assets/View";
  import { Cookie } from "@/assets/Cookie";
  import { API } from "@/assets/API";
  import DateButtons from "@/components/buttons/DateButtons.vue";

  export default {
    data() {
      return {
        results: '',
        todayResult: [],
        work: ''
      }
    },
    created() {
      let id = Cookie.getCookie('userId');
      let work = 'group';
      Cookie.getCookie('userWork') === 'Студент' ? work = 'group' : work = 'teacher';
      work === 'group' ? this.work = '.teacher.value' : this.work = '.group.value';
      let api = new API('/schedule/' + work + '/' + id);
      api.get().then(
          (data) => {
            this.results = data.data
          }
      )
          .then(
              () => {
                View.viewScheduleByDay(null, this.results, this.todayResult, 0)
              }
          )
          .then(
              () => {
                let one = this.results
                let two = this.todayResult
                document.addEventListener('click', function (e) {
                  if (e.target.className === 'day' || e.target.className === 'day today') {
                    DateClass.selectDay(e)
                    let posts = document.querySelectorAll('.result')
                    for (let post of posts) {
                      post.remove()
                    }
                    View.viewScheduleByDay(e.target.textContent.substring(0, 2), one, two, DateClass.week)
                  }
                })
              }
          )
    },
    components: DateButtons
  }

</script>

<template>
  <div class="result"
    v-if="todayResult[0] === null"
  >
    В этот день не занятий
  </div>
  <div class="result"
       v-for="result in todayResult"
  >
    <div class="lessonName">{{ result.discipline }}</div> <!-- Название занятия -->

    <div class="lessonStart" v-if="result.date.time !== null">{{ result.date.time.start.slice(0, -3) }}</div> <!-- Начало занятия -->
    <div class="lessonEnd" v-if="result.date.time !== null">{{ result.date.time.end.slice(0, -3) }}</div> <!-- Конец занятия -->

    <div class="lessonType" v-if="result.type === 'Практические занятия /семинар/'">Семинар</div>
    <div class="lessonType" v-else>{{ result.type }}</div> <!-- Тип занятия -->

    <div class="lessonFrequency">{{ result.date.friequency }}</div> <!-- Переодичность занятий-->

    <div class="lessonAuditorium" v-if="result.auditorium !== null">{{ result.auditorium }}</div> <!-- Аудитория -->

    <div class="lessonGuest" v-if="result.teacher.value !== null">{{ result.teacher.value }}</div> <!-- Преподователь/группа -->
    <div class="lessonGuest" v-else-if="result.group.value !== null">{{ result.group.value }}</div>
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
  grid-template-columns: 1fr 3fr 2fr;
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
.lessonFrequency {
  grid-row: 3;
  grid-column: 3;
  text-align: right;
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