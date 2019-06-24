<template>
  <div class="firstpages">
    <div class="hello"><span>{{this.$store.state.mesg.split("|")[0]}}</span>您好!</div>
    <ul>
      <li class="list" v-if="!this.tors" @click="selfGrade">查询自己成绩</li>
      <li class="list" v-if="!this.tors" @click="classGrade">查询本班成绩</li>
      <li class="list" v-if="!this.tors" @click="addMesg">添加学生学籍信息</li>
      <li class="list" v-if="!this.tors" @click="deleteMesg">删除学生学籍信息</li>
      <li class="list" v-if="!this.tors" @click="addAllGrade">录入成绩</li>
      <li class="list" v-if="!this.tors" @click="changeGrade">修改成绩</li>
      <li class="list" v-if="!this.tors" @click="findGradeAccdName">查找指定某人的成绩</li>
    </ul>
    <user-grade :theGrade="this.theGrade" :actionName="this.actionName"></user-grade>
  </div>
</template>

<script>
import UserGrade from './grade/usergrade'
export default {
  name: 'FirstpagesList',
  data () {
    return {
      username: '',
      tors: '',
      theGrade: {
        'name': '',
        'chinese': '',
        'math': '',
        'English': '',
        'te': ''
      },
      actionName: ''
    }
  },
  components: {
    UserGrade
  },
  props: {
    gradeList: Array
  },
  methods: {
    selfGrade () {
      for (var i = 0; i < this.gradeList.length; i++) {
        if (this.gradeList[i].username === this.$store.state.mesg.split('|')[0]) {
          this.theGrade.name = this.gradeList[i].name
          this.theGrade.chinese = this.gradeList[i].chinese
          this.theGrade.math = this.gradeList[i].math
          this.theGrade.English = this.gradeList[i].English
          this.theGrade.te = this.gradeList[i].te
          break
        }
      }
      this.actionName = '1'
      console.log(this.theGrade)
    },
    classGrade () {
      console.log('2')
    },
    addMesg () {
      console.log('3')
    },
    deleteMesg () {
      console.log('4')
    },
    addAllGrade () {
      console.log('5')
    },
    changeGrade () {
      console.log('6')
    },
    findGradeAccdName () {
      console.log('7')
    }
  },
  mounted () {
    if (this.$store.state.mesg.shengfen === 'teacher') {
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
