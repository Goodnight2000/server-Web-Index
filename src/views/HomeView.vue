<script setup lang="ts">
import { ref } from 'vue';
const text: string[] = "Welcome".split("")
const welcome = ref<string>("")
const userinfo = ref<{
  username: string,
  password: string
}>({
  username: "",
  password: ""
})
let listShow: boolean = false
let menuShow: boolean = false
let loginStatus: boolean = false
for (let i = 0; i < text.length; i++) {
  setTimeout(() => {
    welcome.value = welcome.value.replace('_', '');
    welcome.value = welcome.value + text[i] + "_";
  }, i * 150);
};

setTimeout(() => {
  listShow = true
  setInterval(() => {
    if (welcome.value == "Welcome") {
      welcome.value = welcome.value + "_"
    } else {
      welcome.value = welcome.value.replace("_", "")
    }
  }, 500);
  setTimeout(() => {
    menuShow = true
  }, 1000);
}, 900);


function Login() {
  loginStatus = true
  console.log(userinfo.value);

}


</script>

<template>
  <div class="pageBox">
    <div :style="{ width: (listShow ? '70vw' : '30vw') }" class="pageContent">
      <div style="" class="welcomeBox"
        :style="{ width: (listShow ? '50%' : '100%'), fontSize: (listShow ? '40px' : '50px') }">
        <div class="welcome">{{ welcome }}</div>
      </div>
      <div style="width: 50%;"></div>
      <div class="menu" v-show="listShow" :style="{ opacity: (menuShow ? '1' : '0') }">
        <el-row>
          <el-col :span="24">
            <div style="font-weight: bold;">Login</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-input v-model="userinfo.username" placeholder="Username" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-input v-model="userinfo.password" type="password" placeholder="Password" show-password />
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="24" style="text-align: right;" >
            <el-button type="primary" :loading="loginStatus" @click="Login">Sign In</el-button>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="24" style="text-align: right;" >
            <el-button type="primary" :loading="loginStatus" @click="Login">Sign Up</el-button>
          </el-col>
        </el-row>
      </div>

    </div>
  </div>
</template>

<style>
.el-row {
  margin-bottom: 20px;
}

.welcome {
  user-select: none;

  font-weight: bold;
  transition: 1s;
  width: 200px;
  margin: 0 auto;
}

.welcomeBox {
  transition: 1s;
  position: absolute;
  z-index: 2;
  border-radius: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

}

.pageBox {
  width: 100%;
  display: flex;
  align-items: center;
  background: url("../../public/images/login/background.png") no-repeat center top;
  background-size: cover;
  justify-content: center;
  height: 100%;

}



.pageContent {
  display: flex;
  border-radius: 20px;
  align-items: center;
  width: 70vw;
  height: 70vh;
  min-width: 350px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 5px black;
  transition: 1s;
  position: relative;

}

.menu {
  transition: 1s;
  padding: 0 10%;
  width: 50%;
}
</style>
