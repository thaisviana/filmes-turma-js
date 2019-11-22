<template>
  <div class="row">
    <Header class="col-12" title="Locadora de Filmes" />

    <div class="col-12 mt-5">
      <h3>Esse é o produto com o id {{ $route.params.id }}</h3>
    </div>

    <div class="col-5 mt-1">
      <img v-bind:src="filme.imagem" alt="imagem do filme" />
    </div>
    <div class="col-7 mt-1">
      <h1>{{filme.titulo}}</h1>
      <p v-html="filme.descricao"></p>
      <p>{{filme.valor}}</p>
    </div>
  </div>
</template>

<script>
import Header from "./Header";

export default {
  components: {
    Header
  },
  data() {
    return {
      filme: {
        id: 4,
        titulo: "Capitã Marvel",
        descricao: "Um filme de capitãs",
        valor: 40,
        imagem: "/assets/logo.png",
        estoqueDisponivel: 8,
        avaliacao: 4
      }
    };
  }
};
</script>

<style scoped>
</style>