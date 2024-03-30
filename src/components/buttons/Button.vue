<template>
  <input type="submit" :value="valueText" :class="classText" :id="idText" @click="selectValue" :style="background">
</template>

<script>
import { Cookie } from "@/assets/Cookie";

export default {
    props: ['valueText', 'classText', 'idText', 'background'],
    methods: {
      selectValue() {
        let value = this.valueText;
        let id = this.idText;
        if (id === undefined) {
          Cookie.setCookie('userWork', value, {'max-age': 3600*24*30*12})
        } else {
          Cookie.setCookie('userId', id, {'max-age': 3600*24*30*12})
          Cookie.setCookie('userName', value, {'max-age': 3600*24*30*12})
        }
        document.location.reload()
      }
    }
  }
</script>

<style scoped>
  input {
    width: 100%;
    height: 40px;
    margin: 5px 0;
    border-radius: 5px;
    border: transparent;
    font-size: 2.5vh;
    color: white;
  }
</style>