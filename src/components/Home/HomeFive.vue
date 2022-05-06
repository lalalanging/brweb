<template>
  <div fluid id="homepage5bg">
      <div class="text-box"> 
        <h1 class="header1">
            远大再生资源
        </h1>
        <h2 class="header2">
            为世界根除废油污染
        </h2>
       <a class="fix-btn" href="" target=_self> 
           <span>
           了解更多
           </span>
       </a>
      </div>
  </div>
</template>

<script>
export default {
    name: "home-five",

    created() {
    window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            console.log(window.scrollY);
            let elem = document.getElementById("homepage2bg")
            let rect = elem.getBoundingClientRect();
            console.log("x: "+ rect.x);
            console.log("y: "+ rect.y);
            if (rect.y < 50.0) {
                document.getElementById("logo1").style.filter = "invert(100)";
                document.getElementById("logo1").style.WebkitFilter = "invert(100)";
                document.getElementById("logo1").style.WebkitFilter = "invert(100)";
            } else if (rect.y > 100) {
                document.getElementById("logo1").style.filter = "invert(0)";
                document.getElementById("logo1").style.WebkitFilter = "invert(0)";
            }
        },
    },
}
</script>

<style scoped>
#homepage5bg{
        background-image: url("../../assets/background/0-5.png");
        background-size: cover;
        width: inherit;
        height: calc(100vw * 2160 / 3840);
}
</style>