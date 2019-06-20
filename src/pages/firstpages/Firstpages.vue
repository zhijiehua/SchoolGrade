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
      axios.get('/api/gradeList.json')
        .then(this.getGradeListSucc)
    },
    getGradeListSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.gradeList = data.gradeList
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
