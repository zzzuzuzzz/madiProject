<template>
  <div class="container">
    <div class="selectBlock">
      <p>Кто Вы?</p>
      <div class="buttonBlock" v-for="element in array">
        <Button
            :value-text="element"
            :background="background"
        ></Button>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from "@/components/buttons/Button.vue";

  export default {
    components: {Button},
    data() {
      return {
        array: ['Студент', 'Преподователь'],
        background: 'background-color: #0085FF'
      }
    }
  }

</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .selectBlock {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 10px 10px 10px;
    background: rgba(255, 255, 255, 0.192);
    backdrop-filter: blur(50px);
    border-radius: 15px;
  }
  .buttonBlock {
    width: 100%;
    height: 100%;
  }
  p {
    height: 20px;
  }
</style>