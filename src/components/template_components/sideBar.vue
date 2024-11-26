<template>
  <nav class="sidebar">
    <ul>
      <li>
        <router-link to="/question-bank" active-class="active-link" exact
          ><font-awesome-icon :icon="['fas', 'book']" />Ngân hàng câu
          hỏi</router-link
        >
      </li>

      <li>
        <router-link to="/semeter_bank" active-class="active-link">
          <font-awesome-icon :icon="['fas', 'book']" /> Ngân hàng đề
          thi</router-link
        >
      </li>
      <li>
        <router-link to="/users" active-class="active-link"
          ><font-awesome-icon :icon="['fas', 'book']" />Ca thi</router-link
        >
      </li>
      <li>
        <router-link to="/magagement-user" active-class="active-link"
          ><font-awesome-icon :icon="['fas', 'people-group']" />Quản lí thí
          sinh</router-link
        >
      </li>
      <li>
        <router-link to="/magagement-teacher"  active-class="active-link"
          ><font-awesome-icon :icon="['fas', 'people-group']" />Quản lí giáo
          viên</router-link
        >
      </li>
      <li>
        <router-link to="/setting" active-class="active-link"
          ><font-awesome-icon :icon="['fas', 'gear']" />Cài Đặt</router-link
        >
      </li>
      <li>
        <router-link to="/Login"
          ><font-awesome-icon :icon="['fas', 'right-from-bracket']" />Đăng
          xuất</router-link
        >
      </li>
      <li>
        <select class="language" @change="ChangeLanguage">
          <option value="en">Language: English</option>
          <option value="vi">Ngôn ngữ: Tiếng Việt </option>
        </select>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: "sideBar",
  components: {},
  props: {

  },
  // computed: {
  //   isQuestionBankActive() {
  //   const routePath = this.$route.path;
  //   return routePath === "/question-bank";
  // },
  // },
};

</script>

<style>
.sidebar {
  height: 90vh;
  float: left;
  width: 15%;
  background-color: #f8f9fa;
  color: #f8f9fa;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
}
.sidebar ul {
  list-style-type: none;
  padding: 0;
}
.sidebar ul li {
  margin-bottom: 10px;
  align-items: left;
  display: flex;
}
.sidebar ul li:last-child {
  display: flex;
  margin-top: 40px;
  overflow: hidden;
  padding: 5px;
  align-items: center;
  justify-content: left;
}
.sidebar ul li:last-child select{
  margin-top: 20px;
  padding: 5px;
  border-radius: 10px;
  color: #000;
  font-weight: 700;
}
.sidebar ul li a {
  color: #000;
  text-decoration: none;
  align-items: left;
  padding: 5px;
  font-weight: 700;
}
.sidebar ul li a > svg {
  margin-right: 10px;
}
.sidebar ul li a:hover {
  color: #ffffff;
  background-color: #0073e6;
  border-radius: 5px;
  margin-left: 10px;
}
.active-link {
  background-color: #067ff9;
  color: #ffffff !important;
  border-radius: 5px;
  padding: 5px;
}
.active-link-exact {
  background-color: transparent;
  color: #000;
}
.sidebar ul li:active {
  color: #067ff9;
}
</style>
