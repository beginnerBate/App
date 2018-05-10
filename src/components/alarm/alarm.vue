<template>
  <div class="m-alarm">
    <div>
      <!-- 顶部提示信息 -->
      <div class="top-tip">
        <span class="refresh">下拉刷新</span>
      </div>
      <!-- 列表 -->
      <ul class="list-content list-content-hook">
        <li class="list-item">
          <div class="list-item-wrapper">
            <div class="list-item-left">              
              <span class="bed">
                <span class="alarm-icon">
                <i class="main"></i>
                <i class="bottom"></i>
                <i class="myanimate"></i>
              </span>
              </span>
            </div>
            <div class="list-item-center">
              <span class="bed-num">
                床号: 22
              </span>
               <span class="time">12:40:66</span>
            </div>
            <div  class="list-item-bottom">
              <i class="fa fa-stop-circle-o stop"></i>
            </div>
          </div>
        </li>
        <li class="list-item">
          <div class="list-item-wrapper">
            <div class="list-item-left">              
              <span class="bed">
                <span class="alarm-icon">
                <i class="main"></i>
                <i class="bottom"></i>
                <i class="myanimate"></i>
              </span>
              </span>
            </div>
            <div class="list-item-center">
              <span class="bed-num">
                床号: 22
              </span>
               <span class="time">12:40:66</span>
            </div>
            <div  class="list-item-bottom">
              <i class="fa fa-stop-circle-o stop"></i>
            </div>
          </div>
        </li>
        <li class="list-item">
          <div class="list-item-wrapper">
            <div class="list-item-left">              
              <span class="bed">
                <span class="alarm-icon">
                <i class="main"></i>
                <i class="bottom"></i>
                <i class="myanimate"></i>
              </span>
              </span>
            </div>
            <div class="list-item-center">
              <span class="bed-num">
                床号: 22
              </span>
               <span class="time">12:40:66</span>
            </div>
            <div  class="list-item-bottom">
              <i class="fa fa-stop-circle-o stop"></i>
            </div>
          </div>
        </li>
      </ul>
      <!-- 
        1. 底部提示信息
        2. 这里有一种情况 没有更多数据的时候 文本显示''暂无更多数据'
       -->
       <div class="bottom-tip">
         <span class="loading-hook"></span>
       </div>
    </div>
  </div>
</template>
<script>
import {alarm} from 'api/alarm.js'
export default {
  data () {
    return {
      list: ''
    }
  },
  created () {
     this.loadData()
  },
  methods: {
    loadData() {
      alarm().then((res)=>{
        if (res.code == 200) {
          console.log('ff')
        }
      })
    }
  },
}
</script>
<style lang="stylus" scoped>
@keyframes myfirst {
  from { 
    transform: scale(0.9);

    opacity: 0.8;
    }
  to {
    transform: scale(0.5);
    opacity: 0.5;
  }
}
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
  padding 12px
.bed
  width 50px
  height 50px
  line-height 46px
  // background #2ba246
  border-radius 50%
  font-size 12px
  color #2782d7
  text-align center
  // border: 2px solid #da1c1c;
  // i 
  //   text-align left 
  //   vertical-align middle
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

