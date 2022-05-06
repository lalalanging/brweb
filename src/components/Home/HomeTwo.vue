<template>
  <div fluid class="background02" style="display:table" id="homepage2bg">
        <div class="product-image-container">
            <el-image
            style="width: 14vw; padding-top:50%; padding-left: 23vw"
                class="el-image"
                :src="bigimgurl"
                ></el-image>
        </div>
        <div style= "font-family= 'Microsoft Yahei Light'; margin-top: 17vw; margin-left: 48vw">
            <h1 style="margin-bottom: 2vw"><span>主营产品</span></h1>
            <h2 style="margin-bottom: 2vw">{{pointedproduct}}</h2>
            <p style="margin-bottom: 5vw"><a class="btn bg-white" onclick="" href="" target=_self> 
                <span>
                了解更多
                </span>
            </a></p>
            <ul class="image-ul">
              <li 
                class="image-li"
                style="width: 10vw; 
                height: 10vw; 
                float: left; 
                background-color: transparent;"
                v-for="(item, i) in url"
                :key="i"
                @mouseover="imgmouseover(i)"
                @mouseleave="imgmouseout(i)"
              >
                <img style="height: 80%; width: 28%
                    width: auto; 
                    margin-left:3.5vw; 
                    margin-top: 5px" 
                    :src="item" :alt="product[i].name" @click="exhibitionimg($event, i)" />
                    <div style="text-align: center; font-size: 0.5rem; margin-top: -1vw; margin-left: -0.5vw">{{product[i].name}}</div>
                <div
                  :class="[i == mask ? '' : 'mask']"
                  v-show="i != mask"
                ></div>
              </li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
    name: "home-two",
    data() {
        return {
            bigimgurl: require("@/assets/img/b75sn.png"), //大图的url属性url: b150snbig,
            url: [
                require("../../assets/img/b75sn.png"),
                require("../../assets/img/b150sn.png"),
                require("../../assets/img/B250SN.png"),
                require("../../assets/img/B350SN.png"),
            ],
            product: [
                {name: "B75SN",
                 desc: "B75SN —— 润滑油基础油", 
                 url: "/product#B75SN"}, 
                {name: "B150SN",
                 desc: "B150SN —— 润滑油基础油", 
                 url: "/product#B150SN"}, 
                {name: "B250SN",
                 desc: "B250SN —— 润滑油基础油", 
                 url: "/product#B250SN"}, 
                {name: "B550SN",
                 desc: "B350SN —— 润滑油基础油", 
                 url: "/product#B250SN"}, 
            ],
        mask: 0,
        clickmask: 0,
        pointedproduct: "B75SN —— 润滑油基础油",
        producturl: "/product#B75SN"
        }
    },
    
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
            console.log("y: "+ rect.y + " height is: " + rect.height + " bottom: " + (rect.bottom));
            if ((rect.y < 50.0) && (rect.bottom > 50.0)) {
                document.getElementById("logo1").style.filter = "invert(100)";
                document.getElementById("logo1").style.WebkitFilter = "invert(100)";
            } else {
                document.getElementById("logo1").style.filter = "invert(0)";
                document.getElementById("logo1").style.WebkitFilter = "invert(0)";
            }

        }, 

    exhibitionimg(event, i) {
//为大图赋值当前点击的图片url地址
      this.bigimgurl = event.target.src
//为当前点击的mask重新赋值
      this.clickmask = i
    },

        //鼠标移入事件
imgmouseover(i) {
//将mask置为i，div使用v-show判定来显示与隐藏，
      this.mask = i;
      //this.style.backgroundColor = "white";
      let elem2 = document.getElementsByClassName("image-li");
      elem2[i].style.backgroundColor = "#F9BE00";
      this.pointedproduct = this.product[i].desc;
    },
//鼠标移出事件，
    imgmouseout(i) {
//赋值最后点击的mask值
      this.mask = this.clickmask;
      //this.style.backgroundColor = "white";
            console.log("mouse is out:" + i);
      let elem2 = document.getElementsByClassName("image-li");
      console.log(elem2[i]);
            elem2[i].style.backgroundColor = "transparent";
    },
    },
}
</script>

<style scoped>
.background02{
    width: 100%;
    aspect-ratio: 16/9;
    background: linear-gradient(to right, #f6f6f6 60%, #ffffff 60%);
}
.product-image-container{
    position: relative;
    float: left;
    overflow: auto;
}
.image-ul /deep/ {
    display: flex;
    list-style: none;
}

.image-ul.image-ul:hover /deep/ {
    background-color: white;
};
</style>