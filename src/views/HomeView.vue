<template>
  <div>

    <full-page :options="options" ref="fullpage">
      <HomeOne class="section"/>
      <HomeTwo class="section"/>
      <HomeThree class="section"/>
      <HomeFour class="section"/>
      <HomeFive class="section"/>
    </full-page>
  </div>
</template>

<script>
import HomeOne from '@/components/Home/HomeOne.vue';
import HomeTwo from '@/components/Home/HomeTwo.vue';
import HomeThree from '@/components/Home/HomeThree.vue';
import HomeFour from '@/components/Home/HomeFour.vue';
import HomeFive from '@/components/Home/HomeFive.vue';

export default {
  components: { 
    HomeOne, 
    HomeTwo, 
    HomeThree, 
    HomeFour, 
    HomeFive
  },
  data() {
    return {
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      }
      
    }
  },
  methods: {
    next() {
      // 向下滚动一页
      this.$refs.fullpage.api.moveSectionDown();
    }
  }
}
</script>

<style scoped>
</style>