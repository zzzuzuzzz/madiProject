<template>
  <div class="group">{{name}}</div>
  <div class="scheduleType">{{weekNumber}}</div>
</template>

<script>
import { DateClass } from "@/assets/DateClass";
import { Cookie } from "@/assets/Cookie";

export default {
  data() {
    return {
      name: '',
      weekNumber: ''
    }
  },
  created() {
    this.name = (!Cookie.getCookie('userName')) ? 'группа не выбрана' : Cookie.getCookie('userName')
    this.weekNumber = DateClass.weekType()
  }
}
</script>

<style>
  .group, .scheduleType {
    margin: 5px;
    font-size: 3vh;
  }
</style>