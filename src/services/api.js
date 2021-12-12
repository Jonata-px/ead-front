

export default class Api{
    /// URL DA API
    static PATH = 'https://portal-ead-beta.herokuapp.com/';
    


    static Request = async (route = String, body = Object,headers = null,method = 'POST')=>{
        var response;
        if(headers === null){
            headers = {
                'Content-Type':'application/x-www-form-urlencoded',
               //"Authorization": "Basic Og=="
                //"Content-Type":"text/html"
            }
        }
        
        try{
            const URL = await fetch(this.PATH+route,{
                method: method,
                body: JSON.stringify(body),
                headers:headers
            });
            const responseJson = await URL.json();
           
            var response = await responseJson;
           
            return response;
            
        }catch(err){
           console.log(err)
            return {"error":"Error on request"};
        }
    }

    static CONFIRM = async (event,mensagem)=>{
        var r = await window.confirm(mensagem);
        if(r === true){
            return true;
        }else{
            event.preventDefault()
            return false;
        }
    }

    
}