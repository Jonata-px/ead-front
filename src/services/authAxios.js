const axios = require('axios').default;

export const authApiConfig = axios.create({
    baseURL: 'http://192.168.0.100:3000'
});

export const login = async (email, password) => {
    try {
        // const { data } = await authApiConfig({
        //     method: 'post',
        //     headers: {
        //         // add config
        //     },
        //     url: '/auth/login',
        //     data: {
        //         email: email,
        //         password: password
        //     }
        // });
   
        var data = new Promise((resolve, reject) => {setTimeout(()=>{resolve({message:'logado com sucesso',token:'68928934yhg'})},2000)})

        return data;
    } catch (error) {
        console.log(error);
    }
}