export const urlApi: Function = () => {
    const config = useRuntimeConfig()
    return {
        urlLogin: <string>config.public.backendUrl + '/auth/signin',
        urlRegister: <string>config.public.backendUrl + '/auth/signup',
        urlSavePlayLog: <string>config.public.backendUrl + '/playLog',
        urlListQuestion: <string>config.public.backendUrl + '/question'
    }
}