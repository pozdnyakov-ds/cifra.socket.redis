export default defineNuxtPlugin(async () => {
    const store = useMainStore();

    if (!process.server) {
        console.log("Процесс на клиенте...")
        store.app = "Client patch app name"
        return;
    }

    console.log("Процесс на сервере...")
    store.app = "Server patch app name"
    
    // const mainStore = useMainStore()
    // mainStore.socket = $nuxtSocket({
    //     channel: '/index'
    // })

  });