<template>
  <div id="admin">
    <el-container>
      <el-header>
        <h1>后台管理系统</h1>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Admin style="height:100%"></Admin>
        </el-aside>

        <el-container>
          <el-main>
            <router-view name="admin" v-if="isRouterAlive"></router-view>
          </el-main>
          <el-footer>
            @Aliuyanfeng 喜欢喝水蜜桃味的饮料
            黑Cxxxxxx
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Admin from "../../components/admin/aside.vue";
export default {
  // name: "Admin",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      msg: "这是后台管理",
      isRouterAlive: true,
    };
  },
  components: {
    Admin,
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>
<style lang="less" scoped>
#admin {
  width: 100%;
  height: 100%;
  position: absolute;
  .el-container {
    height: 100%;
  }

  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
    h1 {
      line-height: 1em;
    }
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
}
</style>