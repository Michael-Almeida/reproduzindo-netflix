<template>
  <section class="catalogo">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Em alta</h2>
        </div>
      </div>
      <div class="row">
        <div v-for="catalogo in catalogo" :key="catalogo.name" class="col-md-3">
          <div class="catalogo__card">
            <img :src="catalogo.img" :alt="catalogo.name" />
            <h5 v-text="catalogo.name"></h5>
            <a :href="catalogo.link" target="_blank">Assistir</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Catalogo",
  data: function() {
    return {
      catalogo: [
        {
          name: "Lucifer",
          img: require("../assets/serie2.jpg"),
          link: "https://www.youtube.com/watch?v=X4bF_quwNtw",
        },
        {
          name: "Peaky Blinders",
          img: require("../assets/serie1.jpg"),
          link: "https://www.youtube.com/watch?v=oVzVdvGIC7U",
        },
        {
          name: "Supernatural",
          img: require("../assets/serie3.jpg"),
          link: "https://www.youtube.com/watch?v=vUWCp0sSPks",
        },
        {
          name: "Vikings",
          img: require("../assets/serie4.jpg"),
          link: "https://www.youtube.com/watch?v=lE6YTts8cgY",
        },
        {
          name: "Stranger Things",
          img: require("../assets/serie5.jpg"),
          link: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
        },
        {
          name: "Narcos",
          img: require("../assets/serie6.jpg"),
          link: "https://www.youtube.com/watch?v=xl8zdCY-abw",
        },
        {
          name: "La Casa de Papel",
          img: require("../assets/serie7.jpg"),
          link: "https://www.youtube.com/watch?v=pK1cWze6ozY",
        },
        {
          name: "Dark",
          img: require("../assets/serie8.jpg"),
          link: "https://www.youtube.com/watch?v=JCCssUOtn2E",
        },
      ],
    };
  },
};
</script>

<style>
.catalogo {
  padding: 56px 0;
  background-color: #212121;
  color: #e2e2e2;
}
.catalogo h2 {
  padding-bottom: 5px;
}
.catalogo__card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 340px;
  margin: 12px;
}
.catalogo__card img {
  width: 100%;
  max-width: 193px;
  height: 260px;
  border: solid rgba(128, 128, 128, 0.267) 1px;
  border-radius: 6px;
}

.catalogo__card a {
  display: block;
  width: 70px;
  height: 30px;
  background-color: #e2e2e2;
  color: #212121;
  text-align: center;
  text-decoration: none;
  line-height: 31px;
  margin-top: 10px;
  margin-bottom: 30px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 900;
  margin: 20px;
}
.catalogo__card h5 {
  font-size: 14px;
  text-align: center;
  padding: 0px;
  display: inline-block;
  max-width: 120px;
  margin: 5px;
  
}
</style>
