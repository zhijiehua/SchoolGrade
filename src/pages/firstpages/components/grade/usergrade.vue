<template>
  <div>1111</div>
</template>

<script>
export default {
  name: 'UserGrade',
  props: {
    theGrade: Object
  },
  mounted () {
    console.log(this.theGrade)
  }
}
</script>

<style scoped>

</style>
