<template>
  <div class="msq-system">
    <HeaderTemplate />
    <div class="container">
      <sidebar />
      <div class="container-content">
        <div class="content-area">
          <div class="header">
            <h2 class="hi">Tạo câu hỏi</h2>
            <button class="save">Lưu</button>
          </div>
          <div class="content">
            <div class="left-content">
              <h3>Thông tin chung</h3>
              <div class="content-grade-subject">
                <div class="grade-subject">
                  <label>Khối</label>
                  <select v-model="gradeSubject.grade">
                    <option>Khối 10</option>
                    <option>Khối 11</option>
                    <option>Khối 12</option>
                  </select>
                </div>
                <div class="grade-subject">
                  <label>Môn học</label>
                  <select v-model="gradeSubject.subject">
                    <option>Anh</option>
                    <!-- <option>Toán</option> -->
                  </select>
                </div>
              </div>
              <h3>Xem trước câu hỏi</h3>
              <div class="quiz-container">
                <div
                  class="option"
                  v-for="(option, index) in options"
                  :key="index"
                  :class="{ selected: selectedOption === index }"
                  @click="selectOption(index)"
                >
                  <span>{{ option }}</span>
                </div>
              </div>
            </div>
            <div class="divider"></div>
            <div class="right-content">
              <div class="header-right-content">
                <h3>Thông tin câu hỏi</h3>
                <toggleSwitch
                  isActive=""
                  toggleText="Trạng Thái"
                />
              </div>
              <div class="container-content-right">
                <div class="content-right">
                  <h3>Nội dung</h3>
                  <QuillEditor theme="snow" toolbar="essential" />
                </div>
                <div class="result-content">
                  <h4>Đáp án</h4>

                  <div
                    class="result"
                    v-for="(option, index) in options"
                    :key="index"
                  >
                    <div class="result-heading">
                      <h4>Câu {{ option }}</h4>
                      <toggleSwitch
                        isActive=""
                        toggle="Đáp án đúng"
                        @change="handleToggle(index)"
                      />
                    </div>
                    <div class="result-quilleditor">
                      <QuillEditor theme="snow" toolbar="essential" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
import toggleSwitch from "@/components/template_components/toggleSwitch.vue";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { QuillEditor } from "@vueup/vue-quill";
export default {
  name: "defaultQuestions",
  components: {
    HeaderTemplate,
    sidebar,
    toggleSwitch,
    QuillEditor,
  },
  data() {
    return {
      // Add your data here
      gradeSubject: [
        { grade: "Khối 10", subject: "Anh" },
        { grade: "Khối 11", subject: "Anh" },
        { grade: "Khối 12", subject: "Anh" },
      ],
      options: ["A.", "B.", "C.", "D."], // Các tùy chọn
      selectedOption: null, // Lưu trữ tùy chọn được chọn
      toggles: [false, false, false, false],
    };
  },
  methods: {
    // Add your methods here
    selectOption(index) {
      console.log("Option selected:", index);
      this.selectedOption = index;
    },
    handleToggle(index) {
      this.toggles[index] = !this.toggles[index];
      this.selectedOption = this.toggles[index] ? index : null;
    },
  },
  // Add your component logic here
};
</script>
<style>

.msq-system {
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
.container-content {
  display: inline;
  width: 100%;
  height: auto;
  padding: 10px;
  background-color: #cac8c8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.content-area {
  width: 97.5%;
  padding: 0 5px;
  float: left;
  background-color: #ffffff;
  border-radius: 5px;
  height: 100%;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.header h2 {
  font-size: 24px;
  font-weight: 700;
  color: #000000;
}
.header button {
  padding: 10px 10px;
  border-radius: 5px;
  background-color: #fd6229;
  color: #fff;
  cursor: pointer;
}
.content {
  display: flex;
  width: 100%;
  height: 85%;
  box-sizing: border-box;
  /* box-sizing: border-box */
  /* overflow: auto; */
  /* ưwidth: 100%; */
}
.left-content {
  flex: 1 1 auto;
  background-color: #fff;
  /* padding: 5px; */
  box-sizing: border-box;
  overflow: auto;
}
.left-content h3 {
  display: flex;
  align-items: start;
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #ff7700;
  padding: 20px;
}
.content-grade-subject {
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-around;
}
.grade-subject {
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 10px;
  align-items: start;
  width: 100%;
}
.grade-subject label {
  font-size: 16px;
  /* font-weight: 700; */
  color: #000000;
  margin-bottom: 5px;
}
.grade-subject select {
  appearance: none; /* Ẩn mũi tên mặc định */
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
}
.grade-subject:after {
  content: "▼";
  font-size: 18px;
  font-weight: bold;
  color: #333;
  position: absolute;
  right: 15px;
  top: 64%;
  transform: translateY(-50%);
  pointer-events: none; /* Không ảnh hưởng đến thao tác người dùng */
}
.grade-subject option {
  font-size: 16px;
  font-weight: 400;
  color: #000000;
}
.quiz-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
}

/* Giao diện của mỗi tùy chọn */
.option {
  width: 45%;
  padding: 10px;
  text-align: center;
  border: 2px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-self: center;
}

/* Khi chọn một tùy chọn */
.selected {
  border-color: limegreen;
  background-color: #e0f5e9;
}

/* //divider  */
.divider {
  width: 1.5px; /* Độ rộng của đường kẻ chia */
  background-color: #333; /* Màu sắc của đường kẻ */
  height: 100%; /* Chiều cao của đường kẻ chia */
  box-sizing: border-box;
}
.right-content {
  flex: 7;
  background-color: #fefefe;
  box-sizing: border-box;
  width: 100%;
}
.header-right-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}
.header-right-content h3 {
  display: flex;
  align-items: start;
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #ff7700;
  padding-left: 20px;
}
.container-content-right h3 {
  display: flex;
  align-items: start;
  margin: 0 0 20px 0;
}
.container-content-right .content-right {
  padding: 2px 20px;
}
.result-content {
  padding: 10px;
  height: 100%;
  background-color: #f2f2f2;
}
.result-content h4 {
  display: flex;
  align-items: start;
  margin: 5px 0;
}
.result {
  box-shadow: 1 1px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}
.result .result-quilleditor {
  padding: 10px;
  background-color: #fff;
  margin: 0px 20px;
}
.ql-snow {
  padding: 0;
  border-radius: 5px;
}
.result .ql-snow {
  padding: 0;
  border-radius: 5px;
}
.ql-snow .ql-editor {
  padding: 8px 5px;
}
.text-editor {
  max-width: 600px;
  margin: 0 auto;
}
.editor-container {
  margin-top: 10px;
}
.ql-contaner .ql-editor {
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  border: 5px solid #040404;
  height: 100%;
}
.result-heading {
  display: flex;
  /* flex-direction: row; */
  align-items: start;
  justify-content: flex-start;
  margin: 0px 5px;
  height: 50%;
}
.result-heading h4 {
  font-size: 18px;
  font-weight: 600;
  color: #ff7700;
  margin: 0 10px;
}
</style>
