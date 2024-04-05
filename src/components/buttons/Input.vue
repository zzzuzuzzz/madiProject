<template>
  <input type="search" :placeholder="placeholderText" >
<!--  :v-model="query"-->
</template>

<script>

export default {
  props: ['placeholderText', 'query'],
}
</script>

<style scoped>
input {
  width: 95%;
  height: 40px;
  margin: 5px;
  border-radius: 5px;
  border: transparent;
  background: rgba(0, 0, 0, 0.19);
  font-size: 2.5vh;
  //color: white;
}
input::-moz-placeholder {
  color: antiquewhite;
}
input::-webkit-input-placeholder {
  color: antiquewhite;
}
</style>