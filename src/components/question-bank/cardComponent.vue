<template>
  <div class="container-content-card">
    <div class="content-card">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <button :style="{ backgroundColor: buttonColor}" @click="handleButtonClick">{{ buttonText }}</button>
      <router-link :to="linkUrl">{{ linkText }}</router-link>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: String,
    description: String,
    buttonText: String,
    linkText: String,
    linkUrl: String,
    questionsName: String,
    questionsUrl: String,
    buttonColor: {
      type: String,
      default: "#4caf50",
    },
  },
  methods: {
    handleButtonClick() {
      console.log("xin_chao");
      this.$router.push({ name: this.questionName, path: this.questionsUrl})
    },
  },
};
</script>

<style scoped>
.container-content-card {
  display: flex;
  justify-content: center; /* Căn giữa theo chiều ngang */
  align-items:center; /* Căn giữa theo chiều dọc */
  gap: 20px; /* Khoảng cách giữa các thẻ */
  height: 100vh; /* Chiều cao toàn màn hình */
  width: 100%; /* Chiếm toàn bộ chiều rộng */
  padding: 20px;

}
.content-card {
  display: grid;
  width: 300px;
  height: 300px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.content-card h3 {
  display: flex;
  margin: 0px;
  padding: 10px;
  font-size: 20px;
  align-items: center;
  justify-content: center;
}
.content-card p {
  padding: 20px;
  margin: 0;
  font-size: 16px;
  color: #333;
  text-align: center;
  line-height: 1.5;
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-line-clamp: 3;
  line-clamp: 3;
}
.content-card a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(72, 0, 255);
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 80%;
  margin: 0 auto;
  height: 80%;
}
button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 80%;
  margin: 0 auto;
  height: 80%;
}

button:hover {
  background-color: #45a049;
}
</style>
