<template>
  <div class="toggle-switch">
    <span class="toggle-label">{{ isActive}}</span>
    <label class="switch">
      <input type="checkbox" v-model="isChecked" @change="handleToggleChange" />
      <span class="slider round"></span>
    </label>
    <span class="toggle-text">{{ toggleText }}</span>
  </div>
</template>

<script>

export default {
  props: {
    isActive: {
      type: String,
      default: "Trạng thái",
    },
    toggleText: {
      type: String,
      default: "Đáp án đúng",
    },
    // isActive: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  watch: {
    isActive(newValue) {
      this.isChecked = newValue; // Cập nhật khi prop thay đổi
    },
  },
  data() {
    return {
      isChecked: this.isActive,
    };
  },
  methods: {},
  handleToggleChange() {
    this.$emit("change", this.isChecked);
    // this.isActive = !this.isActive;
    // this.newStudent.isActive = this.isActive ? "Hoạt động" : "Ngưng hoạt động";
    // console.log(this.isActive);
  },
};
</script>
<style>
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
  background-color: #ff7700;
}
input:checked + .slider:before {
  transform: translateX(24px);
}
</style>
