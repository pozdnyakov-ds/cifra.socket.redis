<template>
<div>
    <v-footer padless>
        <v-col class="text-center" cols="12">
            {{ new Date().getFullYear() }} — <strong>Cifra</strong>
        </v-col>
    </v-footer>  
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.v-footer {
    background-color: #263238;
    height: 50px;
    color: white;
}
</style>