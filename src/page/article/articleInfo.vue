<template>
  <div class="form-box">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="发布时间" required>
        <el-col :span="11">
          <el-form-item prop="date">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="是否上线" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>

      <div class="content-box">
        <div v-for="(t,index) of contentArr"  :key="index" class="li">
          <span class="li-label">内容{{index+1}}.</span><span>{{t.desc}}</span>
          <el-button size="mini" round  @click="edit(index)"><i class="el-icon-plus"></i>编辑</el-button>
          <el-button size="mini" round  @click="detele(index)"><i class="el-icon-plus"></i>删除</el-button>
        </div>
      </div>
      <div class="content-box">
        <div class="li">
          <span class="li-label"></span>
          <span><el-button size="mini" round  @click="dialogFormVisible = true"><i class="el-icon-plus"></i>添加</el-button></span>
        </div>
      </div>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <!--内容表单弹窗-->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="contentObj" :rules="rules" ref="contentObj" >
        <el-form-item label="内容" required>
          <el-input type="textarea" v-model="contentObj.desc"></el-input>
        </el-form-item>
        <el-form-item label="图片地址" required>
          <el-select v-model="contentObj.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitConForm('contentObj')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {addWish} from '@/api/api'
export default {
  data () {
    return {
      ruleForm: {
        title: '',
        date: '',
        date2: '',
        delivery: false,
        content: []
      },
      jund: -1, // 判断是编辑还是删除
      contentArr: [],
      contentObj: {desc: '', region: ''},
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 4 到 20 个字符', trigger: 'blur' }
        ],
        // region: [
        //   { required: true, message: '请选择活动区域', trigger: 'change' }
        // ],
        date: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写内容', trigger: 'blur' }
        ]
      },
      dialogFormVisible: false
    }
  },
  methods: {
    edit (index) {
      this.jund = index
      this.dialogFormVisible = true
      this.contentObj = this.contentArr[index]
    },
    detele (index) {
      this.contentArr.splice(index, 1)
      console.log(this.contentArr)
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    async intdata (data) {
      try {
        let result = await addWish(data)
        if (result.status === 1) {
          this.$message({
            type: 'success',
            message: '添加成功'
          })
        } else {
          this.$message({
            type: 'error',
            message: result.message
          })
        }
        console.log(result)
      } catch (err) {
        console.log(err)
      }
    },
    addcontent () {
      this.contentArr.push({desc: '', region: ''})
    },
    submitConForm (conformName) {
      this.$refs[conformName].validate((v) => {
        if (v) {
          if (this.jund !== -1) {
            this.contentArr[this.jund] = this.contentObj
          } else {
            this.contentArr.push(this.contentObj)
          }
          console.log(this.contentObj)
          this.dialogFormVisible = false
          this.contentObj = {desc: '', region: ''}
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          this.ruleForm.content = this.contentArr
          console.log(this.ruleForm)
          this.intdata(this.ruleForm)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="less" scoped>
  .form-box{
    padding: 20px;
  }
  .content-box .li{
    width: 300px;
    height:54px;
  }
  .content-box .li .li-label{
    width: 80px;
    display: inline-block;
    text-align: right;
    margin-right: 20px;
  }
</style>
