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

    <template>
      <div class="columns">
        <div class="hiddenWord">
          <span v-if="state.isGameOver"> {{ state.word }}</span>
          <span v-else> {{ hiddenWord() }}</span>
        </div>
        <div>
          <img :src="hangmanImage" />
        </div>
      </div>
    </template>

    <div v-if="state.isGameOver" class="gameOver">
      <span v-if="state.won">WooHoo!! You won!</span>
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
        isGameOver: false,
        won: false
      },
      wordList: ["grit", "creativity", "impact", "diversity", "trust"],
      hangmanImage: "",
      MAX_MISSES: 10
    };
  },
  methods: {
    newGame() {
      this.initialize();
      let self = this;
      window.addEventListener("keypress", function(e) {
        let letter = e.key.toLowerCase();
        if (letter.toUpperCase == letter.toLowerCase) return;
        self.addLetter(letter);
      });
    },
    initialize() {
      this.state.word = this.pickWord();
      this.state.misses = 0;
      this.state.isGameOver = false;
      this.state.won = false;
      this.state.pickedLetters = [];
      this.hangmanImage = this.hangman();
      console.log(this.state.word);
    },
    pickWord() {
      return this.wordList[Math.floor(Math.random() * this.wordList.length)];
    },

    turnEnd(letter) {
      if (this.state.word.indexOf(letter) == -1){
        this.state.misses++;
        this.hangman();
      }
      if (this.hiddenWord() == this.state.word) this.gameOver((won = true));
      if (this.state.misses == this.MAX_MISSES) this.gameOver((won = false));
    },

    hiddenWord() {
      let secretWord = "";
      for (let i = 0; i < this.state.word.length; i++) {
        let char = this.state.word.charAt(i);
        if (this.state.pickedLetters.indexOf(char) == -1) secretWord += "_";
        else secretWord += char;
      }
      return secretWord;
    },

    addLetter(letter) {
      if (this.state.pickedLetters.indexOf(letter) >= 0) return;
      this.state.pickedLetters.push(letter);
      this.state.pickedLetters.sort();
      this.turnEnd(letter);
    },

    gameOver(won) {
      this.state.isGameOver = true;
      this.state.won = won;
    },
    hangman() {
      return "images/t" + this.state.misses + ".jpg";
    }
  },
  beforeMount() {
    this.newGame();
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
