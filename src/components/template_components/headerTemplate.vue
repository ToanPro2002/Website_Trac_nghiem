<template>
  <header class="header-template">
    <h1>MCQ SYSTEM</h1>
    <div class="admin-template">
      <span>Admin</span>
      <img src="@/assets/lock.png" alt="Profile" />
    </div>
  </header>
</template>
<script>
export default {
  name: "HeaderTemplate",
  components: {},
};
</script>

<style scoped>
.header-template {
  display: flex;
  margin: 0 auto; /* Căn giữa header */
  box-sizing: border-box;
  padding: 0;
  width: 100vw;
  max-width: 100vw; /* Đảm bảo không vượt quá chiều rộng của viewport */
  /* overflow: hidden */
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #003060;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #f8f9fa;
  box-sizing: border-box;
}

.header-template h1 {
  font-size: 24px;
  font-weight: bold;
}

.admin-template {
  display: flex;
  align-items: center;
  width: auto;
}

.admin-template span {
  margin-right: 10px;
}

.admin-template img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
</style>
