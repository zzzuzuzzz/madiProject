<template>
  <div class="header">
    <div class="info">
      <HeaderInfo></HeaderInfo>
    </div>
  </div>

</template>

<script>
  import HeaderInfo from "@/components/labels/HeaderInfo.vue";

  export default {
    components: {
      HeaderInfo,
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
</style>