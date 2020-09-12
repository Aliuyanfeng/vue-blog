<template>
  <div id="container">
    <el-form ref="form" :model="nform">
      <el-form-item label="发布分类:">
        <el-col :span="4">
          <el-select v-model="CurrentArticle.classify" placeholder="请选择">
            <el-option v-for="(item,i) in options.list" :key="i" :value="item.cname">{{item.cname}}</el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="发布标题:">
        <el-col :span="6">
          <el-input clearable class="titlebox" v-model="CurrentArticle.title"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="发布内容">
        <mavon-editor
          @change="handle"
          ref="md"
          @imgAdd="$imgAdd"
          @imgDel="$imgDel"
          v-model="CurrentArticle.mcontent"
        ></mavon-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="save()">保存修改</el-button>
        <el-button type="primary" @click="rsubmit()">重新发布</el-button>
      </el-form-item>
    </el-form>

    <!-- <article v-html="myhtml"></article> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      nform: {
        id: "",
        title: "",
        ctime: "",
        classify: "",
        content: "",
        mcontent: "",
      },
      options: [],
      id: this.$route.query.id,
      CurrentArticle: [],
    };
  },
  methods: {
    // 绑定@imgAdd event
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append("image", $file);
      this.img_file[pos] = $file;
      this.$http({
        url: "/api/edit/uploadimg",
        method: "post",
        data: formdata,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        let _res = res.data;
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        this.$refs.md.$img2Url(pos, _res.url);
      });
    },
    $imgDel(pos) {
      delete this.img_file[pos];
    },
    handle(value, render) {
      this.myhtml = render;
      console.log(value, render);
    },
    open2() {
      this.$message({
        message: "更新成功，快去看看吧！",
        type: "success",
      });
    },
    save() {},
    async rsubmit() {
      this.nform.classify = this.CurrentArticle.classify;
      this.nform.content = this.$refs.md.d_render;
      this.nform.mcontent = this.$refs.md.d_value;
      this.nform.ctime = new Date();
      this.nform.title = this.CurrentArticle.title;
      this.nform.id = this.CurrentArticle._id;
      const { data } = await this.$http.post("/api/update", this.nform);
      if (data.status === 0) {
        this.open2();
        // 发布文章之后 重定向到文章列表
        this.$router.push({
          path: "/article",
        });
      }
    },
    async getArticleById() {
      const { data } = await this.$http.get("/api/getArticleById/" + this.id);
      if (data.status === 0) return (this.CurrentArticle = data.topic);
    },
    async getclassify() {
      const { data } = await this.$http.get("/api/getclassify");
      if (data.status === 0) return (this.options = data.result);
    },
  },
  created() {
    // console.log(this.$route.query.id)
    // console.log(this.id)
    this.getArticleById();
    this.getclassify();
  },
};
</script>
<style lang="less" scoped>
.titlebox {
  width: 500px;
}
</style>