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
          <div>
            <span class="bed">
              <i>012床</i>
            </span>
            <span class="alarm-icon">
              <i class="main"></i>
              <i class="bottom"></i>
              <i class="myanimate"></i>
            </span>
            <span>12:40:66</span>
            <span class="btn">关闭</span>
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
export default {
  
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
.list-item>div>span
  display inline-block
.bed
  width 50px
  height 50px
  line-height 50px
  background #2ba246
  border-radius 6px
  font-size 14px
  color #fff
  text-align center
  text-shadow 1px 1px 5px #999
  i 
    text-align left 
    vertical-align middle
.alarm-icon{
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  transform: scale(.25);
  transform-origin: center top;
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
  background: #f73030;
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

