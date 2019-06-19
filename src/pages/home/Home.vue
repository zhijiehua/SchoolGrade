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
      axios.get('/api/memberList.json')
        .then(this.getMemberListSucc)
    },
    getMemberListSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.teacherList = data.teacherList
        this.studentList = data.studentList
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
