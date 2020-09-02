<template >
  <div id="article_list" style="text-align:center">
    <el-row class="article_item">
      <el-col :span="8" v-for="o in 5" :key="o" :offset="2">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px;" class="operation">
            <h2>vue+node.js实现的个人博客系统初期版本</h2>
            <div class="bottom clearfix">
              <time class="time">2017.07.01222222</time>
              <el-button type="primary" class="button" round>操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
#article_list {
  //   border: 1px solid #ffffff;
  background: url('../assets/images/lz2.jpg');
  background-size: 100%;
  // width: 1280px;
  // margin: 0 auto;
  .article_item {
    .el-col {
      width: 400px;
      //   margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 20px;
      
      .el-card {
        background-color: rgba(79, 79, 79, 0.3);
        border: none;
        img {
          margin-top: 20px;
        }
        .operation {
          h2 {
            color: #ffffff;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .time {
            display: block;
            color: #ffffff;
          }
          .button {
            margin-top: 20px;
          }
        }
        &:hover {
          -webkit-transform: translateY(-5px);
          -ms-transform: translateY(-5px);
          transform: translateY(-5px);
          box-shadow: 0 6px 16px rgba(248, 248, 250, 0.5);
        }
      }
    }
  }
}
</style>