<template>
  <input type="button" @click="logout" class="logoutButton" value="Выйти">
</template>

<script>
import { Cookie } from "@/assets/Cookie";

export default {
    methods: {
      logout() {
        Cookie.deleteCookie('userWork')
        Cookie.deleteCookie('userId')
        Cookie.deleteCookie('userName')
        document.location.reload()
      }
    }
  }
</script>

<style scoped>
  .logoutButton {
    width: 100%;
    text-align: center;
    height: 40px;
    border: transparent;
    background: transparent;
    font-size: 2.5vh;
    //color: white;
  }
</style>