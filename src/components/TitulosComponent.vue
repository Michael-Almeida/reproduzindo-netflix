<template>
  <section class="titulos">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="titulo__titulo">Títulos</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="titulos in titulos"
          :key="titulos.id"
          :class="{
            'col-md-12': titulos.title === 'Titulo 01',
            'col-md-6': titulos.id !== 1,
          }"
        >
          <div class="titulo__box">
            <img :src="titulos.img" />
            <h3>{{ titulos.title }}</h3>
            <p>{{ titulos.text }}</p>
            <router-link :to="{ name: 'titulos', params: { id: titulos.id } }">
              <span>Leia mais</span>
            </router-link>
          </div>
        </div>
        <div class="col-md-12" v-if="isButton">
          <router-link to="/titulos" class="titulo__btn"
            ><button>Veja Mais</button></router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TitulosComponent",
  props: {
    isButton: Boolean,
  },
  data: function() {
    return {
      titulos: [
        {
          id: 1,
          title: "For Life",
          text: `Condenado à prisão perpétua por um crime que não cometeu, um homem se torna advogado para buscar justiça e defender outros acusados injustamente.`,
          img: require("../assets/titulo1.jpg"),
        },
        {
          id: 2,
          title: "John Weick 3",
          text: `Após assassinar o chefe da máfia Santino D'Antonio no Hotel Continental, John Wick passa a ser perseguido pelos membros da Alta Cúpula sob a recompensa de U$14 milhões. Agora, ele precisa unir forças com antigos parceiros que o ajudaram no passado enquanto luta por sua sobrevivência.`,
          img: require("../assets/titulo2.jpg"),
        },
        {
          id: 3,
          title: "Batman - O cavaleiro das Trevas ",
          text: `Batman, tenente Gordon e o promotor público continuam a desmantelar o submundo do crime de Gotham, mas um novo vilão ameaça destruir o trabalho deles.`,
          img: require("../assets/titulo3.jpg"),
        },
        {
          id: 4,
          title: "Vendeta - A guerra Antimáfia",
          text: `Uma aliança é formada na Sicília para combater a máfia. Mas o que fazer quando aqueles que tentam acabar com o crime organizado também são acusados por crimes graves?`,
          img: require("../assets/titulo4.jpg"),
        },
        {
          id: 5,
          title: "Missa da Meia-Noite",
          text: `A chegada de um jovem sacerdote carismático traz milagres, mistérios e um fervor religioso renovado a uma cidade moribunda e desesperada por fé.`,
          img: require("../assets/titulo5.jpg"),
        },
        {
          id: 6,
          title: "ReMastered: O Diabo na Encruzilhada",
          text: `O misterioso Robert Johnson deixou sua marca no blues e na música em geral. Família, críticos e fãs famosos mostram quem é o homem por trás da música.`,
          img: require("../assets/titulo6.jpg"),
        },
        {
          id: 7,
          title: "Space Jam: Um Novo Legado",
          text: `O superastro do basquete LeBron James se junta à gangue Looney Tunes para derrotar o Goon Squad e salvar seu filho.`,
          img: require("../assets/titulo7.jpg"),
        },
        {
          id: 8,
          title: "Narcos: México",
          text: `Em 1980, enquanto o exército mexicano saqueia o interior de Sinaloa, um ambicioso policial, Miguel Angel Félix Gallardo, decide criar um império das drogas em Guadalajara. Enquanto isso, um jovem agente da DEA, Kiki Camarena, é transferido para o México.`,
          img: require("../assets/titulo8.jpg"),
        },
        {
          id: 9,
          title: "vingadores ultimato",
          text: `Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.`,
          img: require("../assets/titulo9.jpg"),
        },
      ],
    };
  },
  computed: {
    tituloFiltered: function() {
      const titulos = this.titulos;
      if (this.isButton) {
        return titulos.slice(0.3);
      }
      return titulos;
    },
  },
  methods: {
    getTitulos: async function() {
      const result = await fetch("http://localhost:3000/titulos")
        .then((res) => res.json())
        .catch((error) => {
          return {
            error: true,
            message: error,
          };
        });

      if (!result.error) {
        this.titulos = result;
      }
    },
  },
  created: function() {
    this.getTitulos();
  },
};
</script>

<style>
.titulos {
  background-color: #212121;
  padding: 56px 0;
  color: #e2e2e2;
}
.titulo__titulo {
  font-size: 36px;
}
.titulos h3 {
  font-size: 26px;
}
.titulos p {
  font-size: 16px;
}
.titulos span {
  color: #c3121c;
  font-size: 14px;
}
.titulos img {
  width: 100%;
  border: solid rgba(128, 128, 128, 0.267) 1px;
  border-radius: 6px;
}
.titulos__box {
  margin-bottom: 30px;
}
.titulos button {
  width: 170px;
  height: 40px;
  background: #c3121c;
  color: #212121;
  border-radius: 6px;
  border: none;
  font-weight: bold;
  margin: 30px auto;
}
.titulo__btn {
  display: inherit;
  text-align: center;
}
.titulo ul li a {
  text-decoration: none;
}
.menu ul li a:hover {
  transition: 1s;
  color: rgb(255, 0, 0);
}
</style>
