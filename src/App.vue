<template>
  <div id="app">
    <header>
      <span>My awesome blog</span>
      <nav>
        <ul class="menu">
          <li class="menu__item"><router-link to="/">All posts</router-link></li>
          <li class="menu__item"><router-link to="/add-post">Add post</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  line-height: 25px;
  background-color: #35495E;
  color: #ffffff;
  padding-top: 5px;
}

header span {
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.menu {
  float: left;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
}

.menu__item {
  display: inline-block;
}

.menu__item a {
  display: block;
  color: #FFFFFF;
  font-size: 12px;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

</style>
