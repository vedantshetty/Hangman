<template>
  <div id="app">
    <h1>Hangman</h1>
    <div class="instructions">
      <h2>How to play?</h2>
      <p>
        Type the letters into your keyboard to guess the word. But Remember!
        Every incorrect letter brings you closer to losing the game and your
        head...
      </p>
    </div>

    <div class="columns">
      <div class="hiddenWord">
        <span v-if="isGameOver"> {{ word }}</span>
        <span v-else> {{ hiddenWord }}</span>
      </div>
      <div>
        <!-- Add Image -->
      </div>
    </div>

    <div v-if="isGameOver" class="gameOver">
      <span v-if="won">WooHoo!! You won!</span>
      <span v-else>Sorry, try again next time.</span>
      <button @click="newGame">Play Again</button>
    </div>
  </div>
</template>

<script>
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
