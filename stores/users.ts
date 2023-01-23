// import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        name: 'Дмитрий',
        surname: 'Поздняков', 
        email: '2903015@gmail.com',
        phone: '+79872903015'
    }),
    actions: {
        setPhone(phone: string) { 
            this.phone = phone
        }
    },
    getters: {
        getPhone(): string { 
            return this.phone
        }
    }
})

// interface UserInfo {
//     name: string
//     surname: string
//     email: string
//     phone: string
// }