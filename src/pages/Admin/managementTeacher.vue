<template>
  <div class="msq-system">
    <HeaderTemplate />
    <div class="Container">
      <sidebar />
      <div class="Container-content">
        <div class="search">
          <input type="text" placeholder="Tìm kiếm" v-model="searchQuery" />
          <button>Tìm kiếm</button>
          <button @click="ShowModel = true">Tạo tài khoản</button>
        </div>

        <table class="teacher-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Mã giáo viên</th>
              <th>Họ và tên</th>
              <th>Giới tính</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Ngày tạo</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="teacher in paninatedTeacher" :key="teacher.id">
              <td><input type="checkbox" /></td>
              <td>{{ teacher.id }}</td>
              <td>{{ teacher.name }}</td>
              <td>{{ teacher.gender }}</td>
              <td>{{ teacher.phone }}</td>
              <td>{{ teacher.email }}</td>
              <td>{{ teacher.createdDate }}</td>
              <td
                :class="
                  teacher.status === 'Hoạt động'
                    ? 'status-active'
                    : 'status-inactive'
                "
              >
                {{ teacher.status }}
              </td>
              <td>
                <button @click="deleteTeacher(teacher.id)" class="delete-btn">
                  Xóa
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- <div class="pagination">
          <button @click="prevPage" :disabled="currentPage === 1">Trước</button>
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
        </div> -->
        <paninatedPages
          :currentPage="currentPage"
          :pageSize="itemsPerPage"
          :questions="teachers"
          @update:currentPage="updateCurrentPage"
        />
        <div v-if="ShowModel" class="modal-overlay">
          <div class="modal-content">
            <h2>Tạo tài khoản giáo viên</h2>
            <div class="form-group">
              <label>Mã giáo viên</label>
              <input
                v-model="newTeacher.id"
                type="text"
                placeholder="Mã giáo viên"
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
                v-model="newTeacher.name"
                type="text"
                placeholder="Nhập tên giáo viên"
              />
            </div>
            <div class="form-group">
              <label>Giới tính</label>
              <select v-model="newTeacher.gender">
                <option>Nam</option>
                <option>Nữ</option>
              </select>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input
                v-model="newTeacher.email"
                type="email"
                placeholder="Nhập email"
              />
            </div>
            <div class="form-group">
              <label>Số điện thoại</label>
              <input
                v-model="newTeacher.phone"
                type="text"
                placeholder="Nhập số điện thoại"
              />
            </div>
            <div class="form-group">
              <label>Chọn khối</label>
              <select v-model="newTeacher.grade">
                <option>Khối 10</option>
                <option>Khối 11</option>
                <option>Khối 12</option>
              </select>
            </div>
            <div class="form-group">
              <label>Chọn lớp</label>
              <select v-model="newTeacher.class">
                <option>Lớp 10A1</option>
                <option>Lớp 11B2</option>
              </select>
            </div>
            <div class="form-actions">
              <button @click="ShowModel = false" class="cancel-btn">Hủy</button>
              <button @click="createTeacher" class="create-btn">Tạo mới</button>
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
import paninatedPages from "@/components/template_components/paninated.vue";
export default {
  name: "managementTeacher",
  components: {
    HeaderTemplate,
    sidebar,
    paninatedPages,
  },
  data() {
    return {
      searchQuery: "",
      ShowModel: false,
      isActive: false,
      newTeacher: {
        id: "",
        name: "",
        gender: "",
        phone: "",
        email: "",
        createdDate: "",
        status: "",
      },
      teachers: [
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
  methods: {
    createTeacher() {
      const { id, name, phone, email } = this.newTeacher;
      if (!id || !name || !email || !phone) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Email không đúng định dạng");
        return;
      }
      const newTeacherEntry = {
        ...this.newTeacher,
        createdDate: new Date().toLocaleDateString(), // Ngày tạo hiện tại
        status: this.isActive ? "Hoạt động" : "Ngưng hoạt động",
      };
      const isDuplicate = this.teachers.some(
        (teacher) => teacher.id === Number(id)
      );
      if (isDuplicate) {
        alert("Mã học sinh đã tồn tại");
        return;
      }
      this.teachers.push(newTeacherEntry);
      this.ShowModel = false;
      this.newTeacher = {
        id: "",
        name: "",
        gender: "Nam",
        email: "",
        phone: "",
        grade: "Khối 10",
        class: "Lớp 10A1",
      };
    },
    updateCurrentPage(page) {
      this.currentPage = page;
    },
    deleteTeacher(id) {
      const isConfirm = confirm("Bạn có chắc chắn muốn xóa học sinh này?");
      if (isConfirm) {
        this.teachers = this.teachers.filter((teacher) => teacher.id !== id);
      }
    },
    handleToggleChange() {
      this.isActive = !this.isActive;
      this.newTeacher.status = this.isActive ? "Hoạt động" : "Ngưng hoạt động";
      // console.log(this.isActive);
    },
  },
  computed: {
    filteredTeachers() {
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        return this.teachers.filter(
          (teacher) =>
            teacher.name.toLowerCase().includes(query) ||
            teacher.email.toLowerCase().includes(query) ||
            teacher.phone.toLowerCase().includes(query)
        );
      }
      return this.teachers;
    },

    paninatedTeacher() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredTeachers.slice(start, end);
    },
  },
  mounted() {
    // Any DOM manipulation should be done here
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
  flex: 1;
  width: 100%;
}
.Container-content {
  width: 80%;
  flex: 1;
  padding: 5px;
  float: right;
  background-color: rgba(0, 0, 0, 0.1);
}
.search {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
}
.search input {
  width: 15%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.search button {
  width: 15%;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #ff7300;
  color: #fff;
}
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
.teacher-table {
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
.teacher-table th {
  background-color: #f8f9fa;
  color: #333;
  font-weight: 700;
  text-align: left;
  padding: 10px;
}
.teacher-table th,
.teacher-table td {
  /* overflow: hidden; */
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}
.teacher-table th {
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
.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 20px;
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
