<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort="{prop: 'date', order: 'descending'}"
    class="tablebox"
  >
    <el-table-column prop="ctime" label="发布日期" sortable width="180" :formatter="setDate"></el-table-column>
    <el-table-column prop="classify" label="分类" sortable width="180"></el-table-column>
    <el-table-column prop="title" label="标题" sortable width="auto"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" type="primary" @click="edit(scope.row._id)">编辑</el-button>
        <el-button size="mini" type="danger" @click="del(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import moment from "moment";
export default {
  inject:['reload'],
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    setDate(row, column) {
      var newdate = row[column.property];
      if (newdate == undefined) {
        return "";
      }
      return moment(newdate).format("YYYY-MM-DD HH:MM:SS");
    },
    async getAllArticle() {
      const { data } = await this.$http.get("/api/getAllArticle");
      if (data.status === 0) return (this.tableData = data.list);
    },
    edit(id) {
      // this.query = { id: id };
      // console.log(this.query);
      this.$router.push({
        path: "/article/edit",
        query: {
          id: id,
        },
      });
    },
    open4() {
      this.$message({
        message: "删除成功！",
        type: "success",
      });
    },
    async del(id) {
      this.query = { id: id };
      // console.log(this.query.id);
      const { data } = await this.$http.get("/api/del/" + this.query.id);
      if (data.status === 0) {
        this.open4();
        // location.reload();
        this.reload()
      }
    },
  },
  created() {
    this.getAllArticle();
  },
};
</script>
<style lang="less" >
.tablebox {
  th {
    padding: 0 !important;
    height: 80px;
    line-height: 80px;
  }
  td {
    padding: 0 !important;
    height: 50px;
    line-height: 50px;
  }
}
</style>