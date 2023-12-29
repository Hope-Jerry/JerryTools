<template>
    <div>
        <el-card class="box-card" v-for="item in zz">
            <template #header>
                <div class="card-header">
                    <span>{{ item.title }}</span>
                </div>
            </template>
            <div>
                <div class="demo-collapse">
                    <el-collapse v-model="activeName" accordion>
                        <el-collapse-item v-for="it in item.regexps" :name="it.name">
                            <template #title>
                                {{ it.title }}
                            </template>
                            <div>
                                {{ it.content }}
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const activeName = ref('1')


const zz = [
    {
        title: "密码验证类",
        regexps: [
            {
                name: "1",
                title: "6-16位字符，区分大小写（不能是9位以下的纯数字，不含空格）",
                content: "^(?!\d{6,8}$)(?! )(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9_]{6,16}$"
            },
            {
                name: "2",
                title: "6-16位字符，区分大小写（不能是9位以下的纯数字，不含空格），必须包含大写字母",
                content: "^(?!\d{6,8}$)(?! )(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9_]{6,16}$"
            },
            {
                name: "3",
                title: "密码不能为纯数字或字母，不少于6位",
                content: "^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$"
            }
        ]
    }
]


</script>

<style></style>