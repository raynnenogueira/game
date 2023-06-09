const app = new Vue({
  el: "#app",
  data: {
    frutas: [
      "maçã",
      "banana",
      "laranja",
      "uva",
      "abacaxi",
      "acerola",
      "manga",
      "graviola",
      "tangerina",
      "maracuja",
      "kiwi",
      "mamao",
      "cereja",
      "amora",
      "limao",
      "ameixa"
    ],
    frutaSelecionada: "",
    tentativaJogador: "",
    dica: "",
    resultado: "",
    quantidadeErros: 0,
    letrasReveladas: 0
  },

  methods: {

    // aqui ele vai gerar uma fruta aleatoria
    frutaAleatoria() {
      const randomIndex = Math.floor(Math.random() * this.frutas.length);
      this.frutaSelecionada = this.frutas[randomIndex];
    },

    // verificar se voce acertou ou errou
    verificarTentativa() {
      if (this.tentativaJogador.toLowerCase() === this.frutaSelecionada.toLowerCase()) {
        this.resultado = "Parabéns! Você acertou!";
      } else {
        this.resultado = "Você errou. Tente novamente.";
        this.quantidadeErros++;

        // se errar mais de 3 vezes, ira começar a revelar algumas letras da palavra
        if (this.quantidadeErros >= 3 && this.letrasReveladas < this.frutaSelecionada.length) {
          this.letrasReveladas++;
        }
      }
      this.mostrarDica();
    },

    // ira mostrar a dica
    mostrarDica() {
      let dica = "";
      for (let i = 0; i < this.frutaSelecionada.length; i++) {
        if (this.frutaSelecionada[i] === " " || i < this.letrasReveladas) { 
          dica += this.frutaSelecionada[i];
        } else {
          dica += "_";
        }
      }
      this.dica = `Dica: ${dica} (${this.frutaSelecionada.length} letras)`;
    }
  },

  mounted() {
    this.frutaAleatoria();
    this.mostrarDica();
  }
});
