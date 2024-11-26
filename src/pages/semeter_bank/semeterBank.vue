<template>
  <div class="mcq-system" >
    <HeaderTemplate/>
    <div class="container">
      <sidebar />
      <div class="container-card">
        <div class="name-bank">
          <h1>Ngân hàng đề thi</h1>
        </div>
        <div class="container-card-content">
          <CardComponent
            title="Bài thi cơ bản"
            description="Bài thi cơ bản được tạo từ câu hỏi mặc định"
            buttonText="Tạo bài thi"
            questionName = "defaultQuestions"
            questionsUrl="/question-bank/default-question"
            linkText="Tất cả bài thi đã tạo"
            :linkUrl="'/question-bank/all-question-create'"
            buttonColor="#4caf50"

          />
          <CardComponent
            title="Bài thi chia các phần"
            description="Bài thi chia các phần được tạo từ các mục câu hỏi"
            buttonText="Tạo bài thi"
            linkText="Tất cả bài thi đã tạo"
            questionName = "subjectQuestions"
            questionsUrl="/question-bank/subject-questions"
            :linkUrl="'/question-bank/all-question-create'"
            buttonColor="#ff9900"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- <router-view ref="rv"></router-view> -->
</template>
<script>
import HeaderTemplate from "@/components/template_components/headerTemplate.vue";
import sidebar from "@/components/template_components/sideBar.vue";
import CardComponent from "@/components/question-bank/cardComponent.vue";
export default {
  name: "SemeterBank",
  data() {
    return {
      isExactActive: false,
    };
  },

  components: {
    //    QuestionBank1:
    HeaderTemplate,
    sidebar,
    CardComponent
  },
};
</script>
<style>
.mcq-system {
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100vw;
  background-color: #f5f5f5;
}
.container {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
}
.container-card {
  /* display: flex; */
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  border: 2px solid #adadad;
  box-sizing: border-box;
}
.container-card {
  display: block;
  float: inline-end;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 2px solid #adadad;
  box-sizing: border-box;

}
.container-card h1 {
  font-size: 50px;
  font-weight: bold;
  margin-top: 20px;
}
.container-card-content {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50vh;
}
</style>
