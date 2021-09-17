<template>
  <div class="home">
    <Header />
    <Banner />
    <Catalogo />
    <Citacao />
    <Lancamento />
    <TitulosComponent :isButton="true" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Banner from "../components/Banner.vue";
import Catalogo from "../components/Catalogo.vue";
import Citacao from "../components/Citacao.vue";
import Lancamento from "../components/Lancamento.vue";
import TitulosComponent from "../components/TitulosComponent.vue";

export default {
  name: "Home",
  components: {
    Header,
    Banner,
    Catalogo,
    Citacao,
    Lancamento,
    TitulosComponent,
  },
};
</script>

<style></style>
