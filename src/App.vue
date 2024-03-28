<template>
  <Header></Header>
  <MainBlock></MainBlock>
</template>

<script>
    import Header from "./components/blocks/Header.vue";
    import MainBlock from "@/components/blocks/MainBlock.vue";

    export default {
      name: 'App',
      components: {
        MainBlock,
        Header
      }
    }
</script>

<style>

</style>