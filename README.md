# hangman

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### To-Do

 - Get App to work
 - Theme using demodesk colors
 - Update favicon and colors to demodesk style


## Methods

 #### Initialize
Initializes the state varaible and sets the word for the game

####hiddenWord
Converts the word to hidden format. Only displaying the characters guessed with '_' where they are not guessed

e.g: C_T

#### addLetter
adds the letter guessed by the user to state.pickedLetter if it has not already been guessed.

Also adds 1 to misses

#### isGameOver
ends the game.
