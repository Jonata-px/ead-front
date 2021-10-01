
import React, {useEffect} from 'react';
import {CgArrowRightR} from 'react-icons/cg';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';


export default function Home() {


var colors = ['#52bee4','#5260e4','#52e497','#a552e4','#b8e452'];
var backImage = [
    'https://unileao.edu.br/blog/wp-content/uploads/2019/07/aplicativos-para-melhorar-os-estudos-3.png',
    'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/10/mesa-estudos-organizar2.jpg',
    'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2019/04/saiba-como-elaborar-um-cronograma-de-estudos-infalc3advel-facebook.png',
    'https://www.estudaqui.com/wp-content/uploads/2019/03/aplicativos-para-organizar-estudo-1.jpg',
    'https://www.estudaqui.com/wp-content/uploads/2018/12/est06-como-montar-cronograma-estudos-concurso-min.png'
]
 const paintSircle = ()=>{
     
     var count = 0;
     let sircles = document.querySelectorAll('.sircle');
     let materia = document.querySelectorAll('.materia h3');
     for(let i = 0;i < sircles.length ;i++){
        sircles[i].style.backgroundColor = colors[count];
        materia[i].style.color = colors[count];
        count++;
        if(count == colors.length){
            count = 0;
        }
     }
 }

 useEffect(() => {
    paintSircle();
 },[])

    return (
       <div className="container">

        <section className="continue">
            <h2>Continue de onde parou</h2>
            <div className="continue-wrap">
                <h3>Titulo do conteúdo</h3>
            </div>
        </section>

        <section className="areas">
            <h2>Áreas</h2>
            <div className="areas-warp">

                <div className="area-ver-mais">
                    <Link to="/materias">
                        <button>
                            <CgArrowRightR/>
                            <h1>Ver Mais</h1>  
                        </button>
                    </Link>
                </div>

                <div className="">
                    
                </div>
                <Swiper slidesPerView={5} spaceBetween={30} freeMode={true} pagination={{
                "clickable": true
                }} breakpoints={{
                    "300": {
                        "slidesPerView": 1,
                        "spaceBetween": 30
                    },
                    "400": {
                        "slidesPerView": 1,
                        "spaceBetween": 30
                    },
                    "500": {
                        "slidesPerView": 2,
                        "spaceBetween": 30
                    },
                    "640": {
                      "slidesPerView": 3,
                      "spaceBetween": 30
                    },
                    "868": {
                      "slidesPerView": 4,
                      "spaceBetween": 40
                    }}} className="mySwiper">
                        {
                            colors.map((val,key)=>{
                                return(
                                    <SwiperSlide className="materia" key={key} >
                                        <div className="sircle"></div>
                                
                                        <Link to={"aulas/materia/"+key}>
                                            <div className="center">
                                                <h3>Materia</h3>
                                                <h4>Qtd.aula</h4>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                )
                            })
                        }
                    
                    
                </Swiper>
            </div>
        </section>

       </div>
            
       
    );
}
