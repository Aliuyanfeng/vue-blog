<template>
  <div class="wrap">
    <div class="container">
      <h1>分类</h1>
      <el-row  class="row-bg" >
        <el-col :span="8" v-for="(item,i) in classify.list" :key="i" style="margin-top:20px">
          <div class="grid-content bg-purple">
            <el-button type="info">{{item.cname}}</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      classify:[]
    };
  },
  methods: {
    async getclassify() {
      const { data } = await this.$http.get("/api/getclassify");
      if (data.status === 0) return (this.classify = data.result);
    },
  },
  created() {
    this.getclassify()
  },
  computed: {},
};
</script>
<style lang="less" scoped>
.wrap {
  background: url("../assets/images/lz2.jpg");
  background-size: cover;
  .container {
    // border: 1px solid #ffffff;
    width: 100%;
    height: 500px;
    margin: 0 auto;
  }
}
</style>