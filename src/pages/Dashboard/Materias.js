
import React from 'react';
import {Link} from 'react-router-dom';


export default function Materias() {


var colors = ['#52bee4','#5260e4','#52e497','#a552e4','#b8e452'];
var backImage = [
    'https://unileao.edu.br/blog/wp-content/uploads/2019/07/aplicativos-para-melhorar-os-estudos-3.png',
    'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/10/mesa-estudos-organizar2.jpg',
    'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2019/04/saiba-como-elaborar-um-cronograma-de-estudos-infalc3advel-facebook.png',
    'https://www.estudaqui.com/wp-content/uploads/2019/03/aplicativos-para-organizar-estudo-1.jpg',
    'https://www.estudaqui.com/wp-content/uploads/2018/12/est06-como-montar-cronograma-estudos-concurso-min.png'
]



    return (
       <div className="container">

        <section className="materias">
            {
                colors.map((val,key)=>{
                    return (
                        <div key={key} className="materia-single">
                            <Link to={'/aulas/materia/'+key}>
                                <div className="materia-img" style={{backgroundImage: "url("+backImage[key]+")"}}></div>
                                <div className="materia-info">
                                    <h1>Titulo do conteudo</h1>
                                    <h3><span>Professor:</span> Nome do profesor</h3>
                                    <h4><span>Aulas:</span> 10</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus lacinia mi nisi, in blandit nisl dapibus at. Aenean congue consequat risus.</p>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
          
        </section>

       </div>
            
       
    );
}
