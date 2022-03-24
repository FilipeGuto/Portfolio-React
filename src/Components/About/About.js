import React from "react";
import "./About.css";
import aboutImg from "../../img/Filipe.jpeg";

function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0)
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">Quem sou?</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Desde pequeno sou apaixonado por tecnologia, games e desenvolvimento.
                Porém nunca havia entrado de cabeça nessa area. Até o presente momento!
                Muito prazer, no momento sou estudante de desenvolvimento web, já tenho certificados tanto de
                Front-end como também de Back-end.
                Estou vindo de uma transição de carreira, onde eu trabalhei durante 05 anos como vendedor em
                comercio.
              </p>
              <p className="about__text p__color">
                Minhas especialidades incluem trabalho em equipe, comunicação, criatividade e organização além
                de muita vontade de aprender e procurar aprender com as pessoas em minha volta.
                Meus aprendizados continuos são: HTML + CSS + React + JavaScript + Node.js + MongoDb + MySQL e
                também o uso diario do GIT e GitHub onde tenho projetos.
                Estou na minha busca apaixonada de me tornar uma pessoa e um desenvolvedor com excelência.
                O objetivo está cada dia mais próximo!
              </p>
              <p className="about__text p__color">
                “Acredito que é possível que pessoas comuns escolham ser extraordinárias.” - Elon Musk
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
