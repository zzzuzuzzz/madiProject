<template>
  <div class="group">{{name}}</div>
  <div class="scheduleType">{{weekNumber}}</div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      weekNumber: ''
    }
  },
  created() {
    function getCookie(name) {
      let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    this.name = (!getCookie('userName')) ? 'группа не выбрана' : getCookie('userName')
    function weekType() {
      let date = new Date();
      let startDate = new Date(date.getFullYear(), 0, 1);
      let days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
      let weekNumber = Math.ceil(days / 7);
      return (weekNumber%2) ? 'Знаменатель' : 'Числитель';
    }
    this.weekNumber = weekType()
  }
}
</script>

<style>
  .group, .scheduleType {
    margin: 5px;
    font-size: 3vh;
  }
</style>