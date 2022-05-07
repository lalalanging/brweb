<template>
  <div fluid id="homepage3bg" :style="{backgroundImage: 'url(' + bgsrc + ')', backgroundSize:'cover'}">
    <div style="
        min-width: 300px;
        width: 21vw;
        height: inherit;
        position: relative;
        margin-left: 58vw; 
        background-color: rgba(0,0,0,0.2); 
        ">
        <div style="color: white;
                    display: block;
                    width: inherit;
                    padding-top: calc( 100vw * 660/ 3840 );">
            <div 
                :class="showDetail == i? 'details_li' : 'details_tp'"
                v-for="(item, i) in detaillist"
                v-bind:id="item.id"
                :key="i"
                @mouseover="showfull($event,item.id,i)"
                @mouseout="hiddenfull($event,item.id)"
              >
                <div style="height: 2vw; display: block" v-show="showDetail != i"></div>
                <div style="display: inline-block; 
                    padding-top: 1vw; 
                    height: 2vw; 
                    min-height: 20px; 
                    width: 65%;
                    margin-left: 20px;">
                    <h1 ><span>{{item.brief}}</span></h1>
                </div>
                <div class="support-circle" v-show="showDetail != i">
                    <span class="support-num">+</span>
                </div>
                <div style="height: 1vw; display: block; width: inherit" v-show="showDetail == i"></div>
                <div style="display: block; width:inherit">
                    <div style="display: inline-block; 
                        margin-left: 20px;
                        width: 60%; vertical-align: top" 
                        v-show="showDetail == i">
                    {{detaillist[i].full}}
                    </div>
                    <div style="display: inline-block; vertical-align: top" v-show="showDetail == i">
                        <img :src="item.icon" style="margin-left: 2vw;" />
                    </div>
                </div>
                <div style="display: table-row"></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "home-three",
    data() {
        return {
            showDetail: 4,
            bgsrc: require("../../assets/background/0-3-1.png"),
            bg03list: [
                require("../../assets/background/0-3-1.png"),
                require("../../assets/background/0-3-2.png"),
                require("../../assets/background/0-3-3.png"),
            ],
            detaillist: [
                {id: "homethree-list1",
                 brief: "优势",
                 full: "行业规模优势，年生产成品17万吨，可回收利用湖南省内HW08全项的废矿物油及含油废物和HW09全项的废乳化液... ...", 
                 icon: require("../../assets/icons/advantage.png"),}, 
                {id: "homethree-list2",
                 brief: "价值",
                 full: "为产废单位100% 解决环境污染和安全风险，为客户节省20% 的使用成本，为地球减少约3 吨二氧化碳排放( 每使用一吨再生油)", 
                 icon: require("../../assets/icons/value.png"),}, 
                {id: "homethree-list3",
                 brief: "使命",
                 full: "为世界根除废油污染", 
                 icon: require("../../assets/icons/mission.png"),}, 
            ],
        }
    },

    methods: {
        showfull($event, id, i){
            this.showDetail = i; //swith position and display full description
            // change background picture
            this.bgsrc = this.bg03list[i];
            // change block background
            document.getElementById(id).backgroundColor = "transparent"
            console.log("setup up:"+ id + "to" + document.getElementById(id).backgroundColor)
        },
        hiddenfull($event, id){
            this.showDetail = 9; //swith position and display full description
            //document.getElementById(id).background="transparent";
            console.log(document.getElementById(id).backgroundColor);
        },        
    },
}
</script>

<style scoped>
#homepage3bg{
        width: 100%;
        height: calc(100vw * 2160 / 3840);
}
.details_li {
    display: block;
    min-height: 140px;
    height: 8vw;
    width: inherit;
    font-family: "SourceHanSansCN-Regular";
    font-size: 13px;
    background-color: rgba(0,0,0,0.3);
}
.details_tp {
    display: block;
    min-height: 120px;
    height: 8vw;
    width: inherit;
    font-family: "SourceHanSansCN-Regular";
    font-size: 13px;
}
.details_li img{
    width: 2vw;
    height: 2vw;
}
.details_li h1{
    font-family: "MicrosoftYaHeiLight";
    font-size: 28px;
    letter-spacing: 0.5vw;
}
@media (min-width: 1925px) {
    .details_li{
        font-size: 1vw;
    } 
    .details_li h1{
        font-size: 2vw;
    }   
}
.support-circle{
  width:2vw;
  height:2vw;
  border: 2px solid #FCB815;
  display: inline-block;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
}
.support-num{
  font-size: 2vw;
  height:2vw;
  line-height:1.7vw;
  display:block;
  color:#FCB815;
  text-align:center;
}
</style>