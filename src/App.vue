<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { ref } from 'vue';

const myText = ref('')
const { copy } = useClipboard({ source: myText })
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Message message="hello :)" id="myMessage" />
  <input v-model="myText" />
  <Redbutton @click="copy">to clipboard</Redbutton>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
