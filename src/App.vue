<template>
    <SelectWork v-if="!authCookieWork"></SelectWork>
    <SelectId v-else-if="!authCookieId"></SelectId>
    <div v-else>
      <Header></Header>
      <MainBlock></MainBlock>
      <LogoutButton></LogoutButton>
    </div>
</template>

<script>
    import Header from "./components/blocks/Header.vue";
    import MainBlock from "@/components/blocks/MainBlock.vue";
    import SelectWork from "@/components/blocks/SelectWork.vue";
    import SelectId from "@/components/blocks/SelectId.vue";
    import LogoutButton from "@/components/buttons/LogoutButton.vue";

    import {Cookie} from "@/assets/Cookie";

    export default {
      data() {
        return {
          authCookieWork: '',
          authCookieId: ''
        }
      },
      name: 'App',
      components: {
        MainBlock,
        Header,
        SelectWork,
        SelectId,
        LogoutButton
      },
      created() {
        this.authCookieWork = Cookie.getCookie('userWork')
        this.authCookieId = Cookie.getCookie('userId')
      }
    }
</script>

<style>

</style>