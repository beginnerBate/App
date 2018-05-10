<template>
  <transition name="slide">
    <div class="temp-list">
      <header class="home-top">
        <span class="fa fa-angle-left back" @click="back()">
          <span class="back-num">{{bedId}}号床</span>
        </span>
        <span class="name">体温记录</span>
      </header>
      <div class="list" ref="disclist">
        <div>
          <!-- 下拉刷新 -->
           <div class="top-tip"></div>
           <div>
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
           <!-- 上拉加载更多 -->
           <div class="bottom-tip">
             <span class="loading-hook">{{bottomTxt}}</span>
           </div>
          <div v-show="list.length" class="loading-container">
            <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import {mapState} from 'vuex'
import {formatDate} from 'common/js/date.js'
import {getTempByBed} from 'api/getTemp.js'
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      list: [],
      currentPage:1,
      scrollY:0,
      bottomTxt:'',
      topTxt:'',
      pulldown:true,
      pullup:true
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
  components:{
    VScroll
  },
  created () {
    this.loadData()
    this.probeType = 3
    this.listenScroll = true
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
    },
    _initScroll() {
        this.discScroll = new BScroll(this.$refs.disclist, {
          probeType: 3,    
          click:true,
          pullUpLoad: {   // 配置上啦加载
            threshold: -80   //上啦80px的时候加载
          },
          pullDownRefresh: {
            threshold: 50,
            stop: 20
          },
          mouseWheel: {    // pc端同样能滑动
            speed: 20,
            invert: false
          },
          useTransition:false,  // 防止iphone微信滑动卡顿
        });
        // 上拉加载数据
        this.orderScroll.on('pullingUp',()=>{
          this.scrollFinish = false;
          // 防止一次上拉触发两次事件,不要在ajax的请求数据完成事件中调用下面的finish方法,否则有可能一次上拉触发两次上拉事件
          this.orderScroll.finishPullUp();
          // 加载数据
          this.getIncomeDetail(this.nextPage);
        });
    }
  }
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
.list
  position: fixed
  top: 45px
  bottom: 0
  width: 100%
  overflow hidden
.loading-container
  position: fixed
  width: 100%
  top: 50%
  transform: translateY(-50%)
</style>
