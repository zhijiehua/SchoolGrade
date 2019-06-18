<template>
  <div class="firstpages">
    <div class="hello"><span>{{this.$store.state.username}}</span>您好!</div>
    <ul>
      <li class="list" v-if="!this.tors">查询自己成绩</li>
      <li class="list" v-if="this.tors">查询本班成绩</li>
      <li class="list" v-if="this.tors">添加学生学籍信息</li>
      <li class="list" v-if="this.tors">删除学生学籍信息</li>
      <li class="list" v-if="this.tors">录入成绩</li>
      <li class="list" v-if="this.tors">修改成绩</li>
      <li class="list" v-if="this.tors">查找指定某人的成绩</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Firstpages',
  data () {
    return {
      username: '',
      tors: ''
    }
  },
  mounted () {
    if (this.$store.state.tors === 'teacher') {
      this.tors = true
    } else {
      this.tors = false
    }
  }

}
</script>

<style scoped>
  .firstpages{
    background: #777777;
    height: 15rem;
  }
  .hello{
    padding: 1% 20%;
  }
  .list{
    width: 3rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background: blueviolet;
    margin: .1rem 2rem;
  }
</style>
