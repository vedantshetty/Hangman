<template>
  <div id="app">
    <h1>Hangman</h1>
    <div class ='instructions'>
      <h2>How to play?</h2>
      <p> Type the letters into your keyboard to guess the word. But Remember! 
      Every incorrect letter brings you closer to losing the game and your head...</p>
    </div>

    <div class = "columns">
      <div class = "hiddenWord">
        <span v-if="isGameOver"> {{word}}</span>
        <span v-else> {{hiddenWord}}</span>
      </div>
    
    <!-- Add Image -->
    </div>


    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
