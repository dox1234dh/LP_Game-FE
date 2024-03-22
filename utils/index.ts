const config = useRuntimeConfig()
export const urlLogin : string = <string>config.backendUrl + '/auth/signin';
export const urlRegister : string = <string>config.backendUrl + '/auth/signup';