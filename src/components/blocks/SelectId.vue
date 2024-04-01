<template>
  <div class="container">
    <div class="selectBlock">
      <Input
        :placeholder-text = 'placeholder'
      ></Input>
      <Button v-for="element in array"
              :background = 'background'
              :value-text = 'element.value'
              :id-text = 'element.id'
      ></Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/buttons/Button.vue";
import { Cookie } from "@/assets/Cookie";
import { API } from "@/assets/API";
import Input from "@/components/buttons/Input.vue";


export default {
  components: {Input, Button},
  data() {
    return {
      array: [],
      newArray: [],
      background: '',
      placeholder: ''
    }
  },
  created() {
    let work = Cookie.getCookie('userWork');

    work === 'Студент' ? (work = 'group') && (this.placeholder = 'Выберете свою группу'): (work = 'teacher') && (this.placeholder = 'Выберете себя')

    let api = new API('/' + work +'/');
    api.get().then(
        (data) => {
          this.array = data.data
        }
    )

    this.background = 'background: rgba(0, 0, 0, 0.19); border: transparent'
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
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background: rgba(255, 255, 255, 0.192);
  backdrop-filter: blur(50px);
  border-radius: 15px;
  overflow: scroll;
}
</style>