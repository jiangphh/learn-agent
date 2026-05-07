<template>
    <div class="layout-main">
        <div class="layout-top">
            <slot />
        </div>
        <div class="layout-bottom">
            <van-tabbar v-model="active">
                <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
                <van-tabbar-item name="dialogue" icon="search">对话</van-tabbar-item>
                <van-tabbar-item name="mine" icon="friends">我的</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script setup>
const active = ref('home')
const router = useRouter()
watch(
    active,
    (val) => {
        switch (val) {
            case 'home':
                router.push('/home')
                break;
            case 'dialogue':
                router.push('/dialogue')
                break;
            case 'mine':
                router.push('/mine')
                break;
            default:
                break;
        }
    }
)
</script>

<style lang="css" scoped>
.layout-main {
    width: 100%;
    height: 100%;
    display: flex;
}

.layout-top {
    flex: 1
}

.layout-bottom {
    height: 50px;
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>