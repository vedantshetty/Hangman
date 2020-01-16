<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

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
        <img :src="hangman" />
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
window.addEventListener("load", function() {
  new Vue({
    el: "#hangman",
    data: {
      state: {
        word: "",
        pickedLetters: [],
        words: [],
        misses: 0,
        gameOver: false,
        won: false
      },
      wordList: ["grit", "creativity", "impact", "diversity", "trust"]
    },
    methods: {
      initialize: function(state, word) {
        state.word = word;
        state.misses = 0;
        state.gameOver = false;
        state.won = false;
        state.pickedLetters = [];
      },

      addLetter: function(state, letter) {
        // Letter already added
        if (state.pickedLetters.indexOf(letter) >= 0) return;

        state.pickedLetters.push(letter);
        state.pickedLetters.sort();

        if (state.word.indexOf(letter) == -1) state.misses++;
      },

      isGameOver: function(state, won) {
        state.gameOver = true;
        state.won = won;
      },
      setWords: function(state, words) {
        state.words = words;
      },

      hangman: function(state) {
        let image = "images/t" + state.misses + ".jpg";
        return image;
      },
      hiddenWord: function(state) {
        let hiddenWord = "";
        for (let i = 0; i < state.word.length; i++) {
          let char = state.word.charAt(i);
          if (state.pickedLetters.indexOf(char) == -1) hiddenWord += "_";
          else hiddenWord += char;
        }
        return hiddenWord;
      }
  }
  //End of
    });
    // End of vue
  });
  // End of window listener
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
