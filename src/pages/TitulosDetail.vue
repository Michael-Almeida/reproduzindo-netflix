<template>
  <div>
    <h2>{{ titulosDetail.title }}</h2>
    <img :src="titulosDetail.img" />
  </div>
</template>

<script>
export default {
  name: "TitulosDetail",
  data: function() {
    return {
      titulosDetail: [],
    };
  },
  methods: {
    getTitulosById: async function() {
      const result = await fetch(
        "http://localhost:3000/titulos/" + this.$route.paramns.id
      )
        .then((res) => res.json())
        .catch((error) => {
          return {
            error: true,
            message: error,
          };
        });
      if (!result.error) {
        this.new = result;
      }
    },
  },
  created: function() {
    this.getTitulosById();
  },
};
</script>

<style>
.titulos-detail {
  height: 100vh;
  background-color: #212121;
  color: #e2e2e2;
}
.titulos-detail h2 {
  padding-top: 56px;
}
.titulos-detail img {
  margin: 20px auto;
  display: block;
}
</style>
