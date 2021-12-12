import '../../static/style/log.css';
import {useState, useEffect} from 'react';
import { useAuth } from '../../contexts/authContext';
import {Link} from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import Register from '../../services/register';

export default function SignIn() {

    const { signed, signIn } = useAuth();
    const [register, setRegister] = useState(false);

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [profesor, setProfesor] = useState(false);
    // console.log("Testando: ", signed)
    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signIn(email, pass);   
        } catch (error) {
            console.log(error);
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            let res = await Register(nome,sobrenome,email, pass);
            if(res.message == 'User already exists!'){

                setRegister(false);
                document.getElementById('loginForm').click();
            }  else{
                console.log(res.message)
            }
        } catch (error) {
            console.log("Error on register: "+error);
        }
    }

    //caso marque como profesor e mude de tela
    useEffect(()=>{
        setProfesor(false)
    },[register])

    return (
        <section className="log">
            <div className="container">
            {
                !register?
                <div className="login">
                    <h2>Login</h2>

                    <form onSubmit={(e)=>handleSignIn(e)}>
                        <input type="email" placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)} required autoComplete="username" />
                        <input type="password" placeholder="Senha" onChange={(e)=>setPass(e.target.value)} required autoComplete="current-password" />
                        <Link to="recuperarSenha">Esqueci minha senha</Link>
                        
                        <button id="loginForm"  title="Sign In" >Login</button>
                        <h4>Não tem uma conta? <span onClick={()=>setRegister(!register)}>Cadastre-se aqui!</span></h4>
                    </form>
                    <button className="btn-google"><FcGoogle/> Continue com Google</button>
                </div>
                :
                <div className="register">
                    <h2>Cadastro</h2>

                    <form onSubmit={(e)=>handleRegister(e)}>
                        <input type="text" placeholder="Nome" onChange={(e)=>setNome(e.target.value)} required autoComplete="username"  />
                        <input type="text" placeholder="Sobrenome" onChange={(e)=>setSobrenome(e.target.value)} required />

                        <input type="email" placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)} required />
                        <input type="password" placeholder="Senha" onChange={(e)=>setPass(e.target.value)} required autoComplete="current-password" />
                        <input type="checkbox" id="profesor" onChange={()=>setProfesor(!profesor)} /><label htmlFor="profesor">Professor</label>
                        <button title="Sign In" >Cadastrar!</button>
                        <h4>Ja tem uma conta? <span onClick={()=>setRegister(!register)}>Faça login aqui!</span></h4>
                    </form>
                    <button className="btn-google"><FcGoogle/> Continue com Google</button>
                </div>
            }
            </div>{/* container */}
        </section>
    );
}
