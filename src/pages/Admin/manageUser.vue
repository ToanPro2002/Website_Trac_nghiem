<template>
  <div class="msq-system">
    <HeaderTemplate />
    <div class="Container">
      <sidebar />
      <div class="Content">
        <div class="content-area">
          <div class="toolbar">
            <button @click="applyAction">Áp dụng</button>
            <input
              type="text"
              v-model="Action"
              placeholder="Hành động"
              class="Action_input"
            />
            <input type="text" v-model="searchQuery" placeholder="Tìm kiếm" />
            <button @click="ShowModel = true">Tạo tài khoản</button>
            <button @click="uploadAccounts">Tải lên tài khoản</button>
          </div>
          <table class="student-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Mã học sinh</th>
                <th>Họ và tên</th>
                <th>Giới tính</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Ngày tạo</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="student in paninatedStudent" :key="student.id">
                <td><input type="checkbox" /></td>
                <td>{{ student.id }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.gender }}</td>
                <td>{{ student.phone }}</td>
                <td>{{ student.email }}</td>
                <td>{{ student.createdDate }}</td>
                <td
                  :class="
                    student.status === 'Hoạt động'
                      ? 'status-active'
                      : 'status-inactive'
                  "
                >
                  {{ student.status }}
                </td>
                <td>
                  <button @click="deleteStudent(student.id)" class="delete-btn">
                    Xóa
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1">
              Trước
            </button>
            <span v-for="page in totalPages" :key="page">
              <button
                @click="gotoPage(page)"
                :class="{ 'active-page': currentPage === page }"
                :disabled="currentPage === page"
              >
                {{ page }}
              </button>
            </span>
            <button @click="nextPage" :disabled="currentPage === totalPages">
              Sau
            </button>
          </div>

          <!-- Modal Component -->
          <div v-if="ShowModel" class="modal-overlay">
            <div class="modal-content">
              <h2>Tạo tài khoản học sinh</h2>
              <div class="form-group">
                <label>Mã học sinh</label>
                <input
                  v-model="newStudent.id"
                  type="text"
                  placeholder="Mã học sinh"
                />
              </div>
              <div class="toggle-switch">
                <span class="toggle-label">Trạng thái</span>
                <label class="switch">
                  <input
                    type="checkbox"
                    v-model="isActive"
                    @click="handleToggleChange"
                  />
                  <span class="slider round"></span>
                </label>
                <span class="toggle-text">{{
                  this.isActive ? "Bật" : "Tắt"
                }}</span>
              </div>
              <div class="form-group">
                <label>Họ và tên</label>
                <input
                  v-model="newStudent.name"
                  type="text"
                  placeholder="Nhập tên học sinh"
                />
              </div>
              <div class="form-group">
                <label>Giới tính</label>
                <select v-model="newStudent.gender">
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
              <div class="form-group">
                <label>Email</label>
                <input
                  v-model="newStudent.email"
                  type="email"
                  placeholder="Nhập email"
                />
              </div>
              <div class="form-group">
                <label>Số điện thoại</label>
                <input
                  v-model="newStudent.phone"
                  type="text"
                  placeholder="Nhập số điện thoại"
                />
              </div>
              <div class="form-group">
                <label>Chọn khối</label>
                <select v-model="newStudent.grade">
                  <option>Khối 10</option>
                  <option>Khối 11</option>
                  <option>Khối 12</option>
                </select>
              </div>
              <div class="form-group">
                <label>Chọn lớp</label>
                <select v-model="newStudent.class">
                  <option>Lớp 10A1</option>
                  <option>Lớp 11B2</option>
                </select>
              </div>
              <div class="form-actions">
                <button @click="ShowModel = false" class="cancel-btn">
                  Hủy
                </button>
                <button @click="createStudent" class="create-btn">
                  Tạo mới
                </button>
              </div>
            </div>
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
  components: {
    HeaderTemplate,
    sidebar,
  },
  name: "MagagementUser",
  data() {
    return {
      ShowModel: false,
      isActive: false,
      Action: "",
      searchQuery: "",
      newStudent: {
        id: "",
        name: "",
        gender: "Nam",
        email: "",
        phone: "",
        grade: "Khối 10",
        class: "Lớp 10A1",
        // status: "Ngưng hoạt động",
      },
      students: [
        // Dữ liệu mẫu
        {
          id: 1,
          name: "Nguyen Van Tuan",
          gender: "Nam",
          phone: "0386245555",
          email: "Tuan@gmail.com",
          createdDate: "1/4/2023",
          status: "Hoạt động",
        },
        {
          id: 2,
          name: "Hùng Hùng",
          gender: "Nam",
          phone: "0388665223",
          email: "hung@gmail.com",
          createdDate: "1/4/2023",
          status: "Hoạt động",
        },
        // Thêm nhiều dữ liệu sinh viên để thấy hiệu quả phân trang
        {
          id: 3,
          name: "Nguyen Thi Hoa",
          gender: "Nu",
          phone: "0905123456",
          email: "hoa@gmail.com",
          createdDate: "2/4/2023",
          status: "Hoạt động",
        },
        // ...
        {
          id: 100,
          name: "Le Van Binh",
          gender: "Nam",
          phone: "0912345678",
          email: "binh@gmail.com",
          createdDate: "10/4/2023",
          status: "Ngưng hoạt động",
        },
      ],
      currentPage: 1,
      itemsPerPage: 15,
    };
  },
  computed: {
    filteredStudents() {
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        return this.students.filter(
          (student) =>
            student.name.toLowerCase().includes(query) ||
            student.email.toLowerCase().includes(query) ||
            student.phone.toLowerCase().includes(query)
        );
      }
      return this.students;
    },
    paninatedStudent() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredStudents.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredStudents.length / this.itemsPerPage);
    },
  },
  methods: {
    createStudent() {
      const { id, name, phone, email } = this.newStudent;
      if (!id || !name || !email || !phone) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Email không đúng định dạng");
        return;
      }
      const newStudentEntry = {
        ...this.newStudent,
        createdDate: new Date().toLocaleDateString(), // Ngày tạo hiện tại
        status: this.isActive ? "Hoạt động" : "Ngưng hoạt động",
      };
      const isDuplicate = this.students.some(
        (student) => student.id === Number(id)
      );
      if (isDuplicate) {
        alert("Mã học sinh đã tồn tại");
        return;
      }
      this.students.push(newStudentEntry);
      this.ShowModel = false;
      this.newStudent = {
        id: "",
        name: "",
        gender: "Nam",
        email: "",
        phone: "",
        grade: "Khối 10",
        class: "Lớp 10A1",
      };
    },
    handleToggleChange() {
      this.isActive = !this.isActive;
      this.newStudent.status = this.isActive ? "Hoạt động" : "Ngưng hoạt động";
      // console.log(this.isActive);
    },
    deleteStudent(id) {
      const isConfirm = confirm("Bạn có chắc chắn muốn xóa học sinh này?");
      if (isConfirm) {
        this.students = this.students.filter((student) => student.id !== id);
      }
    },
    uploadAccounts() {
      alert("Tải lên tài khoản");
    },
    applyAction() {
      alert("Áp dụng hành động");
    },
    gotoPage(page) {
      this.currentPage = page;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style scoped>
.mcq-system {
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100vw;
  background-color: #f5f5f5;
}
.container {
  display: flex;
  flex: 1;
  width: 100%;
}

/* .sidebar
.sidebar {
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
  margin-bottom: 5px;
  align-items: left;
  display: flex;
}
.sidebar ul li a {
  color: #000;
  text-decoration: none;
  align-items: left;
  padding: 5px;
  /* font-weight: 700;
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
.sidebar ul li:active {
  color: #067ff9;
}
*/

/* ///content */
.content {
  width: 75%;
  padding: 10px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 100px;
}
.content-area {
  width: 80%;
  flex: 1;
  padding: 5px;
  float: right;
  background-color: rgba(0, 0, 0, 0.1);
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
  width: 10%;
  color: #000000;
  padding: 5px;
}
.toolbar button {
  background-color: #ff7f50;
  color: #fff;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow:  20px 2px 10px rgba(0, 0, 0, 0.1);
}
.toolbar button:hover {
  background-color: #ff6347;
}
.student-table {
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
.student-table th {
  background-color: #f8f9fa;
  color: #333;
  font-weight: 700;
  text-align: left;
  padding: 10px;
}
.student-table th,
.student-table td {
  /* overflow: hidden; */
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}
.student-table th {
  background-color: #f0f0f0; /* Màu nền riêng cho header */
  color: #333; /* Màu chữ */
  font-weight: 700;
}
/* //nut hoat dong */
.status-active {
  color: green;
  font-weight: bold;
}
.status-inactive {
  color: red;
  font-weight: bold;
}
/* nut xoa */
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
/* // Phân trang, chon trang */
.pagination {
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
}
/* tao tai khoan */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.modal-content h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ddd;
}


/* // toggle switch */
.toggle-switch {
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  gap: 10px;
}
.toggle-label {
  margin-right: 10px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #6d6d6d;
  transition: 0.4s;
  border-radius: 34px;
}
.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 4px;
  bottom: 3.5px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}
input:checked + .slider {
  background-color: #2196f3;
}
input:checked + .slider:before {
  transform: translateX(24px);
}

/* Nhung nut khac trong showmodel */
.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.cancel-btn {
  background-color: #ccc;
  color: #333;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.create-btn {
  background-color: #ff7f50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
