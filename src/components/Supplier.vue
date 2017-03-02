<template>
  <div class="hello">
    <el-form :model="ruleForm" :rules="rules" label-width="100px">
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" :value="1"></el-option>
          <el-option label="区域二" :value="2"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          region: ''
        },
        data:{},
        rules: {
          region: [
            {type: 'number', required: true, message: '请选择活动区域', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
    }
  }
</script>
<style scoped>

</style>
