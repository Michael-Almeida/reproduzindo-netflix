<template>
  <section class="lancamento">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="lancamento__title">Lancamentos</h2>
        </div>
        <div class="col-md-6">
          <input type="text" placeholder="pesquisar ..." v-model="pesquisar" />
        </div>
        <div class="row">
          <div
            v-for="lancamento in lancamentoFiltered"
            :key="lancamento.id"
            class="col-md-4"
          >
            <Card
              :title="lancamento.title"
              :description="lancamento.description"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Lancamento",
  components: {
    Card,
  },
  data: function() {
    return {
      pesquisar: "",
      lancamento: [
        {
          id: 1,
          title: "Rua do Medo: 1994",
          description: `Depois de uma série de assassinatos brutais, uma adolescente e seus amigos decidem enfrentar a força maligna que domina a cidade há séculos.`,
        },
        {
          id: 2,
          title: "Sweet Tooth",
          description: `Um adorável menino-cervo sai em busca de um recomeço, e tem como companhia um protetor rabugento. Pode não parecer, mas é uma aventura perigosa.`,
        },
        {
          id: 3,
          title: "Round 6",
          description: `Centenas de jogadores falidos aceitam um estranho convite para um jogo de sobrevivência. Um prêmio milionário aguarda, mas as apostas são altas e mortais.`,
        },
        {
          id: 4,
          title: "Elas Vs o Serial Killer",
          description: `Este documentário acompanha uma chefe de polícia e a mãe de uma vítima de assassinato numa busca incansável por um serial killer na Paris dos anos 1990.`,
        },
        {
          id: 5,
          title: "Last Chance U: Basquete",
          description: `Em Last Chance U, um técnico de Los Angeles com fortes convicções lidera jovens que esperam alcançar todo seu potencial em faculdades de renome.`,
        },
        {
          id: 6,
          title: "Ponto de Virada: 11/9 ",
          description: `Esta série impactante sobre os ataques de 11 de setembro acompanha o início da Al-Qaeda, nos anos 80, até a resposta dos Estados Unidos.`,
        },
      ],
    };
  },
  computed: {
    lancamentoFiltered: function() {
      return this.lancamento.filter(
        (lancamento) => lancamento.title.toLowerCase().indexOf(this.pesquisar) > -1
      );
    },
  },
};
</script>

<style>
.lancamento{
  padding: 56px 0px;
  background-color: #E2E2E2;
  width: 100%;
  height: 800px;
}
.lancamento .row{
  align-items: flex-start;
}
.lancamento .lancamento__title{
  font-size: 36px ;
  padding:0;
  margin: 0;
}
.lancamento input{
  border-radius: 45px;
  background-color: #f1f1f1;
  border:none;
  width: 70%;
  height: 30px;
  padding: 7px 14px;
  float: right;
}
</style>
