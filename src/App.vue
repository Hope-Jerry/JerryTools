<script>

import {
    checkUpdate,
    installUpdate,
    onUpdaterEvent,
} from '@tauri-apps/api/updater'
import { relaunch } from '@tauri-apps/api/process'


const unlisten = await onUpdaterEvent(({ error, status }) => {
    // 这将记录所有更新程序事件，包括状态更新和错误。
    console.log('Updater event', error, status)
})




async function updater() {
    try {
        console.log("获取json")
        const { shouldUpdate, manifest } = await checkUpdate()
        console.log(shouldUpdate, manifest)
        if (shouldUpdate) {
            //您可以显示一个对话框，询问用户是否要在此处安装更新。
            console.log(
                `Installing update ${manifest?.version}, ${manifest?.date}, ${manifest?.body}`
            )

            //安装更新。这也将在Windows上重新启动应用程序！
            await installUpdate()

            // 在macOS和Linux上，您需要手动重新启动应用程序。
            // 您可以使用此步骤显示另一个确认对话框。
            await relaunch()

            unlisten()
        }
    } catch (e) {
        console.log(e)
    }
}

updater()


</script>

<template>
    <router-view />
</template>

<!-- 全局样式，都写在这里 -->
<style>
* {
    margin: 0;
    padding: 0;
}

html,
body,
#app {
    color: #303133;
    height: 100vh;
    font-size: 14px;
    background-color: #fff;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
        'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}

html body a {
    color: #1890ff;
    text-decoration: none;
}

.el-popper.is-light {
    border: none !important;
}

/** 美化系统滚动条 Start **/
::-webkit-scrollbar {
    width: 6px
}

::-webkit-scrollbar:horizontal {
    height: 6px
}

::-webkit-scrollbar-track {
    border-radius: 10px
}

::-webkit-scrollbar-thumb {
    background-color: #0003;
    border-radius: 10px;
    transition: all .2s ease-in-out
}

::-webkit-scrollbar-thumb:hover {
    cursor: pointer;
    background-color: #0000004d
}

/** 美化系统滚动条 End **/</style>