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
        misses: 0,
        gameOver: false,
        won: false
      },
      wordList: ["grit", "creativity", "impact", "diversity", "trust"]
    },
    methods: {
      initialize: function(word) {
        state.word = word;
        state.misses = 0;
        state.gameOver = false;
        state.won = false;
        state.pickedLetters = [];
      },

      addLetter: function(letter) {
        // Letter already added
        if (state.pickedLetters.indexOf(letter) >= 0) return;

        state.pickedLetters.push(letter);
        state.pickedLetters.sort();

        if (state.word.indexOf(letter) == -1) state.misses++;
      },

      isGameOver: function(won) {
        state.gameOver = true;
        state.won = won;
      },
      setWords: function(state, words) {
        state.words = words;
      },

      hangman: function() {
        let image = "images/t" + state.misses + ".jpg";
        return image;
      },
      hiddenWord: function() {
        let secretWord = "";
        for (let i = 0; i < state.word.length; i++) {
          let char = state.word.charAt(i);
          if (state.pickedLetters.indexOf(char) == -1) secretWord += "_";
          else secretWord += char;
        }
        return secretWord;
      },
      pickWord: function() {
        if (state.words.length == 0)
          initialize(wordList[Math.floor(Math.random() * wordList.length)]);
      },

      guess: function(letter) {
        addLetter(letter);
        if (hiddenWord() == state.word) isGameOver(true);
        if (state.misses == MAX_MISSES) isGameOver(false);
      },
      takeGuess: function() {
        let character = String.fromCharCode(e.keycode).toLowerCase();
        if (character.toUpperCase == character.toLowerCase) return;
        guess(letter);

      },
      newGame: function() {
        pickWord();
        window.addEventListener("keypress", takeGuess);
      }
    }, //End of methods
    create() {
      newGame();
    }
  }); // End of vue
}); // End of window listener
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
