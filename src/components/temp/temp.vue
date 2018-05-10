<template>
  <div class="m-alarm" ref="wrapper">
    <div>
      <!-- 顶部提示信息 -->
      <div class="top-tip">
        <span class="refresh" v-show="text">{{text}}</span>
      </div>
      <!-- 列表 -->
      <ul class="list-content list-content-hook">
        <li v-for="(item, index) in list" :key="index" class="list-item" @click="seltItem(22)">
          <div class="list-item-wrapper">
            <div class="list-item-left">              
              <span class="bed">
                {{item.bedNumber}}床
              </span>
            </div>
            <div class="list-item-center">
              <span class="bed-num">
                体温: {{item.temperatureValue}}℃
              </span>
               <span class="time">{{item.recordTime | formatDate}}</span>
            </div>
            <div  class="list-item-bottom">
              <i class="fa fa-angle-right arrow"></i>
            </div>
          </div>
        </li>
      </ul>
      <!-- 
        1. 底部提示信息
        2. 这里有一种情况 没有更多数据的时候 文本显示''暂无更多数据'
       -->
       <!-- <div class="bottom-tip">
         <span class="loading-hook">暂无更多数据</span>
       </div> -->
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import {getTemp} from 'api/getTemp.js'
import {formatDate} from 'common/js/date.js'
export default {
  data() {
    return {
      text: '',
      list:''
    }
  },
  filters: {
    formatDate(time) {
      let date = new Date(time)
      return formatDate(date, 'hh:mm:ss')
      }
  },
  created() {
    this.pullup()
    this.loadData()
  },
  methods: {
    loadData () {
      getTemp().then((res)=>{
        if (res.code==200) {
          this.list = res.data
        }
      })
    },
    pullup() {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            pullDownRefresh:{
              threshold:50,
              stop:0
            },
            pullUpLoad:{
              threshold:-10
            },
            click:true
          })
          this.scroll.on('pullingDown', () => {
            // 下拉动作
            console.log('pullup')
            this.text = '加载中'
            setTimeout(()=>{
              this.text = '刷新成功'
               this.scroll.finishPullDown()
            },2000)
           
          })
          this.scroll.on('pullingUp', () => {
            console.log('pullingup')
            this.scroll.finishPullDown()
          })
        } else {
          this.scroll.refresh()
        }
        })
    },
    seltItem(id) {
      console.log(id)
      this.$router.push({
        path:`/home/temp/${id}`
      })
      // 设置数据
       this.$store.commit('setbedId',id)
    }
  }
}
</script>
<style lang="stylus" scoped>
.m-alarm
  height 100%
  overflow hidden
.list-item
  padding 9px 6px
  border-bottom 1px solid  #d9d9d9
.list-item:first-child
  border-top 1px solid  #d9d9d9
.list-item-wrapper
  display flex
.list-item-center
  flex 1
  padding 0 16px
  align-items center
  display flex
  .bed-num
    flex 1
.list-item-wrapper>div>span
  display inline-block
.list-item-bottom
  display flex
  align-items center
.bed
  width 50px
  height 50px
  line-height 46px
  border-radius 50%
  font-size 12px
  color #2782d7
  text-align center
  border: 2px solid #2782d7;
.alarm-icon{
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  transform: scale(.2);
  transform-origin: 35% 38%;
}
.alarm-icon i {
  display: inline-block;
}
.alarm-icon>.light{
  position: absolute;
  width: 10px;
  height: 30px;
  border-radius: 10px;
  background-color:#ff9600;
}
.alarm-icon>.light:first-child{
  transform-origin: 0% 100%;
  top:0;
  left: 10px;
  transform: rotate(-45deg);
}
.alarm-icon>.light:nth-child(2){
  top:-6px;
  left: 25px;
}
.alarm-icon>.light:nth-child(3){
  top:0;
  right: 10px;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}
.alarm-icon>.main{
  position: absolute;
  top:30px;
  left:0;
  width: 60px;
  height: 65px;
  background: #e44d26; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #e44d26, #f16529); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #e44d26, #f16529); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}
.alarm-icon>.bottom{
  position: absolute;
  top:95px;
  left: -10px;
  width: 80px;
  height: 25px;
  background: #da1c1c;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.myanimate{
  width: 119px;
  height: 120px;
  border-radius: 50%;
  animation: myfirst 2s ease infinite;
  filter: blur(25px);
  left: -31px;
  top: -7px;
  position: absolute;
  background: #ff0000;
}
</style>

