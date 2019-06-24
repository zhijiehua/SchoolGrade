<template>
  <div>
    <table class="table" v-if="this.actionName == 2">
      <tr>
        <th>班级</th>
        <th>名字</th>
        <th>语文</th>
        <th>数学</th>
        <th>英语</th>
        <th>体育</th>
      </tr>
      <tr v-for="item in this.gradeList" :key="item.username">
        <td>{{item.class}}</td>
        <td>{{item.name}}</td>
        <td>{{item.chinese}}</td>
        <td>{{item.math}}</td>
        <td>{{item.English}}</td>
        <td>{{item.te}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ClassGrade',
  props: {
    gradeList: Array,
    actionName: String
  }
}
</script>

<style scoped>
  .table{
    position: absolute;
    right: 15rem;
    top: 1rem;
    background: red;
    border: .1rem #000000 solid;
  }
  th, td{
    border: .05rem #000000 solid;
    width: 1rem;
    height: .5rem;
    line-height: .5rem;
    text-align: center;
  }
</style>
