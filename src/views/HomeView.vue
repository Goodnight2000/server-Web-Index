

<template>
  <div class="pageBox" >
    <div :style="{ width: (listShow ? '70vw' : '30vw') }" class="pageContent">
      <div style="" class="welcomeBox"
        :style="{ width: (listShow ? '50%' : '100%'), fontSize: (listShow ? '40px' : '50px') }">
        <div class="welcome">{{ welcome }}</div>
      </div>
      <div style="width: 50%;"></div>
      <div class="menu" v-show="listShow" :style="{ opacity: (menuShow ? '1' : '0') }">
        <el-row>
          <el-col :span="24">
            <div style="font-weight: bold;">Login to your account</div>
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
              <div style="font-weight: bold;">
                Don't have an account?<span style="color:  #24B8DB ;cursor: pointer;"> Sign Up</span>
              </div>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="24" style="text-align: right;" >
            <el-button type="primary" :loading="loginStatus" @click="Login">Sign In</el-button>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="24" style="text-align: right;" >

          </el-col>
        </el-row>
      </div>

    </div>
  </div>
</template>
<script setup lang="ts">

import {onMounted, ref } from 'vue';
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
const loginStatus= ref<boolean>(false)

onMounted(()=>{
  TextInput();
})

for (let i = 0; i < text.length; i++) {
  setTimeout(() => {
    welcome.value = welcome.value.replace('_', '');
    welcome.value = welcome.value + text[i] + "_";
  }, i * 150);
};
function TextInput(){
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

}
function Login() {
  loginStatus.value = true
  console.log(userinfo.value);
  console.log(loginStatus);
}


</script>
<style scoped>
@import url('/css/login.css');
</style>
