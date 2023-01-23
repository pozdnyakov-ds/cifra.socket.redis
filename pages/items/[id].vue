<template>
    <div> 
        Child Item {{ $route.params.id }}
    </div>

</template>

<script setup>
    definePageMeta({
        layout: "default",
    })
</script>