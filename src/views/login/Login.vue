<template>
  <div class="Login">
    <input type="text" placeholder="请输入账号(测试账号：admin)" v-model="userName" class="item">
    <input type="password" placeholder="请输入密码(测试密码：123456)" v-model="userPwd" class="item">
    <div class="loginBtn" @click="goLogin">登录</div>
  </div>
</template>

<script>
import "@/assets/img/tabbar/iconfont.css"
import { checkLogin } from '@/network/user'
import axios from 'axios'

export default {
  name: 'Login',
  components: {
  },
  data() {
    return {
      userName: '',
      userPwd: ''
    }
  },
  methods: {
    goLogin() {
      checkLogin({ userName: this.userName, userPwd: this.userPwd }).then(res => {
        if (res) {
          this.$router.push('/home')
          this.userName = ''
          this.userPwd = ''
        } else {
          this.$toast.show('账号或密码错误', 3000)
        }
        // this.$router.push('/home')
      }).catch(err => {
        this.$toast.show(err, 3000)
      })
    }
  }
}
</script>

<style scoped>
  .Login {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px
  }
  .Login .item {
    margin-bottom: 30px;
    padding-bottom: 5px;
    border-left:none;
    border-top: none;
    border-right: none;
    outline-style: none;
    width: 67%
  }
   .Login .loginBtn {
    background:rgb(199, 37, 24);
    color: rgb(255, 254, 253);
    padding: 10px 0;
    border-radius: 20px;
    text-align: center;
    width: 67%
  }
   input::-webkit-input-placeholder {
      /* placeholder颜色  */
      color: #aab2bd;
      /* placeholder字体大小  */
      font-size: 14px;
    }
</style>
