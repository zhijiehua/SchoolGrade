<template>
  <div class="home">
    <h1 class="title">教务信息管理系统</h1>
    <form action="" method="post" class="theform">
      <div class="form-kind">
        登陆分类：
        <input  type="radio" value="student" name="all" checked="checked">学生
        <input  type="radio" value="teacher" name="all">老师
      </div>
      <ul>
        <li class="form-n">
          用户名：
          <input type="text" v-model="username" size="15" maxlength="10">
        </li>
        <li class="form-n">
          密&nbsp;&nbsp; 码：
          <input type="password" size="15" maxlength="10" v-model="password">
        </li>
        <li class="form-n">
          验证码：
          <input type="text" size="10" maxlength="4" v-model="yzm">
          <span class="yzm">111111</span>
        </li>
      </ul>
      <button class="from-n">登陆</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      username: '',
      password: '',
      yzm: ''
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
  button{
    margin-left: .5rem;
  }
</style>
