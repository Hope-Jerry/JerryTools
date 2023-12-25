<template>
    <div class="page">
        <el-card shadow="never" class="vel_card_override">
            <json-editor-vue class="editor" v-model="data"></json-editor-vue>
        </el-card>
    </div>
</template>
  
<script setup>
import JsonEditorVue from '../../../components/custom/json-editor-vue/json-editor.vue';

let data = {
    
}

const name = 'json编译器'
</script>
  
<style scoped>
.page {
    padding: 5px;
}

.vel_card_override {
    height: calc(100vh - 90px - 20px - 20px - 2px);
}
</style>