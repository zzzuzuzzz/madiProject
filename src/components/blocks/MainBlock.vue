<template>
  <div class="blockWithScheduleBlocks">
    <ScheduleBlock></ScheduleBlock>
  </div>
</template>

<script>
import ScheduleBlock from "@/components/blocks/ScheduleBlock.vue";

export default {
  components: {ScheduleBlock}
}
</script>

<style scoped>
  .blockWithScheduleBlocks {
    width: 100%;
    height: 80vh;
    overflow: scroll;
  }
</style>