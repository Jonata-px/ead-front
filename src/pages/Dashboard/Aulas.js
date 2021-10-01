
import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import { GrLike, GrDislike, GrChatOption, GrNotes, GrDownload} from "react-icons/gr";


export default function Aulas() {
    const [comment, setComment] = useState();
    //id da aula
    let { aulaId, materia } = useParams();
    var aulas = ['','','','','','','']

    const openCommnets = (open)=>{
        let commnets = document.querySelector('.comments');
        if(open){
            commnets.style.display = 'block';
        }else{
            commnets.style.display = 'none';
        }
    }

    return (
       <div className="container">

           <div onClick={()=>openCommnets(false)} className="comments">
               <div onClick={(e)=>e.stopPropagation()} className="comments-wrap">
                    <h1>Comentarios</h1>
                    <div className="comentarios">
                        <div className="comments-single">
                            <h4>Nome</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Phasellus lacinia mi nisi, in blandit nisl dapibus at. Aenean congue consequat risus.</p>
                        </div>

                        <div className="comments-single">
                            <h4>Nome</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Phasellus lacinia mi nisi, in blandit nisl dapibus at. Aenean congue consequat risus.</p>
                        </div>

                        <div className="comments-single">
                            <h4>Nome</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Phasellus lacinia mi nisi, in blandit nisl dapibus at. Aenean congue consequat risus.</p>
                        </div>

                        <div className="comments-single">
                            <h4>Nome</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Phasellus lacinia mi nisi, in blandit nisl dapibus at. Aenean congue consequat risus.</p>
                        </div>

                        <div className="comments-single">
                            <h4>Nome</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Phasellus lacinia mi nisi, in blandit nisl dapibus at. Aenean congue consequat risus.</p>
                        </div>
                    </div>

                    <form>
                        <h3>deixe seu comentario!</h3>
                        <textarea onChange={(e)=>setComment(e.target.value)}></textarea>
                        <button>Enviar!</button>
                    </form>
                </div>
           </div>

        <section className="aulas">
            <div className="aula-conteudo">
                <div className="aula-video-wrap">
                    <div className="aula-video">
                        <iframe width="727" height="409" src="https://www.youtube.com/embed/vOXZkm9p_zY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <h1>Titulo do video</h1>
                    <div className="aula-video-opsoes">
                        <div className="aula-video-reacao">
                            <div>
                                <button><GrLike/></button><span>Qtd</span>
                            </div>
                            <div>
                                <button><GrDislike/></button><span>Qtd</span>
                            </div>
                        </div>

                        <div>
                            <button onClick={()=>openCommnets(true)}><GrChatOption/></button>
                            <button><GrNotes/></button>
                            <button><GrDownload/></button>
                        </div>
                    </div>
                </div>

                <div className="aula-leitura">
                    <h2>Conteúdo (leitura)</h2>
                </div>
            </div>

            <aside className="all-aulas">
                <h1>Nome do conteudo</h1>
                <p><span>Professor</span>: Nome</p>
                <div className="all-aula-wrap">
                    {
                        aulas.map((val,key)=>{
                            return(
                                <div key={key} className="all-aulas-single">
                                    <Link to={'aula/'+key}>
                                        <img src="https://agenciavulgata.com.br/wp-content/uploads/2019/10/O-que-%C3%A9-Tumblr-Ag%C3%AAncia-Vulgata.jpg"/>
                                        <h3>Titulo do conteudo</h3>
                                    </Link>
                                </div>
                            )
                        })
                    }
                    <div className="scroll-bar"></div>
                </div>
            </aside>
        </section>

       </div>
            
       
    );
}
