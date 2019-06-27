<template>
  <div class="add" v-if="this.actionName === '3'">
    <div class="mesg">学号： <input type="text"></div>
    <div class="mesg">姓名： <input type="text"></div>
    <div class="mesg">班级： <input type="text"></div>
    <div class="mesg">语文： <input type="text"></div>
    <div class="mesg">数学： <input type="text"></div>
    <div class="mesg">英语： <input type="text"></div>
    <div class="mesg">体育： <input type="text"></div>
  </div>
</template>

<script>
export default {
  name: 'AddGrade',
  props: {
    actionName: String
  }
}
</script>

<style scoped>
  .add{
    position: absolute;
    right: 15rem;
    top: 1rem;
  }
  .mesg{
      margin-top: .3rem;
  }
</style>
