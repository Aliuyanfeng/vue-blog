<template>
  <div class="wrap">
    <div style class="details_box">
      <el-page-header @back="goback" content="文章详情" class="page_header"></el-page-header>
      <h1>{{topic.title}}</h1>
      <h3>
        {{topic.ctime | dateFormat}}
        <span class="author">作者：Aliu</span>
      </h3>
      <el-divider></el-divider>
      <article v-html="topic.content"></article>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topic: [],
      id: this.$route.query.id,
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    async getDetails(id) {
      const { data } = await this.$http.get("/api/getDetails/" + this.id);
      if (data.status === 0) return (this.topic = data.topic);
    },
  },
  created() {
    this.getDetails();
  },
};
</script>
<style lang="less" scoped>
.details_box {
  background: url(../../assets/images/lz.jpg);
  color: #ffffff;
  box-shadow: 5px 5px 5px #333;
}
.page_header {
  padding-left: 50px;
  color: #ffffff;
  border-top: 1px solid #ffffff;

  height: 50px;
  line-height: 50px;
}
.author {
  margin-left: 50px;
}
.details_box {
  width: 100%;
  margin: 0 auto;
  // height: 0px;
  text-indent: 2em;
  line-height: 2em;
  overflow-y: scroll;
  font-size: 1.5rem;
  @media screen and (min-width: 1024px) {
    width: 80%;
  }
}
.wrap{
  background: url(../../assets/images/lz.jpg);

}
</style>