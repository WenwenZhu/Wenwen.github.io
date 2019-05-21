<template>
  <div class="manage_page fillcontain">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1"> <router-link to="/">首页</router-link> </el-menu-item>
          <el-submenu index="2">
            <template slot="title"> <router-link to="/"> 文章 </router-link></template>
            <el-menu-item index="2-1"><router-link to="/"> 全部 </router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link to="/"> JavaScript </router-link></el-menu-item>
            <el-menu-item index="2-3"><router-link to="/"> node </router-link></el-menu-item>
          </el-submenu>
          <el-menu-item index="3"> <router-link to="/"> 组件 </router-link> </el-menu-item>
          <el-menu-item index="4"> <router-link to="/"> 关于 </router-link> </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
          <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  computed: {
    menuActive: function () {
      return this.$route.path.replace('/', '')
    }
  }
}
</script>

<style lang="less" scoped>
  @import './../style/common.less';
  @import './../style/main.less';
  .manage_page{

  }
</style>
