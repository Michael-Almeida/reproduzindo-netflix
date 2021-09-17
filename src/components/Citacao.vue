<template>
  <section class="citacao">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <p class="citacao__text">
            Levamos até você as melhores séries, filmes e documentários para
            todos os gostos, onde quer que você esteja. Nossos assinantes
            controlam o que querem ver e quando, sem anúncios, com uma simples
            assinatura. As melhores histórias podem vir de qualquer lugar e são
            amadas por todos – por isso, nosso serviço de streaming está
            disponível para mais de 30 idiomas e em 190 países. Somos os maiores
            fãs de entretenimento do mundo e sempre buscamos maneiras de ajudar
            você a descobrir sua próxima história favorita.
          </p>
          <p class="citacao__author">Netflix</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Citacao",
};
</script>

<style>
.citacao {
  background-color: #0a0a0a;
  width: 100%;
  height: 255px;
}
.citacao .citacao__text {
  color: #c3121c;
  font-size: 20px;
  font-style: italic;
 
}
.citacao .citacao__author {
  color: #c3121c;
  font-size: 18px;
  text-align: right;
}
</style>
