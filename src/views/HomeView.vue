<template>
  <div>
    <HomeOne />
    <HomeTwo />
    <HomeThree />
    <HomeFour />
    <HomeFive />
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
}
</script>

<style>
</style>