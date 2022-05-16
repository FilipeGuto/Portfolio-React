import React from "react";
import "./Project.css";
import Project1 from '../../img/port-1.png';
import Project2 from '../../img/port-2.png';
import Project3 from '../../img/port-3.png';
import Project4 from '../../img/port-4.png';
import Project5 from '../../img/port-5.png';
import Project6 from '../../img/port-6.png';
import Project7 from '../../img/port-7.png';
import Project8 from '../../img/port-8.png';

function Project() {
    return (
        <div className="project component__space" id="Portfolio">
            <div className="heading">
            </div>
            <div className="container">
                <div className="row">

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project1} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Portfolio - HTML/CSS</h5>
                                <h4 className="project__text">Meu primiro projeto, portfolio em HTML e CSS, usando uma template em bootstrap.</h4>
                                <a href="https://filipeguto.github.io/Filipe_Guto_Portfolio/" target="_blank" className="project__btn" rel="noreferrer">Ver Detalhes</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project2} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Pokedex</h5>
                                <h4 className="project__text">Projeto feito com API de pokemon.</h4>
                                <a href="https://filipeguto.github.io/Project_Pokedex_1_Generation/" target="_blank" className="project__btn" rel="noreferrer">Ver Detalhes</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Formulario - Trybewarts</h5>
                                <h4 className="project__text">Projeto de formulario, em HTML e CSS.</h4>
                                <a href="https://filipeguto.github.io/Trybewarts/" target="_blank"className="project__btn" rel="noreferrer">Ver Detalhes</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project4} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">E-commerce</h5>
                                <h4 className="project__text">Meu primeiro projeto feito em grupo, usando API do mercado livre.</h4>
                                <a href="https://project-store-online.vercel.app/" target="_blank" className="project__btn" rel="noreferrer">Ver Detalhes</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project5} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">React - NASA</h5>
                                <h4 className="project__text">Projeto feito com API NASA em react.</h4>
                                <a href="https://project-nasa-api.vercel.app/"  target="_blank" className="project__btn" rel="noreferrer">Ver Detalhes</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project6} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">App de Receitas</h5>
                                <h4 className="project__text">Projeto feito em grupo, em React feito para uso em mobile</h4>
                                <a href="https://project-app-receitas.vercel.app/"  target="_blank" className="project__btn" rel="noreferrer">Ver Detalhes</a>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project7} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Wishlist</h5>
                                <h4 className="project__text">Projeto com base em uma lista de presente,feito em React com uso de bootstrap para todo layout</h4>
                                <a href="https://wish-list-weld.vercel.app/"  target="_blank" className="project__btn" rel="noreferrer">Ver Detalhes</a>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project8} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Coin Store</h5>
                                <h4 className="project__text">Projeto Full Stack, de um e-commerce, com testes para back e front e deploy</h4>
                                <a href="https://deft-moxie-065dae.netlify.app/"  target="_blank" className="project__btn" rel="noreferrer">Ver Detalhes</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
