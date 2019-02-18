new Vue({
  el: "#app",
  data: {
    //?Initialize our list of 'ingredients'
    textInput: ""
  },
  computed: {
    // ?Turn data into viewable values
    identicon() {
      return jdenticon.toSvg(this.textInput, 200);
    }
  },
  methods: {
    // ?Use these functions to change data
    onInput(event) {
      this.textInput = event.target.value;
    }
  }
});

// !NOTES:
// * Data = Defines the 'initial state' of our Vue instance.
// * Methods = Defines the different ways our state can change
// * Computed = Defines how to turn the current data into viewable values

/*
--------------
-//* DATA    - // -> How everything starts.
--------------
--------------
-//* METHODS - // -> Changes data.
--------------
----------------
-//* COMMPUTED - // -> Turns data into viewable stuff.
----------------
*/
