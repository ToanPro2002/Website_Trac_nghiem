<template>
  <div class="question-container">
    <HeaderTemplate />
    <div class="container-content">
      <sidebar />
      <div class="content">
        <div class="content-area">
          <div class="header-content">
            <h2>Thêm câu hỏi mới</h2>
            <button class="save">Lưu</button>
          </div>
          <div class="body-content1">
            <div class="general-information">
              <h3>Thông tin chung</h3>
              <toggleSwitch isActive="" toggleText="Trạng thái" />
            </div>
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
            <div class="ended-content-body1">
              <label>Nội dung</label>
              <QuillEditor theme="snow" toolbar="essential" />
            </div>
          </div>
          <div class="body-content2">
            <h4>CÂU HỎI 1</h4>
            <label>Nội dung</label>
            <QuillEditor theme="snow" toolbar="essential" />
            <h3>Đáp án</h3>
            <div class="show-answer">
              <div class="show-answer1">
                <div class="general-information">
                <label>Đáp án A</label>
                <toggleSwitch isActive="" toggleText="Trạng thái" />
                </div>
                <QuillEditor theme="snow" toolbar="essential" />
              </div>
              <div class="show-answer1">
                <div class="general-information">
                <label>Đáp án B</label>
                <toggleSwitch isActive="" toggleText="Trạng thái" />
                </div>
                <QuillEditor theme="snow" toolbar="essential" />
              </div>
              <div class="show-answer1">
                <div class="general-information">
                <label>Đáp án C</label>
                <toggleSwitch isActive="" toggleText="Trạng thái" />
                </div>
                <QuillEditor theme="snow" toolbar="essential" />
              </div>
              <div class="show-answer1">
                <div class="general-information">
                <label>Đáp án D</label>
                <toggleSwitch isActive="" toggleText="Trạng thái" />
                </div>
                <QuillEditor theme="snow" toolbar="essential" />
              </div>
            </div>
          </div>
          <div class="ended-content">
            <button @click="upload_questions">Thêm câu hỏi</button>
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
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
export default {
  name: "subjectQuestions",
  components: {
    HeaderTemplate,
    sidebar,
    toggleSwitch,
    QuillEditor,
  },
  data() {
    return {
      gradeSubject: [
        { grade: "Khối 10", subject: "Anh" },
        { grade: "Khối 11", subject: "Anh" },
        { grade: "Khối 12", subject: "Anh" },
      ],
    };
  },
  setup(){

  }
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
.container-content {
  display: flex;
  width: 100%;
  height: 100vh;
}
.content {
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
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.header-content h2 {
  font-size: 24px;
  font-weight: 700;
  color: #000000;
}
.header-content button {
  padding: 10px 10px;
  border-radius: 5px;
  background-color: #fd6229;
  color: #fff;
  cursor: pointer;
}
.body-content1 {
  /* height: 30vh; */
  background-color: #f8f6f6;
  margin: 15px 30px;
  box-sizing: border-box;
}
.general-information {
  display: flex;
  padding: 0 10px;
  /* flex-direction: row; */
  justify-content: space-between;
}
.content-grade-subject {
  display: flex;
  flex-direction: row;
  /* padding: 10px; */
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
.ended-content-body1 {
  padding: 10px;
  /* background-color: #ffffff; */
  margin: 10px 0;
}
.ended-content-body1 label {
  display: flex;
  align-items: start;
  margin-bottom: 5px;
}
.body-content2 {
  display: block;
  align-self: start;
  background-color: #f8f6f6;
  margin: 15px 30px;
  padding: 0px 10px;
}
.body-content2 h4,
label,
h3 {
  display: flex;
  align-items: start;
  margin-bottom: 5px;
  margin-top: 0;
}
.body-content2 h3 {
  font-weight: normal;
  font-size: 16px;
  padding-left: 10px;
}
.body-content2 .show-anwser {
  display: grid;
}
/* chia 4 cot */
.show-answer {
  display: grid;
  grid:
    "show-answer1 show-answer1 "
    "show-answer1 show-answer1";
  grid-gap: 10px;
  box-sizing: border-box;
  /* grid-template-columns: auto auto auto auto; */
}
.show-answer1 {
  box-sizing: border-box;
  /* height:; */
  background-color: #ffffff;
}
.show-answer1 .general-information {
  display: flex;
  padding: 0 10px;
  /* gap: 10px; */
  justify-content: start;
  background-color: #f8f6f6;
}
.show-answer1 label {
  color: #fd6229;
  font-weight: 750;
}
.show-answer1 .ql-container {
  width: 100%;
  height: 39%;
  box-sizing: border-box;
}
.ql-toolbar.ql-snow {
  /* display: none;
   */
   padding: 0;
}
.ql-snow {
  border-radius: 10px;
  /* padding: 10px 10px; */
  padding: none;
}
.ql-editor {
  padding: 10px 10px;
  border-radius: 10px;
  height: 100%;
}
/* .show-answer1 {
  /* width: 45%;
  height: 50%;
  background-color: #ffffff; */

/* end of contetn  */
.ended-content {
  display: flex;
  align-items: start;
  margin: 5px 30px;
}
.ended-content button {
  padding: 5px 20px;
  border-radius: 5px;
  background-color: #fd6229;
  color: #fff;
  cursor: pointer;
}
</style>
