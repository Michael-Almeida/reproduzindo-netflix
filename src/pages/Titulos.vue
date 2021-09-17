<template>
  <div>
    <Header />
    <main>
      <Banner />
      <TituloComponent :isButton="false" />
    </main>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Banner from "../components/Banner.vue";
import TituloComponent from "../components/TitulosComponent.vue";

export default {
  name: "Titulos",
  components: {
    Header,
    Banner,
    TituloComponent,
  },
};
</script>

<style></style>
