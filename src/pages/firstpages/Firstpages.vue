<template>
  <div class="firstpages">
    <firstpages-list :gradeList="gradeList"></firstpages-list>
  </div>
</template>

<script>
import axios from 'axios'
import FirstpagesList from './components/List'
export default {
  name: 'Firstpages',
  data () {
    return {
      gradeList: []
    }
  },
  components: {
    FirstpagesList
  },
  methods: {
    getGradeList () {
      axios.get('/api/getAllGrade')
        .then(this.getGradeListSucc)
    },
    getGradeListSucc (res) {
      res = res.data
      console.log(res)
      if (res.message) {
        this.gradeList = res.message
      }
    }
  },
  mounted () {
    this.getGradeList()
  }
}
</script>

<style scoped>
</style>
