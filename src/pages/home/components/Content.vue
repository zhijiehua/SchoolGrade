<template>
  <div class="home">
    <h1 class="title">教务信息管理系统</h1>
    <form action="" method="post" class="theform">
      <div class="form-kind">
        登陆分类：
        <input @click="handlestudent"  type="radio" value="student" name="all" checked="checked" ref="student">学生
        <input @click="handleteacher"  type="radio" value="teacher" name="all" ref="teacher">老师
      </div>
      <ul>
        <li class="form-n">
          用户名：
          <input type="text" v-model="username" size="15" maxlength="10">
          <span class="info" v-if="flag === 2">用户不存在</span>
        </li>
        <li class="form-n">
          密&nbsp;&nbsp; 码：
          <input type="password" size="15" maxlength="10" v-model="password">
          <span class="info" v-if="flag === 1">密码错误</span>
        </li>
        <li class="form-n">
          验证码：
          <input type="text" size="10" maxlength="4" v-model="yzm">
          <span class="yzm">111111</span>
        </li>
      </ul>
      <div class="button" @click="handleClickButton">登陆</div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HomeContent',
  data () {
    return {
      username: '',
      password: '',
      yzm: '',
      flag: '',
      shengfen: 'student'
    }
  },
  props: {
    teacherList: Array,
    studentList: Array
  },
  methods: {
    handleteacher () {
      this.shengfen = 'teacher'
    },
    handlestudent () {
      this.shengfen = 'student'
    },
    handleClickButton () {
      // flag = 0；登陆成功
      // flag = 1; 密码不存在
      // flag = 2; 用户不存在
      let flag = 2
      let List = this.shengfen === 'student' ? this.studentList : this.teacherList
      alert(List)
      for (var i = 0; i < List.length; i++) {
        if (this.username === List[i]['username']) {
          if (this.password === List[i]['password']) {
            flag = 0
          } else {
            flag = 1
          }
          break
        }
      }

      this.flag = flag

      if (flag === 0) {
        this.$router.push({
          path: '/firstpages',
          name: 'Firstpages'
        })
        this.$store.state.username = this.username
      }
      if (flag === 1) {
        this.password = ''
      }
      if (flag === 2) {
        this.password = ''
        this.username = ''
      }
    }
  }
}
</script>

<style scoped>
  .title{
    font-size: 1rem;
    color: #6788f6;
    margin-left: 7rem;
    margin-top: 4rem;
  }
  .theform{
    border: .2rem red solid;
    width: 15rem;
    margin-left: 7rem;
    margin-top: .1rem;
    background: #999999;
  }
  .form-kind{
    margin: .2rem .5rem;
  }
  .form-n{
    margin: .2rem .2rem;
  }
  .yzm{
    width: .5rem;
    height: .2rem;
    background: #000000;
  }
  .button{
    margin-left: 3rem;
  }
  .info{
    color: red
  }
</style>
