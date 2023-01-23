<template>
    <div>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li>About</li>
        <li><NuxtLink to="/contacts">Contacts</NuxtLink></li>
        <li><NuxtLink to="/items">Items</NuxtLink></li>
      </ul>
      <!-- <div>pos: {{ x }}, {{ y }}</div> -->
      <button style="border: 1px solid #333; padding: 5px;" @click="sendMessage">Send message to Contacts</button>
      <button style="border: 1px solid #333; padding: 5px; margin: 0 20px;" @click="sendServerMessage">Send message to server</button>
    </div>
</template>

<script setup>
  
  definePageMeta({
    layout: "default",
  })

  const { x, y } = useMouse()

  const mainStore = useMainStore()
  const sendMessage = () => {
    mainStore.socket.emit("message", {
      sender: 'about',
      recipient: 'contacts',
      message: 'Message to Contacts'
    }, (resp) => {
      // handle response, if any
    })
  }
  const sendServerMessage = () => {
    mainStore.socket.emit("message", {
      sender: 'about',
      recipient: 'server',
      message: 'Message to Server'
    }, (resp) => {
      // handle response, if any
    })
  }
    
  onMounted(() => {
    mainStore.socket = useNuxtApp().$nuxtSocket({
        name: 'main',
        // channel: '/index'
    })

    mainStore.socket.on('about', (msg) => {
      console.log(`We got message from ${msg.sender} to ${msg.recipient}: ${msg.message}`);
    })

  })

</script>

<style scoped>

</style>