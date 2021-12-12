import Api from './api';

export default (name,lastName,email,password)=>{
    return new Promise(async(resolve,reject)=>{
        let res = await Api.Request("auth/register",{
            name:name,
            lastName:lastName,
            email:email,
            password:password
        },{
            'Content-Type': 'application/json; charset=UTF-8'
        });
        console.log(res);
        if(!res.error){
            resolve(res);
        }else{
            reject(res.error);
        }
    })
}