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

    <template v-if ="initialize()">
      <div class="columns">
        <div class="hiddenWord">
          <span v-if="isGameOver"> {{ word }}</span>
          <span v-else> {{ hiddenWord }}</span>
        </div>
        <div>
          <img :src="hangman" />
        </div>
      </div>
    </template>

    <div v-if="isGameOver" class="gameOver">
      <span v-if="won">WooHoo!! You won!</span>
      <span v-else>Sorry, try again next time.</span>
    </div>
    <button @click="newGame">Play Again</button>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
export default {
  name: "app",
  data: function() {
    return {
      state: {
        word: "",
        pickedLetters: [],
        misses: 0,
        gameOver: false,
        won: false
      },
      wordList: ["grit", "creativity", "impact", "diversity", "trust"]
    };
  },
  methods: {
    newGame() {
      console.log("New Game Works");
    },
    initialize() {
      this.state.word = this.pickWord();
      this.state.misses = 0;
      this.state.gameOver = false;
      this.state.won = false;
      this.state.pickedLetters = [];
      console.log(this.state.word);
    },
    pickWord() {
      return this.wordList[Math.floor(Math.random() * this.wordList.length)];
    }
  }
}; // End of vue
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
