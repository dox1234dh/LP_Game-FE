export const urlApi: Function = () => {
    const config = useRuntimeConfig()
    return {
        urlLogin: <string>config.public.backendUrl + '/auth/signin',
        urlRegister: <string>config.public.backendUrl + '/auth/signup'
    }
}