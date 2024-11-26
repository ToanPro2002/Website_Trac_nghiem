<template>
  <div class="mcq-system" >
    <HeaderTemplate/>
    <div class="container">
      <sidebar />
      <div class="container-card">
        <div class="name-bank">
          <h1>Ngân hàng câu hỏi</h1>
        </div>
        <div class="container-card-content">
          <CardComponent
            title="Câu hỏi mặc định"
            description="Câu hỏi mặc định là một câu hỏi với bốn câu trả lời"
            buttonText="Tạo câu hỏi"
            questionName = "defaultQuestions"
            questionsUrl="/question-bank/default-question"
            linkText="Tất cả câu hỏi đã tạo"
            :linkUrl="'/question-bank/all-question-create'"
            buttonColor="#4caf50"

          />
          <CardComponent
            title="Câu hỏi theo mục"
            description="Câu hỏi theo mục là câu hỏi với nhiều câu hỏi trong đó"
            buttonText="Tạo câu hỏi"
            linkText="Tất cả câu hỏi đã tạo"
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
  name: "QuestionBank",
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
