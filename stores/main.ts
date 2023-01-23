export const useMainStore = defineStore('main', {
    state: () => ({
        app: 'Cifra Pinia Test',
        description: 'Pinia store application...', 
        progress: false,
        socket: null
    })
})