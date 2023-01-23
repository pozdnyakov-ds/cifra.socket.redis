<template>
<v-app-bar
        color="#cfd8dc"
        density="compact"
    >
        <template v-slot:prepend>
            <v-app-bar-nav-icon icon="mdi-view-list"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Cifra</v-app-bar-title>

        <!-- <v-icon>mdi-account</v-icon> -->

        <template v-slot:append>
            <v-btn @click="pushMe" icon="mdi-account"></v-btn>
        </template>

</v-app-bar>
</template>

<script setup>
const pushMe = () => {
        console.log("Push me...")
    }

</script>

<style scoped>

</style>