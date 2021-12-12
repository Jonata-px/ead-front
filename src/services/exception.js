export default class exception{
    static exception = "";

    static authException(code){
        var exception = "";
        if(code == 400)
            exception = "Falha no login."
        else if(code == 403)
            exception = "Senha inválida."
        else if(code == 404)
            exception = "Usuario não encontrado."

        return exception;
    }


}