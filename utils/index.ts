const config = useRuntimeConfig()
export const urlLogin : string = <string>config.public.backendUrl + '/auth/signin';
export const urlRegister : string = <string>config.public.backendUrl + '/auth/signup';