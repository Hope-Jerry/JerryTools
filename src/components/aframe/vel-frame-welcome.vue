<script setup>
import tauriHttp from "@/utils/TauriHttps";
import {useUserInfoStore} from "@/stores/data/userInfoStore";
import {computed} from "vue";

import TableDemo1 from '@/components/common/table-demo-1.vue'

const userInfoStore = useUserInfoStore()

const githubUrl = tauriHttp.baseURL
const avatarUrl = tauriHttp.baseURL + '/res/imgs/jimeng.webp'

// 用户名称
const userNick = computed(() => userInfoStore.userInfo.userNick)

</script>

<template>
    <div class="welcome_panel">
        <el-row>            
            <el-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
                <el-card shadow="hover" class="vel_el_card_override">
                    <template #header>
                        <div class="card-header">
                            <div class="vel_card_header_left">
                                <el-icon :size="20">
                                    <Sugar/>
                                </el-icon>
                                <span>软件信息</span>
                            </div>
                            <div class="vel_card_header_right">
                                <el-tag type="info">V 0.0.1</el-tag>
                            </div>
                        </div>
                    </template>
                    <table-demo1></table-demo1>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
.welcome_panel {
    padding: 20px 0 0 20px;
}

:deep(.vel_el_card_introduce) .el-card__body {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}

:deep(.vel_el_card_override) .el-card__header {
    padding-top: 15px;
    padding-bottom: 15px;
}

.introduce_avatar .el-avatar {
    margin-right: 20px;
}

.introduce_desc {
    width: calc(100% - 80px);
    min-width: 200px;
}

.introduce_desc .tit {
    margin: 20px 0 15px 0;
    color: #141b1e;
    font-weight: 400;
    font-size: 20px;
}

.introduce_desc .tips {
    color: #808695;
}

.el-row .el-col {
    padding-bottom: 20px;
    padding-right: 20px;
}

.vel_el_card_override .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.vel_el_card_override .vel_card_header_left {
    display: flex;
    align-items: center;
}

.vel_el_card_override .vel_card_header_left .el-icon {
    margin-right: 5px;
}

:deep(.vel_el_card_button) .el-card__body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

:deep(.vel_el_card_button) .el-card__body p {
    padding-top: 15px;
}

</style>
