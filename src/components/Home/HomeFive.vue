<template>
  <div fluid id="homepage5bg">
      <div class="text-box"> 
        <h1>
            加入我们，未来可期
        </h1>
        <h2>
            有德有才，破格重用；有德低才，培养使用
            <br>有才低德，教育使用；有才无德，坚决不用
        </h2>
       <a class="btn bg-white" href="" target=_self> 
           <span>
           加入我们
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
.text-box {
  display: table-cell; 
  padding-left: calc(100vw * 500 / 3840);
  padding-top: calc(100vw * 522 / 3840);
}
.text-box h1 {
    font-size: max(calc(100vw * 100/3840), 30px);
    font-family: "Microsoft YaHei","微软雅黑", Arial, Helvetica, sans-serif;
    font-weight: 300;
    color: #FFFFFF;
    line-height: calc(100vw * 0.06);
}
.text-box h2 {
    font-size: max(calc(100vw * 40/3840), 12px);
    font-family: "Microsoft YaHei","微软雅黑", Arial, Helvetica, sans-serif;
    margin-bottom: 4vh;
    color: #FFFFFF;
}
</style>