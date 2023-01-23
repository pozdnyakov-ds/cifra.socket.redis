<template>
    <v-app>
        <Header />
        <v-main>
            <v-container fluid>
                <slot />
            </v-container>
        </v-main>
        <Footer />
        <Progress />
    </v-app>
</template>

<script setup>

</script>

<style>
.v-container {
    padding: 20px;
}
li {
    list-style-type: none; 
}
</style>