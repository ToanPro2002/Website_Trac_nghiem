<template>
  <div class="upload-sys">
    <HeaderTemplate />
    <div class="upload-container">
      <sidebar />
      <div class="container-content">
        <div class="upload-container-content">
          <!-- <h1>Upload Questions</h1> -->
          <div class="control-form-group">
            <div class="form-group">
              <label for="grade">Khối:</label>
              <select id="grade" v-model="selectedGrade" class="form-control">
                <option v-for="grade in grades" :key="grade" :value="grade">
                  {{ grade }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="subject">Môn học:</label>
              <select
                id="subject"
                v-model="selectedSubject"
                class="form-control"
              >
                <option
                  v-for="subject in subjects"
                  :key="subject"
                  :value="subject"
                >
                  {{ subject }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <div class="header-form-group">
              <label for="file">Câu hỏi</label>
              <button
                @click="submitFile"
                :disabled="!file"
                class="btn btn-primary"
              >
                Lưu
              </button>
            </div>
            <input
              type="file"
              id="file"
              @change="handleFileUpload"
              accept=".xlsx"
            />
            <p>
              <a href="sample.xlsx" download>Xem file mẫu</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTemplate from "@/components/template_components/headerTemplate.vue";
import sidebar from "@/components/template_components/sideBar.vue";
export default {
  name: "uploadQuestion",
  components: {
    HeaderTemplate,
    sidebar,
  },
  data() {
    return {
      grades: ["Khối 10", "Khối 11", "Khối 12"], // Thêm các khối cần thiết
      subjects: ["Anh"], // Thêm các môn học cần thiết
      selectedGrade: "",
      selectedSubject: "",
      file: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    submitFile() {
      if (!this.selectedGrade || !this.selectedSubject || !this.file) {
        alert("Vui lòng chọn đầy đủ thông tin!");
        return;
      }
      const formData = new FormData();
      formData.append("grade", this.selectedGrade);
      formData.append("subject", this.selectedSubject);
      formData.append("file", this.file);

      // Gửi dữ liệu lên server
      fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            alert("File uploaded successfully!");
          } else {
            throw new Error("Upload failed!");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>
<style>
.container-content {
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 20px;
  background-color: #f0f0f0;
}
.upload-container-content {
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.control-form-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 10px;
}
.control-form-group > .form-group {
  width: 45%;
}
.form-group label {
  display: flex;
  justify-content: start;
  font-weight: bold;
  margin-bottom: 5px;
}
.form-group input,
select,
button {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 5px;
}
.form-group {
  width: 100%;
}
.header-form-group {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  /* margin: 10px 10px; */
  padding: 10px 10px;
  /* margin-bottom: 10px; */
  box-sizing: border-box;
  /* border-bottom: 1px solid #ccc; */
}
.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  /* padding: 8px 16px; */
  cursor: pointer;
  width: 100px;
  height: 40px;
  padding: 10px 10px;
}
</style>
