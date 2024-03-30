<template>
  <div class="header">
    <div class="info">
      <HeaderInfo></HeaderInfo>
    </div>
    <div class="dateBlock">
      <DateButtons></DateButtons>
    </div>
  </div>

</template>

<script>
  import HeaderInfo from "@/components/labels/HeaderInfo.vue";
  import DateButtons from "@/components/buttons/DateButtons.vue";

  export default {
    components: {
      HeaderInfo,
      DateButtons
    }
  }
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.192);
  backdrop-filter: blur(50px);
}
.info {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.dateBlock {
  display: flex;
  margin-top: 10px;
}
</style>