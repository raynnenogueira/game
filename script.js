const app = new Vue({
    el: "#app",
    data: {
        frutas: ["maçã", 
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
        quantidadeErros: 0
    },

    methods: { 
        frutaAleatoria() { // Gera uma fruta aleatoriamente
            const randomIndex = Math.floor(Math.random() * this.frutas.length);
            this.frutaSelecionada = this.frutas[randomIndex];
        },

        verificarTentativa() {       // Verifica se a tentativa do jogador está correta e atualiza a contagem de erros, se necessário
            if (
                this.tentativaJogador.toLowerCase() ===
                this.frutaSelecionada.toLowerCase()
            ) {
                this.resultado = "Parabéns! Você acertou!";
            } else {
                this.resultado = "Você errou. Tente novamente.";
                this.quantidadeErros++;
            }
        },

        mostrarDica() {  // Cria a dica 
            let dica = "";
            for (let i = 0; i < this.frutaSelecionada.length; i++) {
                if (this.frutaSelecionada[i] === " ") {
                    dica += " ";
                } else {
                    dica += "_";
                }
            }
            this.dica = `Dica: ${dica} (${this.frutaSelecionada.length} letras)`;
        },
    },
    
    mounted() {     // Ao montar o componente Vue, gera uma fruta aleatória e exibe a dica
        this.frutaAleatoria();
        this.mostrarDica();
    },
});