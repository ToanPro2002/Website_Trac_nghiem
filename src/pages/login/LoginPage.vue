<template>
  <div class="login-wrapper">
    <!-- Left side (Login Form) -->
    <div class="login-form">
      <h2>{{ $t('login') }}</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>{{ $t('email') }}</label>
          <input type="email" v-model="email" placeholder="Enter your email" required />
        </div>
        <div class="form-group">
          <label>{{ $t('password') }}</label>
          <input type="password" v-model="password" placeholder="Enter your password" required />
        </div>
        <div class="form-group">
          <button type="submit" @click="login" class="btn">{{ $t('sign_in') }}</button>
        </div>
        <div class="form-group toggle-switch">
          <label class="switch">
            <input type="checkbox" v-model="isAdmin" />
            <span class="slider"></span>
          </label>
            <span class="switch-label">{{ $t('admin') }}</span>
        </div>
        <div class="form-group">
          <label>{{ $t('language') }}</label>
          <select v-model="language" @change="changeLanguage">
            <option value="en">English</option>
            <option value="vi">Tiếng Việt</option>
          </select>
        </div>
      </form>
    </div>

    <!-- Right side (Info Section) -->
    <div class="login-info">
      <h3>{{ $t('System') }}</h3>
      <button class="forgot-password">{{ $t('forgot_password') }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      isAdmin: false,
      language: 'en'
    }
  },
  methods: {
    handleLogin() {
      if (this.email === 'admin@example.com' && this.password === 'password') {
        // Navigate to the admin page or user page or teacher page

      } else {
          alert('Incorrect email or password');
      }
    },
    changeLanguage() {
      this.$i18n.locale = this.language;
    }
  }
}
</script>

<style scoped>
/* Wrapper */
.login-wrapper {
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Left Side - Form */
.login-form {
  flex: 1;
  padding: 40px;
  background-color: #FEF3E2;

}

.login-form h2 {
  margin-bottom: 30px;
  font-size: 40px;
  color: #FA4032;
}

.form-group {
  margin-bottom: 15px;
  align-items: Left;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  float: left;
}

.form-group input[type="email"],
.form-group input[type="password"],
.form-group select {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.form-group .btn {
  width: 100%;
  padding: 10px;
  background-color: #FAB12F;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.form-group .btn:hover {
  background-color: #FA812F;
}

/* Switch (for Admin Checkbox) */
/* Toggle Switch Styles */
.toggle-switch {
  display: flex;
  align-items: center;

}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-right: 8px;
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
  background-color: #ccc;
  transition: 0.3s;
  border-radius: 10px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}

input:checked + .slider {
  background-color: #FA812F;
}

input:checked + .slider:before {
  transform: translateX(20px);
}

.switch-label {
  font-size: 1em;
  color: #333;
}


/* Right Side - Info */
.login-info {
  flex: 1;
  background-color: #FA812F;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  text-align: center;
}

.login-info h3 {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 20px;
}

.forgot-password {
  background: none;
  border: 1px solid #fff;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
}

.forgot-password:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
