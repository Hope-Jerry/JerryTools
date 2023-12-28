<template>
    <div class="page">
        <el-card title="表达式方式1" shadow="never" class="vel_card_override">
            <div class="test">
                <h2>一次生成一个表达式</h2>
                <div>
                    <!-- 2.注册并且使用 @cronResult="xx" 事件可以接收到最终的表达式-->
                    <CronUi ref="CronUi" @cronResult="resultValue"></CronUi>
                </div>
                <p>最终生成的表达式为：{{ result }}</p>
                
                
                <h2>一次生成两个表达式</h2>
                <div>
                    <CronUiSecond ref="CronUiSecond" @cronResult="confirmCron"></CronUiSecond>
                    <p>最终生成的开始时间表达式为：{{ resultForm.cpmEveryStartCron }}</p>
                    <p>最终生成的结束时间表达式为：{{ resultForm.cpmEveryEndCron }}</p>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
import CronUi from "../../../components/custom/cron/cron-ui/index.vue"
import CronUiSecond from "../../../components/custom/cron/cron-second/cron-ui/index.vue";

export default {
    components: { CronUi, CronUiSecond },
    data() {
        return {
            result: "",
            resultForm: {
                cpmEveryStartCron: "",
                cpmEveryEndCron: ""
            }
        };
    },
    methods: {
        open() {
            this.$refs["CronUi"].dialogVisible = true;
        },
        open2() {
            this.$refs["CronUiSecond"].dialogVisible = true;
        },
        // 一次一个表达式---最终产生出来的cron表达式
        resultValue(data) {
            console.log(data);
            this.result = data;
        },
        // 一次两个表达式---规则配置-确定
        confirmCron(data) {
            console.log("cron结果", data);
            this.resultForm.cpmEveryStartCron = data.result;
            this.resultForm.cpmEveryEndCron = data.resultEnd;
        }
    }
}

</script>

<style scoped>
.page {
    padding: 5px;
}

.vel_card_override {
    height: calc(100vh - 90px - 20px - 20px - 2px);
}
</style>