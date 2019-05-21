<template>
  <div class="vtable">
     <table class="vtable" >
       <thead>
         <tr>
           <th v-for="ietm in config.menu" :key="ietm.id">{{ietm.text}}</th>
           <th>操作</th>
         </tr>
       </thead>
       <tbody>
         <tr v-for="ietm in dataArr" :key="ietm.id">
           <td v-for="vt in config.menu" :key="vt.value">{{ietm[vt.value]}}</td>
           <td>
             <span class="tb-btn" v-for="t in config.actions" :key="t.text"  @click='select(ietm,t)'>{{t.text}}</span>
           </td>
         </tr>
       </tbody>
     </table>
  </div>
</template>

<script>
export default {
  props: ['dataArr', 'config'],
  methods: {
    select (ietm, t) {
      let data = {
        actions: t,
        rowdata: ietm
      }
      this.$emit('vtablebutton', data)
    }
  }
}
</script>

<style scoped>
  *{
    box-sizing: border-box;
  }
.vtable{
  border-collapse: collapse;
  width: 100%;
  text-align: left;
  border-radius: 5px;
}
.vtable thead tr{
  border:1px solid #e9ebed;
  background: #f8f8f9;
}
.vtable tbody tr{
  border:1px solid #e9ebed;
  background: #ffffff;
}
/*.vtable tbody tr:nth-child(2n){*/
  /*background: #f8f8f9;*/
/*}*/
  .vtable tbody tr:hover{
  background: #f8f8f9;
  }
  .vtable th,td{
    white-space: nowrap;
    vertical-align: middle;
    padding: 12px 12px;
    font-size: 14px;
  }
  .vtable th{
    color: #515a6e;
    padding: 14px 12px;
  }
  .vtable td{
    color: #9da5b6;
  }
  .tb-btn{
    font-size: 13px;
    color: #fff;
    letter-spacing: 0;
    cursor: pointer;
    padding: 6px 9px;
    border-radius: 3px;
    background: #2a85e5;
    margin-right: 10px;
  }
</style>
