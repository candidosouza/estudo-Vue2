new Vue({
  el: "#desafio",
  data: {
    name: "Candido Souza",
    age: 40,
    srcImg: 'https://br.vuejs.org/images/logo.png',
  },
  methods: {
      numberRand: function() {
          return Math.random();
      }
  }
});
