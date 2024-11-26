import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/home/HomePage.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/login",
      name: "loginPage",
      component: () => import("../pages/login/LoginPage.vue"),
    },
    {
      path: "/magagement-User",
      name: "MagagementUser",
      component: () => import("../pages/Admin/manageUser.vue"),
    },
    {
      path: '/question-bank',
      name: "questionBank",
      component: () => import("../pages/question_bank/QuestionBank.vue"),
      // redirect: "/question-bank/default-questions",
      children: []
    },
    {
      path: "/question-bank/all-question-create",
      name: "allquestionCreate",
      component: () => import("../pages/question_bank/allQuestionCreate.vue"),
    },
    {
      path: "/question-bank/subject-questions",
      name: "subjectQuestions",
      component: () => import("../pages/question_bank/SubjectQuestions.vue"),
      // linkExactActiveClass: "active-link",
    },
    {
      path: "/question-bank/default-question",
      name: "defaultQuestions",
      component: () => import("../pages/question_bank/DefaultQuestions.vue"),
    },
    {
      path: "/question-bank/upload-question",
      name: "UploadQuestion",
      component: () => import("../pages/question_bank/upload_question.vue"),
    },
    {
      path: "/semeter_bank",
      name: "SemeterBank",
      component: () => import("../pages/semeter_bank/semeterBank.vue"),
    },
    {
      path: "/magagement-teacher",
      name: "managementTeacher",
      component: () => import("../pages/Admin/managementTeacher.vue"),
    },
  ],
  // linkActiveClass: "active-link",
  // linkExactActiveClass: "active-link",
});

export default router;
