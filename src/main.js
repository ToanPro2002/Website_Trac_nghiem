import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import {createI18n } from 'vue-i18n'
import en from './locales/en.json'
import vi from './locales/vi.json'
import FontAwesomeIcon from '../fonawesome.js'
import "@vueup/vue-quill/dist/vue-quill.snow.css";
// import QuillEditor from "@vueup/vue-quill";
// import QuillEditorPlugin from "../quillEditorPlugin.js";
// import { quillEditor, Quill } from 'vue3-quill'
// import customQuillModule from '/customQuillModule'
// Quill.register('modules/customQuillModule', customQuillModule)
// import 'quill/dist/quill.core.css';
// import 'quill/dist/quill.bubble.css';

const messages = {
    en: en,
    vi: vi
};
const i18n = createI18n({
  locale: 'en', // set default locale
  fallbackLocale: 'en',
  messages
});
const app = createApp(App);
app.use(router);
app.use(i18n);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
// app.component('QuillEditor', QuillEditor);
// app.component('font-awesome-icon', FontAwesomeIcon)
