<template>
  <div class="row">
    <Header class="col-12" title="Locadora de Filmes" :quantidadeNoCarrinho="quantidadeNoCarrinho" />

    <div class="col-3" v-bind:key="filme.id" v-for="filme in filmesOrdenados">
      <div class="card">
        <img v-bind:src="filme.imagem" class="card-img-top" alt="imagem do filme" />
        <div class="card-body">
          <router-link
            tag="h5"
            class="card-title"
            :to="{ name: 'filme', params: { id: filme.id } }"
          >{{ filme.titulo }}</router-link>
          <p class="card-text" v-html="filme.descricao"></p>
          <span
            class="mensagem-estoque"
            v-if="filme.estoqueDisponivel - quantidadeNoCarrinhoPorFilme(filme) === 0"
          >Indisponível</span>
          <span
            class="mensagem-estoque"
            v-else-if="filme.estoqueDisponivel - quantidadeNoCarrinhoPorFilme(filme) < 5"
          >Apenas {{ filme.estoqueDisponivel - quantidadeNoCarrinhoPorFilme(filme) }} itens no estoque.</span>
          <span class="mensagem-estoque" v-else>Alugue agora!</span>
          <p class="card-text">{{ filme.valor | formatarPreco("R$") }}</p>
          <div class="avaliacao">
            <span
              v-for="n in 5"
              :key="n"
              v-bind:class="{ 'avaliacao-active': checarAvaliacao(n, filme) }"
            >
              <img src="../assets/star.png" height="20" />
            </span>
          </div>
          <a
            href="#"
            @click="adicionarAoCarrinho(filme)"
            v-if="validarPermissaoParaAdicionarNoCarrinho(filme)"
            class="btn btn-primary"
          >ALUGAR</a>
          <a href="#" v-else class="btn btn-primary disabled">ALUGAR</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";

export default {
  name: "my-main",
  components: {
    Header
  },
  data() {
    return {
      filmes: [
        {
          id: 1,
          titulo: "Vingadores",
          descricao: "Um <b>filme</b> de heróis",
          valor: 25,
          imagem: "assets/logo.png",
          estoqueDisponivel: 3,
          avaliacao: 2
        },
        {
          id: 2,
          titulo: "Pantera Negra",
          descricao: "Um filme de panteras",
          valor: 35,
          imagem: "assets/logo.png",
          estoqueDisponivel: 6,
          avaliacao: 3
        },
        {
          id: 3,
          titulo: "Homem-Formiga",
          descricao: "Um filme de formigas",
          valor: 20,
          imagem: "assets/logo.png",
          estoqueDisponivel: 2,
          avaliacao: 5
        },
        {
          id: 4,
          titulo: "Capitã Marvel",
          descricao: "Um filme de capitãs",
          valor: 40,
          imagem: "assets/logo.png",
          estoqueDisponivel: 8,
          avaliacao: 4
        },
        {
          id: 5,
          titulo: "Hulk",
          descricao: "Um filme de força",
          valor: 10,
          imagem: "assets/logo.png",
          estoqueDisponivel: 7,
          avaliacao: 1
        }
      ],
      carrinho: []
    };
  },
  methods: {
    quantidadeNoCarrinhoPorFilme: function(filme) {
      var quantidade = 0;
      for (var i = 0; i < this.carrinho.length; i++) {
        if (filme.id == this.carrinho[i]) {
          quantidade++;
        }
      }
      return quantidade;
    },
    adicionarAoCarrinho: function(filme) {
      this.carrinho.push(filme.id);
    },
    validarPermissaoParaAdicionarNoCarrinho: function(filme) {
      return filme.estoqueDisponivel > this.quantidadeNoCarrinhoPorFilme(filme);
    },
    checarAvaliacao(n, filme) {
      return filme.avaliacao - n >= 0;
    }
  },
  computed: {
    filmesOrdenados() {
      if (this.filmes.length > 0) {
        const compare = function(a, b) {
          if (a.titulo.toLowerCase() < b.titulo.toLowerCase()) return -1;
          if (a.titulo.toLowerCase() > b.titulo.toLowerCase()) return 1;
          return 0;
        };
        return this.filmes.slice().sort(compare);
      }
      return [];
    },
    quantidadeNoCarrinho: function() {
      return this.carrinho.length;
    }
  }
};
</script>

<style scoped>
.mensagem-estoque {
  font-weight: bold;
}

span.avaliacao-active {
  background-image: url("../assets/star-fill.png");
  background-repeat: no-repeat;
  background-position-y: 3px;
  background-position-x: 1px;
  background-size: 20px;
}
</style>