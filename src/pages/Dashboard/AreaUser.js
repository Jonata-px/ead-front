
import React, {useEffect} from 'react';
import {FaUserCircle} from 'react-icons/fa';
import {Link} from 'react-router-dom';


export default function AreaUser() {
    var user = {pro:true};

    return (
       <div className="container">

        <section className="area-aluno-perfil">
            <div className="perfil-img">
                {
                    user.imagem?
                        <img src="" alt="user" />
                    :
                        <FaUserCircle/>
                }
                
            </div>
            <div className="perfil-chamada">
                <h1>Olá, Nome sobrenome</h1>
                {
                    !user.pro?
                        <p>Seja bem-vindo a área do aluno.<br/> Confira suas informações aqui</p>
                    :
                        <p>Seja bem-vindo a área do professor.<br/> Confira suas informações e publicações aqui</p>
                }
            </div>
        </section>

        <section className="info-user">
            <div className="info-user-single">
                <h3>Nome</h3>
                <p>Lorem ipsum</p>
            </div>
            <div className="info-user-single">
                <h3>Sobrenome</h3>
                <p>Lorem ipsum</p>
            </div>
            <div className="info-user-single">
                <h3>E-mail</h3>
                <p>Lorem ipsum</p>
            </div>
            <div className="info-user-single">
                <h3>Data de cadastro</h3>
                <p>29/09/2021</p>
            </div>
        </section>

        {
            user.pro?
                <section className="adicionar-aula-pro">
                    <Link to="/novaAula"><button>Adicionar nova aula</button></Link>
                </section>
            :
                <></>
        }

       </div>
            
       
    );
}
