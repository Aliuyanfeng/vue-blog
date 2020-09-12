<template >
  <div id="article_list">
    <div class="article_wrap">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>文章列表</span>
        </div>
        <div v-for="item in AllArticle" :key="item._id" class="text item">
          <p class="el-icon-document">{{item.title}}</p>
          <span class="el-icon-view">浏览{{item.read}}次</span>
          <el-button style=" margin-left:20px;" type="info" @click="check(item._id)">查看全文</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>  
export default {
  data() {
    return {
      AllArticle: [],
    };
  },
  methods: {
    async getAllArticle() {
      const { data } = await this.$http.get("/api/getAllArticle");
      if (data.status === 0) return (this.AllArticle = data.list);
    },
    check(id) {
      this.$router.push({
        path: "/details",
        query: {
          id: id,
        },
      });
    },
  },
  created() {
    this.getAllArticle();
  },
};
</script>
<style lang="less" scoped>
#article_list {
  background: url("../assets/images/lz2.jpg");
  background-size: cover;
  .article_wrap {
    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both;
    }

    .box-card {
      width: 100%;
      height: 700px;
      margin: 0 auto;
      background-color: transparent;
      color: #fff;
      border: none;
      overflow-y: scroll;

      .item {
        font-size: 24px;
        margin-bottom: 18px;
        span {
          font-size: 16px;
        }
      }
    }
  }
}
</style>