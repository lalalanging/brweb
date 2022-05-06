<template>
  <div fluid class="background" style="display:table">
      <div class="text-box"> 
        <h1 class="header1">
            远大再生资源
        </h1>
        <h2 class="header2">
            为世界根除废油污染
        </h2>
       <a class="fix-btn" href="/about" target=_self> 
           <span>
           了解更多
           </span>
       </a>
      </div>
  </div>
</template>

<script>
export default {
    name: "home-one",
}
</script>

<style scoped>
    .text-box {
        display: table-cell; 
        padding-left: 21vw;
        padding-top: 33vh;
    }
    .background {
        background: url("../../assets/background/0-1.png");
        background-size: cover;
        width: 100%;
        height: calc(100vw * 2160 / 3840);
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
.fix-btn {
  text-decoration: none !important;
  position: relative;
  display: inline-block;
  background: #F9BE00;
  padding-right: 10px; }
  @media (max-width: 767px) {
    .fix-btn {
      display: block;
      padding: 0;
      width: 80px;
      text-align: center;
      border-radius: 25px; } }
  .fix-btn:after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100px;
    content: '';
    transition: width 0.35s ease-in-out; }
  .fix-btn span {
    text-transform: uppercase;
    font-family: "Microsoft YaHei bold";
    font-size: 12px;
    padding: 10px 50px 12px 25px;
    position: relative;
    z-index: 2;
    display: block;
    transition: padding 0.35s ease-in-out;
    /*border: 1px solid red;*/ }
    @media (max-width: 767px) {
      .fix-btn span {
        padding: 20px 0;
        text-align: center;
        display: block; } }
    .fix-btn span:before {
      position: absolute;
      top: 50%;
      right: 0;
      height: 4px;
      width: 4px;
      border-top: 2px solid #FFFFFF;
      border-right: 2px solid #FFFFFF;
      content: '';
      transform: translateY(-50%) rotate(45deg);
 }
      @media (max-width: 767px) {
        .fix-btn span:before {
          display: none; } }
    .fix-btn span:after {
      position: absolute;
      top: 50%;
      right: 0;
      height: 2px;
      width: 25px;
      background: white;
      content: '';
      margin-top: -1px;
      transition: width 0.35s ease-in-out; }
      @media (max-width: 767px) {
        .fix-btn span:after {
          display: none; } }
  @media (min-width: 1025px) {
    .fix-btn:hover:after {
      width: 100%; }
    .fix-btn:hover span {
      padding: 10px 50px 12px 25px; }
      .fix-btn:hover span:after {
        width: 0; } }
</style>