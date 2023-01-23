<template>
    <div>
        <p><strong>ITEMS</strong></p>
        <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/items">Items</NuxtLink></li>
            <li><NuxtLink to="/items/1">Open page 1</NuxtLink></li>
            <li><NuxtLink to="/items/2">Open page 2</NuxtLink></li>
            <li><NuxtLink to="/items/3">Open page 3</NuxtLink></li>
        </ul>
        <NuxtPage />
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "default",
    })
</script>

<style scoped>

</style>