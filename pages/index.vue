<template>
  <div>
    <ul>
      <li>Home</li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/items">Items</NuxtLink></li>
      <li><NuxtLink to="/items/1">Item 1</NuxtLink></li>
    </ul>

    <button class="btn" @click="add">Add</button>
    {{ count }}

    <div class="loader" v-if="pending">Загрузка</div>
    <div v-else>Готово</div>

    <p>Name: {{ userStore.name }} </p>
    <p>Phone: {{ userStore.getPhone }} </p>
    
  </div>
</template>

<script setup>
  const userStore = useUserStore()
  //console.log("STORE: ", userStore)
  
  console.log("RUN: index.vue")

  definePageMeta({
    layout: "default",
  })

  useHead({
    title: 'CIFRA TEST',
    meta: [
      {
        name: 'description',
        content: 'CIFRA TEST: Nuxt3, Composition API, Pinia'
      }
    ]
  })

  let count = ref(0)
  const add = () => {
    count.value++
    refresh()
    userStore.setPhone("--000--") 
    console.log("Name: ", userStore.getPhone);

    // const mainStore = useMainStore()
    // mainStore.progress = true
    // setTimeout(() => {
    //   mainStore.progress = false
    // }, 1000)

  }

  const foo = useCookie("foo")
  foo.value = 'data'
  console.log("FOO: ", foo.value)

  // const getApiData = () = {
  //   return await useFetch('/api')
  // }

  // const { data: user, pending, refresh } = await useFetch('/api')
  const { data: user, pending, refresh } = await useAsyncData('/api',
    () => $fetch('/api'))

  console.log("API: ", JSON.parse(user.value))

  const mainStore = useMainStore()
  mainStore.progress = true;
  setTimeout(() => {
    mainStore.progress = false
  }, 3000)

  watch(pending, (newValue, oldValue) => { 
    mainStore.progress = newValue
  })

  // setInterval(() => {
  //   mainStore.progress = true;
  //   console.log("Refresh...")
  //   refresh()
  //   mainStore.progress = false;
  // }, 1000)

  console.log("App name: ", mainStore.app)
  
</script>

<style scoped>
button {
  border: 1px dotted #333;
  border-radius: 5px;
  padding: 5px 15px 5px 15px;
}
.loader {
  left: 0;
  top: 0;
  right: 0
  
}
</style>