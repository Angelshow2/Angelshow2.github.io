<template>
  <div>
    <h1>我是App组件</h1>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary" icon="more">primary</mt-button>
    
    <mt-button type="danger" size="small" icon="back">danger</mt-button>
    <mt-button type="danger" size="normal" disabled>danger</mt-button>
    <mt-button type="danger" size="large" plain @click="show">danger</mt-button>

    <!-- <mybtn>default</mybtn> -->

    <span class="mui-btn mui-btn-success">
			绿色
		</span>

  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      instance: null
    };
  },
  created() {
    this.show()
    this.getList()
  },
  methods: {
    getList() {   // 模拟获取列表的 一个 AJAX 方法
      setTimeout( () => {
        this.instance.close()
      }, 3000)
    },
    show() {
      // Toast('操作成功！')
      this.instance = Toast({
        message: "操作成功",
        position: "middle",
        duration: -1, // 设置时间  -1 表示不自动关闭
        iconClass: "glyphicon glyphicon-ok", // 设置 Toast 图标
        className: "myToast" // 样式
      });
    }
  }
};
</script>

/** scoped 定义私有style */
<style scoped>
a {
  text-decoration: none;
}

</style>

