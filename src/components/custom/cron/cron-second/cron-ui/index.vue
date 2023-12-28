<template>
  
    <CronDefault ref="CronDefault"></CronDefault>
    <div slot="footer">
      <el-button size="mini" @click="confirmClick" type="primary">确定</el-button>
      <el-button size="mini" @click="dialogVisible = false">取消</el-button>
    </div>
</template>
<script>
import CronDefault from "../cron-default/index.vue";
export default {
  components: {
    CronDefault
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    // 确定生成表达式
    confirmClick() {
      let arr = {
        result: this.$refs["CronDefault"].cronExpression,
        resultEnd: this.$refs["CronDefault"].cronExpressionEnd
      };
      this.$emit("cronResult", arr);
      this.dialogVisible = false;
    }
  }
};
</script>
<style lang="css">
.cron-box-dialog-second {
  width: 500px;
}
.cron-box-dialog-second .el-dialog__header {
  padding: 10px;
  text-align: center;
}
.cron-box-dialog-second .el-dialog__header .el-dialog__headerbtn {
  top: 12px;
  right: 8px;
}
.cron-box-dialog-second .el-dialog__body {
  padding: 0 10px;
}
.cron-box-dialog-second .el-dialog__footer {
  padding: 10px;
  text-align: center;
}
</style>