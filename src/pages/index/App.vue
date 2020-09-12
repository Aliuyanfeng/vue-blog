<template>
  <div id="wrap">
    <div class="container">
      <div class="avatar">
        <a href="#">
          <img src="../../assets/images/3.jpg" alt />
        </a>
        <h1>Aliuyanfeng</h1>
        <span>I Can Do It</span>
        <hr />
        <div id="self-introduction">你好，陌生人，我是Aliu，一名喜欢美食的程序员，很高兴认识你！</div>
      </div>
      <div class="nav">
        <el-row :gutter="30" type="flex" justify="center">
          <el-col :xs="4" :sm="4" :md="2" :lg="2" :xl="2">
            <router-link to="/home">
              <div class="grid-content bg-purple animate__animated animate__bounceInDown">首页</div>
            </router-link>
            <!-- <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">点我打开</el-button> -->
          </el-col>
          <el-col :xs="4" :sm="4" :md="6" :lg="8" :xl="4">
            <router-link to="/classify" @click="show()">
              <div class="grid-content bg-purple classify">分类</div>
            </router-link>
          </el-col>
          <el-col :xs="4" :sm="4" :md="6" :lg="8" :xl="4">
            <router-link to="/pigeonhole">
              <div class="grid-content bg-purple pigeonhole">归档</div>
            </router-link>
          </el-col>
          <el-col :xs="4" :sm="4" :md="2" :lg="2" :xl="2">
            <router-link to="/about">
              <div class="grid-content bg-purple about">关于</div>
            </router-link>
          </el-col>
        </el-row>
      </div>

      <!-- <router-view></router-view> -->
    </div>
    <transition name="el-fade-in-linear">
      <router-view tag="div" class="view" v-show="flag" name="front"></router-view>
    </transition>
    <el-footer>
      @Aliuyanfeng 喜欢喝水蜜桃味的饮料
      黑Cxxxxxx
      <p id="showdays">本站以运行{{total}}天</p>
    </el-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      direction: "rtl",
      flag: true,
      total: "",
    };
  },
  mounted() {
    this.type();
  },
  created() {
    this.showdays();
  },
  methods: {
    showdays() {
      const birthday = new Date("08/25/2020");
      const now = new Date();
      const run = now.getTime() - birthday.getTime();
      const total = Math.floor(run / (60 * 60 * 24 * 1000));
      this.total = total;
    },
    type() {
      var index = 0;
      var word = document.getElementById("self-introduction").innerHTML;
      function type() {
        document.getElementById("self-introduction").innerText = word.substring(
          0,
          index++
        );
      }
      setInterval(type, 200);
    },
  },
};
</script>

<style lang="less" scoped >
.view {
  background-color: rgba(000, 000, 000, 1);
  border-radius: 10px;
  // width: 100%;
  // border: 1px solid red;
}

#wrap {
  width: 100%;
  // height: 2000px;
  height: 100%;
  // position: absolute;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #fff;
  // border: 1px solid red;
  background: url("../../assets/images/lz3.jpg");
  background-size: 100% 100%;
  .container {
    width: 100%;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    // margin-top: 50px;
    // border: 1px solid #ffffff;
    // @media only screen and (max-width: 1024px) {
    //   width: 100%;
    // }
    .avatar {
      padding-top: 100px;
      a {
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
      }
      hr {
        width: 50%;
      }
      #self-introduction {
        height: 1em;
        height: 50px;
      }
    }
    .nav {
      // border: 1px solid red;
      width: 100%;
      @media only screen and (max-width: 1024px) {
        width: 100%;
      }
      // width: 100%;
      margin: 50px auto;
      .classify {
        animation: bounce;
        animation-duration: 1s;
        animation-delay: 1.5s;
      }
      .pigeonhole {
        animation: bounce;
        animation-duration: 1s;
        animation-delay: 2s;
      }
      .about {
        animation: bounce;
        animation-duration: 1s;
        animation-delay: 2.5s;
      }
    }
    a {
      text-decoration: none;
      color: #333;
    }
  }
  .el-footer {
    width: 100%;
    // background-color: red;
    position: fixed;
    bottom: 0;
    // left: 0;
    // right: 0;
  }
}
.el-row {
  margin-bottom: 20px;
  // border: 1px solid #333;
  &:last-child {
    margin-bottom: 0;
  }
  width: 100%;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  height: 36px;
  line-height: 36px;
  border-radius: 4px;
  min-height: 36px;
  &:hover {
    background-color: #333;
    color: #e5e9f2;
  }
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
