import Api from './api';

export default (paramEmail,paramPassword)=>{
    return new Promise(async(resolve,reject)=>{
        let res = await Api.Request("auth",{email:paramEmail,password:paramPassword},{'Content-Type': 'application/json; charset=UTF-8'});
        if(!res.error){
            resolve(res);
        }else{
            reject(res);
        }
    })
}