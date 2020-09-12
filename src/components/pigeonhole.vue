<template>
  <div class="container">
    <h1>归档</h1>
    <div class="block poh">
      <el-timeline>
        <el-timeline-item v-for="(item,i) in pigeonhole" :key="i">
          <el-card>
            <h2>{{item.title}}</h2>
            <p>Aliu  发布于  {{item.ctime | dateFormat}}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pigeonhole: [],
    };
  },
  methods: {
    async getAllArticle() {
      const { data } = await this.$http.get("/api/getAllArticle");
      if (data.status === 0) return (this.pigeonhole = data.list);
    },
  },
  created() {
    this.getAllArticle();
  },
  computed: {},
};
</script>
<style lang="less" scoped>
.container {
  background: url("../assets/images/lz2.jpg") no-repeat;
  background-size: cover;
  .poh {
    width: 80%;
    margin: 0 auto;
  }
  .el-timeline{
    padding: 0;
  }
}
</style>