import useProfileStore from '@/stores/profile.js'

const login = async() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                username: 'Savant_527'
            })
        }, 2500)
    })
}

export const main =  async() => {
    const profileStore = useProfileStore()
    const user = await login()
    console.log(user)
    profileStore.username = user.username
    profileStore.status = 'active'
}