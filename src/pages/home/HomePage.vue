<template>
  <header class="navbar">
    <div class="navbar-logo">Logo</div>
    <nav class="navbar-link">
      <a href="#">Check</a>
      <!-- <a href="#">Check</a> -->
      <!-- <a href="#">Check</a> -->
      <!-- <a href="#">Check</a> -->
    </nav>
    <div class="navbar-buttons">
      <button @click="goToLogin">Login</button>
      <!-- <router-view></router-view> -->
      <!-- <button @click="goToRegister" class="btn-register">Register</button> -->
    </div>
  </header>
  <body>
    <section class="homepage">
      <h1>The website builder you're looking for</h1>
      <p>
        Simple is a modern website builder powered by AI that changes how
        companies create user interfaces together.
      </p>
      <div class="cta-buttons">
        <button class="btn-start">Start Free Trial</button>
        <button class="btn-learn">Learn More</button>
      </div>
    </section>
  </body>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
  }
};
</script>



<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.navbar-logo {
  font-size: 24px;
  font-weight: bold;
}
.navbar-link a {
  margin-right: 20px;
  color: #333;
  text-decoration: none;
}
.navbar-buttons button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
.homepage {
  text-align: center;
  padding: 3rem;
  background-color: #f8f9fa;
}
.homepage h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.homepage p {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 2rem;
}
.cta-buttons button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
}
.btn-start .btn-learn {
  padding: 0.75rem 2rem;
  margin: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
}
.btn-start {
  background-color: #007bff;
  color: #fff;
}
.btn-learn {
  background-color: #28a745;
  color: #fff;
  border: 1px solid #28a745;
}
</style>
