<template>
  <div v-if="showModel" class="modal-overlay">
    <div class="modal-content">
      <h2>{{ title }}</h2>
      <div class="form-group">
        <label>Mã giáo viên</label>
        <input v-model="localTeacherData.id" type="text" placeholder="Mã giáo viên" />
      </div>

      <div class="toggle-switch">
        <span class="toggle-label">Trạng thái</span>
        <label class="switch">
          <input type="checkbox" v-model="localIsActive" @click="handleToggleChange" />
          <span class="slider round"></span>
        </label>
        <span class="toggle-text">{{ localIsActive ? "Bật" : "Tắt" }}</span>
      </div>

      <div class="form-group">
        <label>Họ và tên</label>
        <input v-model="localTeacherData.name" type="text" placeholder="Nhập tên giáo viên" />
      </div>

      <div class="form-group">
        <label>Giới tính</label>
        <select v-model="localTeacherData.gender">
          <option>Nam</option>
          <option>Nữ</option>
        </select>
      </div>

      <div class="form-group">
        <label>Email</label>
        <input v-model="localTeacherData.email" type="email" placeholder="Nhập email" />
      </div>

      <div class="form-group">
        <label>Số điện thoại</label>
        <input v-model="localTeacherData.phone" type="text" placeholder="Nhập số điện thoại" />
      </div>

      <div class="form-group">
        <label>Chọn khối</label>
        <select v-model="localTeacherData.grade">
          <option>Khối 10</option>
          <option>Khối 11</option>
          <option>Khối 12</option>
        </select>
      </div>

      <div class="form-group">
        <label>Chọn lớp</label>
        <select v-model="localTeacherData.class">
          <option>Lớp 10A1</option>
          <option>Lớp 11B2</option>
        </select>
      </div>

      <div class="form-actions">
        <button @click="cancel" class="cancel-btn">Hủy</button>
        <button @click="createTeacher" class="create-btn">Tạo mới</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormShowModel",
  props: {
    showModel: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "Tạo tài khoản giáo viên"
    },
    teacherData: {
      type: Object,
      default: () => ({
        id: "",
        name: "",
        gender: "Nam",
        email: "",
        phone: "",
        grade: "Khối 10",
        class: "Lớp 10A1"
      })
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:showModel", "create-teacher", "update:isActive", "update:teacherData"],
  data() {
    return {
      localTeacherData: { ...this.teacherData },
      localIsActive: this.isActive
    };
  },
  methods: {
    cancel() {
      this.$emit("update:showModel", false);
    },
    createTeacher() {
      this.$emit("create-teacher", this.localTeacherData);
      this.$emit("update:showModel", false);
    },
    handleToggleChange() {
      this.$emit("update:isActive", this.localIsActive);
    }
  },
  watch: {
    teacherData: {
      handler(newValue) {
        this.localTeacherData = { ...newValue };
      },
      deep: true,
      immediate: true
    },
    isActive(newValue) {
      this.localIsActive = newValue;
    }
  }
};
</script>

<style scoped>
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

.toggle-switch {
  display: flex;
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