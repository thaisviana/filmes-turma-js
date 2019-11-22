<template>
  <div>
    <h1>Bem vindo a {{ title }}</h1>

    <h3 v-if="horas >= 9 && horas < 17" id="aberta">ABERTA</h3>
    <h3 v-else-if="horas >= 17 && horas < 18" id="proxima-fechar">PRÓXIMA DE FECHAR</h3>
    <h3 v-else id="fechada">FECHADA</h3>

    <div class="row">
      <div class="col">
        <h2>Filmes encontrados</h2>
        <router-link
          active-class="active"
          tag="button"
          :to="{ name: 'form' }"
          class="btn btn-primary btn-lg"
        >Carrinho: {{ quantidadeNoCarrinho }} filmes</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-header",
  props: {
    title: String,
    quantidadeNoCarrinho: Number
  },
  data() {
    return {
      horas: new Date().getHours()
    };
  },
  methods: {
    mostrarCarrinho() {
      this.$router.push({ name: "form" });
    }
  }
};
</script>

<style scoped>
#aberta {
  color: blue;
}

#proxima-fechar {
  color: orange;
}

#fechada {
  color: red;
}
</style>