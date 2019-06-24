<template>
  <div>
    <table class="table" v-if="this.actionName == 1">
      <tr>
        <th>名字</th>
        <th>语文</th>
        <th>数学</th>
        <th>英语</th>
        <th>体育</th>
      </tr>
      <tr>
        <td>{{this.theGrade.name}}</td>
        <td>{{this.theGrade.chinese}}</td>
        <td>{{this.theGrade.math}}</td>
        <td>{{this.theGrade.English}}</td>
        <td>{{this.theGrade.te}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UserGrade',
  props: {
    theGrade: Object,
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
