<template>
  <div>
    Добавить расписание МАДИ на ваш экран?

    <button @click="installPWA">
      Установить
    </button>

    <button @click="dismissPrompt">
      Нет, спасибо
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    shown: false,
  }),

  created() {
    window.addEventListener('beforeInstallPrompt', (e) => {
      e.preventDefault()
      this.installEvent = e
      this.shown = true
    })
  },

  methods: {
    dismissPrompt() {
      this.shown = false
    },

    installPWA() {
      this.installEvent.prompt()
      this.installEvent.userChoice.then((choice) => {
        this.dismissPrompt()
        if (choice.outcome === 'accepted') {
        } else {
        }
      })
    },
  }
}
</script>

<style>

</style>