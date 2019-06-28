<template>
  <div class="home">
    <home-content
      :teacherList="teacherList"
      :studentList="studentList"
    >
    </home-content>
  </div>
</template>

<script>
import axios from 'axios'
import HomeContent from './components/Content'
export default {
  name: 'Home',
  components: {
    HomeContent
  },
  data () {
    return {
      password: '',
      yzm: '',
      teacherList: [],
      studentList: []
    }
  },
  methods: {
    getMemberList () {
      axios.get('/api/getStuPass')
        .then(this.getStuListSucc)
      axios.get('./api/getTeacPass')
        .then(this.getTeacListSucc)
    },
    getStuListSucc (res) {
      res = res.data
      if (res.message) {
        this.studentList = res.message
      }
    },
    getTeacListSucc (res) {
      res = res.data
      if (res.message) {
        this.teacherList = res.message
      }
    }
  },
  mounted () {
    this.getMemberList()
  }
}
</script>

<style scoped>
</style>
