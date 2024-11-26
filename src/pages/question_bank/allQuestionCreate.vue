<template>
  <div class="question-container">
    <HeaderTemplate />
    <div class="container">
      <sidebar />
      <div class="content">
        <div class="content-area">
          <div class="toolbar">
            <input
              type="text"
              v-model="Action"
              placeholder="Hành động"
              class="Action_input"
            />
            <button @click="applyAction">Áp dụng</button>
            <input type="text" v-model="searchQuery" placeholder="Tìm kiếm" />
            <button @click="ShowModel = true">Tạo câu hỏi</button>
            <button @click="uploadAccounts">Tải lên câu hỏi</button>
          </div>
          <table class="questions-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Mã học sinh</th>
                <th>Nội dung</th>
                <th>Khối</th>
                <th>Môn học</th>
                <th>Thời gian tạo</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="questions in paninatedquestions" :key="questions.id">
                <td><input type="checkbox" /></td>
                <td>{{ questions.id }}</td>
                <td>{{ questions.content }}</td>
                <td>{{ questions.grade }}</td>
                <td>{{ questions.subject }}</td>
                <td>{{ questions.createdDate }}</td>
                <td
                  :class="
                    questions.status === 'Hoạt động'
                      ? 'status-active'
                      : 'status-inactive'
                  "
                >
                  {{ questions.status }}
                </td>
                <td>
                  <button @click="deletequestions(questions.id)" class="delete-btn">
                    Xóa
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- // <div class="pagination"> -->
          <paninatedPages
            :currentPage=currentPage
            :pageSize=pageSize
            :questions=questions
            @update:currentPage="updateCurrentPage"
          />
          <!-- Modal Component -->
        </div>
      </div>
    </div>
    <!-- Your template content here -->
    <!-- Add more content as needed -->
  </div>
</template>

<script>
import HeaderTemplate from "@/components/template_components/headerTemplate.vue";
import sidebar from "@/components/template_components/sideBar.vue";
import paninatedPages from "@/components/template_components/paninated.vue";
export default {
  name: "allquestionCreate",
  components: {
    HeaderTemplate,
    sidebar,
    paninatedPages,
  },
  data() {
    return {
      Action: "",
      searchQuery: "",
      ShowModel: false,
      currentPage: 1,
      pageSize: 15,
      questions: [
        {
          id: 1,
          content: "How are you?",
          grade: "12",
          subject: "Anh",
          createdDate: "2021-09-01",
          status: "Hoạt động",
        },
        {
          id: 2,
          content: "Where are you?",
          grade: "12",
          subject: "Anh",
          createdDate: "2021-09-01",
          status: "Hoạt động",
        },
        {
          id: 3,
          content: "What are you doing?",
          grade: "12",
          subject: "Anh",
          createdDate: "2021-09-01",
          status: "Hoạt động",
        },
        {
          id: 4,
          content: "How are you today?",
          grade: "12",
          subject: "Toan",
          createdDate: "2021-09-01",
          status: "Hoạt động",
        },
      ],
    };
  },
  computed: {
    filteredDefaultQuestions() {
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        return this.questions.filter(
          (question) =>
          question.content.toLowerCase().includes(query) ||
          question.subject.toLowerCase().includes(query)
        );
      }
      return this.questions;
    },
    paninatedquestions() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredDefaultQuestions.slice(start, end);
    },
  },
  methods: {
    applyAction() {
      // Your action logic here
    },
    uploadAccounts() {
      // Your upload logic here
      this.$router.push({name:"UploadQuestion", path: "/question-bank/upload-question" });
    },
    updateCurrentPage(page) {
      this.currentPage = page;
    },
    deletequestions(id) {
      const isConfirm = confirm("Bạn có chắc chắn muốn xóa học sinh này?");
      if (isConfirm) {
        this.questions = this.questions.filter((question) => question.id !== id);
      }
    },
  },
};
</script>

<style>
.question-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: #f5f5f5;
}
.container {
  display: flex;
  width: 100%;
  height: 100vh;
}
.content {
  width: 100%;
  height: auto;
  padding: 10px;
  background-color: #cac8c8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.content-area {
  width: 96.5%;
  padding: 5px;
  float: left;
  background-color: #ffffff;
}
.toolbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.toolbar input {
  width: 15%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.toolbar .Action_input {
  width: 20%px;
  color: #000000;
}
.toolbar button {
  background-color: #ff7f50;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
}
.toolbar button:hover {
  background-color: #ff6347;
}
.questions-table {
  width: 100%;
  border-collapse: separate;
  /* border-collapse: collapse; */
  border-spacing: 0;
  background-color: #ffffff; /* Đặt màu nền bảng là trắng */
  border-radius: 10px; /* Tạo bo góc cho bảng */
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
}
.questions-table th {
  background-color: #f8f9fa;
  color: #333;
  font-weight: 700;
  text-align: left;
  padding: 10px;
}
.questions-table th,
.questions-table td {
  /* overflow: hidden; */
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}
.questions-table th {
  background-color: #f0f0f0; /* Màu nền riêng cho header */
  color: #333; /* Màu chữ */
  font-weight: 700;
}

/* // Phân trang, chon trang */
/* .pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}
.pagination button {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #0073e6;
  color: #fff;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
.active-page {
  background-color: #0073e6;
  color: #fff;
} */

/* //nut hoat dong */
.status-active {
  color: green;
  font-weight: bold;
}
.status-inactive {
  color: red;
  font-weight: bold;
}

/* // button delete */
.delete-btn {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
.delete-btn:hover {
  background-color: #e60000;
}
</style>
