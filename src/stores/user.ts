import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: 'Sacha'
  }),
  actions: {
    greetUser() {
      console.log(this.userGreeting)
    }
  },
  getters: {
    userGreeting(state) {
      return `Hello ${state.user}`
    }
  }
})