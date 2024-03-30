<template>
  <div class="result"
       v-for="result in results"
  >
    <div class="lessonName">{{ result.discipline }}</div>
<!--    <div class="lessonStart">{{ result.date.time.start }}</div>-->
<!--    <div class="lessonEnd">{{ result.date.time.end }}</div>-->
    <div class="lessonType">{{ result.type }}</div>
    <div class="lessonType">{{ result.auditorium }}</div>
<!--    <div class="lessonGuest">{{ result.teacher.value }}</div>-->
  </div>
</template>

<script>
  import { DateClass } from "@/assets/DateClass";
  import { Cookie } from "@/assets/Cookie";
  import { API } from "@/assets/API";

  export default {
    data() {
      return {
        results: '',
        discipline: '',
        start: '',
        end: '',
        type: '',
        auditorium: '',
        value: ''
      }
    },
    created() {
      let id = Cookie.getCookie('userId')
      let api = new API('/schedule/group/' + id);
      api.get().then(
          (data) => {
            console.log(data.data)
            this.results = data.data
            // console.log(data.data[0].date.time.start)
          }
      )
    }
  }
</script>

<style scoped>

</style>