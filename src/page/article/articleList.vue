<template>
  <div class="manage_page fillcontain">
    <h2>祝福列表  <el-button size="mini" round  @click="tocreate"><i class="el-icon-plus"></i>添加</el-button></h2>

    <div class="vtable-container">
      <vtable v-bind:dataArr="dataArr" v-bind:config="config" @vtablebutton="btnfun"></vtable>
    </div>
  </div>
</template>

<script>
import vtable from '../../components/vtable'
import {cityGuess} from '@/api/api'
export default{
  components: {
    vtable
  },
  created () {
    this.getAdmin()
  },
  methods: {
    btnfun (row) {
      console.log(row)
      if (row.actions.value === 'details') {
        this.$router.push({name: 'wishdetails'})
      }
    },
    tocreate () {
      this.$router.push({name: 'wishinfo'})
    },
    async getAdmin () {
      try {
        const res = await cityGuess({type: 'hot'})
        console.log(res)
        this.dataArr = res
      } catch (err) {
        console.log('获取数据失败', err)
      }
    }
  },
  data: function () {
    return {
      dataArr: [
        { id: 1, title: 'My journey with Vue', value: '1111111' },
        { id: 2, title: 'Blogging with Vue', value: '1111111' },
        { id: 3, title: 'Why Vue is so fun', value: '1111111' }
      ],
      config: {
        actions: [
          { text: '查询', value: 'details', icon: '' },
          { text: '删除', value: 'detail', icon: '' }
        ], // 每行后面的操作按钮，对每行起作用
        menu: [
          { text: 'ID', value: 'id', icon: '' },
          { text: '名称', value: 'title', icon: '' },
          { text: '事件', value: 'value', icon: '' }
        ] // 每行后面的操作按钮，对每行起作用
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .vtable-container{
     padding: 20px;
  }
</style>
