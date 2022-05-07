<template>
  <div style="position: fixed; " id="CopyrightBanner">
    Copyright© <a url="www.broad.com">远大科技集团</a>      湘ICP备09010211号-1          电　话：0730-3060688
  </div>
</template>



<script>
   export default {
    name: "CopyrightBanner",
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  }
</script>

<style scoped>
#copyrightbanner{
  width: 100vw;
  height: 142px;
  font-family: Microsoft Yahei, Arial, Helvetica, sans-serif;
  font-size: 12px;
}
</style>