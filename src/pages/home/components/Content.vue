<template>
  <div class="home">
    <h1 class="title">教务信息管理系统</h1>
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561391667286&di=2cfc2665f50186ec43d1a515e2feb1bd&imgtype=0&src=http%3A%2F%2Fwww.uimaker.com%2Fuploads%2Fuserup%2F0%2F1413012235-43G.png" alt="">
    <div class="theform">
      <div class="form-kind">
        <div @click="handlestudent"  type="radio" value="student" name="all" checked="checked" ref="student" class="shengfen stu">学生</div>
        <div @click="handleteacher"  type="radio" value="teacher" name="all" ref="teacher" class="shengfen teac">老师</div>
      </div>
      <ul>
        <li class="form-n">
          <div class="pic"><span class="iconfont">&#xe801;</span></div>
          <input type="text" v-model="username" size="15" maxlength="10">
          <span class="info" v-if="flag === 2">用户不存在</span>
        </li>
        <li class="form-n password">
          <div class="pic"><span class="iconfont">&#xe63a;</span></div>
          <input type="password" size="15" maxlength="10" v-model="password">
          <span class="info" v-if="flag === 1">密码错误</span>
        </li>
      </ul>
      <div class="button" @click="handleClickButton">登陆</div>
    </div>
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
      this.$refs.student.style.background = '#cccccc'
      this.$refs.teacher.style.background = '#666666'
    },
    handlestudent () {
      this.shengfen = 'student'
      this.$refs.student.style.background = '#666666'
      this.$refs.teacher.style.background = '#cccccc'
    },
    handleClickButton () {
      // flag = 0；登陆成功
      // flag = 1; 密码不存在
      // flag = 2; 用户不存在
      let flag = 2
      let List = this.shengfen === 'student' ? this.studentList : this.teacherList
      for (var i = 0; i < List.length; i++) {
        if (this.username === List[i]['username']) {
          if (this.password === List[i]['password']) {
            flag = 0
            let mesg = this.username + '|' + this.shengfen
            this.$store.dispatch('peopleIn', mesg)
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
  .home{
    height: 10rem;
    width: 15rem;
    margin-top: 1rem;
    margin-left: 23%;
  }
  .title{
    font-size: .5rem;
    color: #6788f6;
    margin-left: 5rem;
  }
  .shengfen{
    position: absolute;
    top: .2rem;
    width: 1.8rem;
    text-align: center;
    line-height: .5rem;
  }
  .stu{
    left: .7rem;
    background: #666666;
  }
  .teac{
    right: 1.35rem;
    background: #cccccc;
  }
  img{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .theform{
    position: absolute;
    border: .02rem #666666 solid;
    width: 5.5rem;
    left: 12rem;
    top: 5rem;
  }
  .form-kind{
    margin: .2rem .5rem;
  }
  .form-n{
    margin-top: .8rem;
    margin-left: .7rem;
  }
  .password{
    margin-top: .2rem;
  }
  .button{
    margin-left: .7rem;
    line-height: .5rem;
    width: 3.5rem;
    margin-top: .2rem;
    margin-bottom: .2rem;
    text-align: center;
    background: #009999;
  }
  .pic{
    float: left;
    width: .7rem;
    height: .47rem;
    line-height: .47rem;
    background: #666006;
    text-align: center;
  }
  .info{
    color: red;
    font-size: .01rem;
  }
</style>
