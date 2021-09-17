<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="header__logo logo">
            <img src="../assets/logo.png" alt="logo" class="logo__img" />
          </h1>
        </div>
        <div class="col-md-6 header__right">
          <p class="header__text">Filmes, séries e muito mais.</p>
          <nav class="menu">
            <ul>
              <li><router-link to="/"> Home | </router-link></li>
              <li><router-link to="/titulos"> Títulos | </router-link></li>
              <li><router-link to="/"> Minha Lista | </router-link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header {
  width: 100%;
  height: 80px;
  background-color: black;
}
.logo {
  margin: 8px 0 0 0;
  padding: 0px;
}
.logo__img {
  max-width: 200px;
}
.header__text {
  color: #e2e2e2;
  font-size: 14px;
  font-style: italic;
  margin: 8px;
  font-weight: bold;
}
.menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
  color: #e2e2e2;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
}
.menu ul li {
  padding: 6px 14px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
}
.menu ul li a {
  text-decoration: none;
  color: #e2e2e2;
}
.menu ul li a:hover {
  transition: 1s;
  color: rgb(255, 0, 0);
}
.menu ul li:not(:last-child) :after {
  content: "";
  display: inline-block;
  width: 1px;
  background-color: #e2e2e2;
  height: 10px;
  margin-left: 10px;
}

.header__right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
