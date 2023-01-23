<template>
<div>
    <div class="container" v-if="mainStore.progress">
            <v-progress-circular
                indeterminate
                color="green"
            ></v-progress-circular>
    </div>
</div>
</template>

<script setup>
    const mainStore = useMainStore()
    // const show = mainStore.progress
</script>

<style scoped>
.container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #CCCCCC77;
}
</style>