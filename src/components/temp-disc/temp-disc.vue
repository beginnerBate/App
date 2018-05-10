<template>
  <transition name="slide">
    <div class="temp-list">
      <header class="home-top">
        <span class="fa fa-angle-left back" @click="back()">
          <span class="back-num">{{bedId}}号床</span>
        </span>
        <span class="name">体温记录</span>
      </header>
      <ul class="temp-record-list">
        <li v-for="(item,index) in list" :key="index">
          <span class="id">
            {{index+1}}
          </span>
          <span>
            温度: {{item.temperatureValue}}℃
          </span>
          <span>
            记录时间: 2017-12-02 12:12:00
          </span>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
import {mapState} from 'vuex'
import {formatDate} from 'common/js/date.js'
import {getTempByBed} from 'api/getTemp.js'
export default {
  data() {
    return {
      list: '',
      currentPage:1
    }
  },
  computed: {
    ...mapState({
      bedId: state=> state.bedId
    })
  },
  filters: {
    formatDate(time) {
      let date = new Date(time)
      return formatDate(date, 'YY-MM-DD hh:mm:ss')
      }
  },
  created () {
    this.loadData()
  },  
  mounted(){
  },
  methods: {
    back() {
      this.$router.push({path:'/home/temp'})
    },
    loadData () {
      console.log(this.$route.params.id)
      getTempByBed(this.$route.params.id).then((res)=>{
          if (res.code==200) {
            this.list = res.data
          }
        })
    }
  },
}
</script>
<style lang="stylus" scoped>
.slide-enter-active, .slide-leave-active
  transition: all 0.3s
.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
.temp-list
  position: fixed
  z-index: 100
  top: 0
  left: 0
  bottom: 0
  right: 0
  background #ffffff
  .home-top
    display flex
    .back
      padding 12px 16px
    .name
      flex 1
      text-align center
.temp-record-list
  li
    color #576b95
    padding 12px 16px
    display flex
    justify-content space-around
    font-size 12px
    border-bottom 1px solid #d9d9d9
    span
      display flex
      align-items center
      justify-content center
    .id
      font-size 10px
      width 20px
      height 20px
      background #e3e5e8
      border-radius 50%
</style>
