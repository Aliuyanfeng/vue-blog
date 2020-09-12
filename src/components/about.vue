<template>
  <div class="wrap">
    <h3>欢迎你的到来</h3>
    <div class="container" style="overflow:auto">
      <i class="el-icon-back close" style="font-size:50px" @click="close()"></i>
      <span>简历</span>:
      <a href="#">刘艳峰个人简历</a>
      <div class="about_me">
        <h1>About Me</h1>
        <p>我叫刘艳峰，来自黑龙江{{message}}</p>
        <p>出生于1998年，大学学习前端方向</p>
        <p>2021年7月份左右就要毕业了，软件学院软件工程系</p>
        <p>目前还未就业</p>
        <span>技术栈</span>
        <ul>
          <li>Html5+CSS3</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Vue.js</li>
          <li>Less</li>
          <li>Bootstrap+Jquery</li>
        </ul>
        <span>兴趣爱好</span>
        <ul>
          <li>打羽毛球</li>
          <li>滑板</li>
          <li>设计东西</li>
          <li>驾驶</li>
          <li>各种新奇的东西</li>
          <li>喜欢制作研究美食</li>
        </ul>
        <h4>联系方式</h4>
        <ul>
          <li>qq:1773189480</li>
          <li>wx:18804625620</li>
          <li>tel:18804625620</li>
          <li>
            github:
            <a
              href="https://github.com/Aliuyanfeng"
              target="_blank"
            >https://github.com/Aliuyanfeng</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    close() {
      this.$router.go(-1);
    },
  },
  props: ["message"],
  created() {},
  computed: {},
};
</script> 
<style lang="less" scoped>
.container {
  // width: 500px;
  position: relative;
  width: 80%;
  height: 750px;
  margin: 0 auto;
  background: url("../assets/images/lz2.jpg");
  background-size: cover;
  // height: 1000px;
  // border: 1px solid #ffffff;
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
.about_me {
  text-align: left;
}
</style>