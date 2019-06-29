<template>
  <div v-if="this.actionName === '3'" class="add">
    <div class="list">班级：<input type="text" v-model="gradeList.class"><span v-if="this.showList.class === '1'">请输入班级</span></div>
    <div class="list">名字：<input type="text" v-model="gradeList.name"><span v-if="this.showList.name === '1'">请输入名字</span></div>
    <div class="list">语文：<input type="text" v-model="gradeList.chinese"><span v-if="this.showList.chinese === '1'">请输入语文成绩</span></div>
    <div class="list">数学：<input type="text" v-model="gradeList.math"><span v-if="this.showList.math === '1'">请输入数学成绩</span></div>
    <div class="list">英语：<input type="text" v-model="gradeList.English"><span v-if="this.showList.English === '1'">请输入英语成绩</span></div>
    <div class="list">体育：<input type="text" v-model="gradeList.te"><span v-if="this.showList.te === '1'">请输入体育成绩</span></div>
    <div class="button" @click="handleAdd">添加</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AddGrade',
  props: {
    actionName: String
  },
  data () {
    return {
      gradeList: {
        class: '',
        name: '',
        chinese: '',
        math: '',
        English: '',
        te: ''
      },
      showList: {
        class: '',
        name: '',
        chinese: '',
        math: '',
        English: '',
        te: ''
      }
    }
  },
  methods: {
    handleAdd () {
      if (this.gradeList.class === '') this.showList.class = '1'
      if (this.gradeList.name === '') this.showList.name = '1'
      if (this.gradeList.chinese === '') this.showList.chinese = '1'
      if (this.gradeList.math === '') this.showList.math = '1'
      if (this.gradeList.English === '') this.showList.English = '1'
      if (this.gradeList.te === '') this.showList.te = '1'
      const x = this.showList
      if (x.class !== '1' && x.name !== '1' && x.chinese !== '1' && x.math !== '1' && x.English !== '1' && x.te !== '1') {
        this.presentation()
      }
    },
    presentation () {
      let Add = confirm('确定要添加吗?')
      if (Add === true) {
        this.transmit()
      }
    },
    transmit () {
      axios.post('/addGrade', this.gradeList).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
  .add{
    position: absolute;
    right: 15rem;
    top: 1rem;
    border: .01rem #666666 solid;
  }
  .list{
    margin: .3rem;
    margin-left: .5rem;
  }
  .button{
    margin: .2rem;
    margin-left: .8rem;
    background: #666666;
    width: 4rem;
    line-height: .5rem;
    text-align: center;
  }
  span{
    color: red;
  }
</style>
