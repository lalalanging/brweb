<template>
  <div fluid class="background" style="display:table">
      <AppNavigatorVue />
      <div class="text-box"> 
        <h1 class="header1">
            远大再生资源
        </h1>
        <h2 class="header2">
            为世界根除废油污染
        </h2>
       <a class="btn bg-yellow" href="/about" target=_self> 
           <span>
           了解更多
           </span>
       </a>
      </div>
  </div>
</template>

<script>
import AppNavigatorVue from '@/components/AppNavigator.vue';

export default {
  name: "home-one",
  components: {
    AppNavigatorVue
  },
  setup() {
    AppNavigatorVue
  }
}
</script>

<style scoped>
.background {
  background: url("../../assets/background/0-1.png");
  background-size: cover;
  width: 100%;
  height: calc(100vw * 2160 / 3840);
}
.text-box {
  display: table-cell; 
  padding-left: 21vw;
  padding-top: 33vh;
}
.header1 {
    font-size: max(calc(100vw * 100/3840), 30px);
    font-family: "Microsoft YaHei","微软雅黑", Arial, Helvetica, sans-serif;
    font-weight: 300;
    color: #FFFFFF;
    line-height: calc(100vw * 0.06);
}
.header2 {
    font-size: max(calc(100vw * 40/3840), 12px);
    font-family: "Microsoft YaHei","微软雅黑", Arial, Helvetica, sans-serif;
    margin-bottom: 4vh;
    color: #FFFFFF;
}
    /* botton */
</style>