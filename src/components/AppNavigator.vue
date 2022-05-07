<template>
  <div class="navbar">
    <div style = "display: inline-flex;">
      <div style="min-width: 64px; vertical-align: middle; margin-left: 7vw; width: 16vw; margin-right: 10vw;">
        <img id="logo1" src="../assets/logo_2x.png"
          sizes="max(9vw, 129px)"
          alt="logo" style="object-fit:scale-down; width:100%; height: auto; z-index: 900">
      </div>
      <div style="min-width: 600px; width: 45vw">
        <el-menu :default-active="activeIndex"
          class="el-menu-headnav"
          mode="horizontal" 
          @select="handleSelect"
          router="true">
          >
          <el-submenu index="1">
            <template slot="title">关于我们</template>
            <el-menu-item class="el-menu-headnav" index="about">概述</el-menu-item>
            <el-menu-item class="el-menu-headnav" index="1-2">荣誉资质</el-menu-item>
            <el-menu-item class="el-menu-headnav" index="1-3">沿革</el-menu-item>
            <el-menu-item class="el-menu-headnav" index="1-4">企业文化</el-menu-item>
            <el-menu-item class="el-menu-headnav" index="1-5">团队风采</el-menu-item>
            <el-menu-item class="el-menu-headnav" index="1-6">视频集锦</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">产品中心</template>
            <el-menu-item class="el-menu-headnav" index="2-1">产品</el-menu-item>
            <el-menu-item class="el-menu-headnav" index="2-2">原料回收</el-menu-item>
            <el-menu-item class="el-menu-headnav" index="2-3">案例</el-menu-item>
          </el-submenu>
    <!--      <el-submenu index="3">
            <template slot="title">新闻中心</template>
            <el-menu-item index="2-1">公司新闻</el-menu-item>
            <el-menu-item index="2-2">行业动态</el-menu-item>
          </el-submenu> -->
          <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">新闻中心</a></el-menu-item>
          <el-submenu index="4">
            <template slot="title">诚聘英才</template>
            <el-menu-item class="el-menu-headnav" index="2-1">人才理念</el-menu-item>
            <el-menu-item class="el-menu-headnav" index="2-2">招聘岗位</el-menu-item>
          </el-submenu>            
          <el-menu-item id="last_nav" index="5"><a href="https://www.ele.me" target="_blank" style="width:76px">联系我们</a></el-menu-item>
        </el-menu>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>



<script>
   export default {
    name: "AppNavigator",
    props: {
        props: {
          invent: Boolean
        }
    },
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
.navbar {
  position: absolute;
  top: 2vw;
}
.line {
  height: 1px;
  border-bottom: solid 1px #e6e6e6;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu-headnav {
  font-family: "Microsoft YaHei", "Arial", sans-serif;
  color: #ffffff;
}
.el-menu-item{
  min-width: 76px;
  width: 9vw;
    text-align: center;
}
.el-submenu{
  min-width: 76px;
  width: 9vw;
    text-align: center;
}
</style>