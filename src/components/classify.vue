<template>
  <div class="container">
    <h1>分类</h1>
    <el-row type="flex" class="row-bg">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-button type="info">信息按钮</el-button>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">
          <el-button type="info">信息按钮</el-button>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-button type="info">信息按钮</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-button type="info">信息按钮</el-button>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">
          <el-button type="info">信息按钮</el-button>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-button type="info">信息按钮</el-button>
        </div>
      </el-col>
      
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  computed: {},
};
</script>
<style lang="less" scoped>
.container{
  // border: 1px solid #ffffff;
  background: url('../assets/images/lz2.jpg');
  width: 1280px;
  height: 500px;
  margin: 0 auto;
}
</style>