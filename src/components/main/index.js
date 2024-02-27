import React from "react";
import "./main.css";
import Projeto from "../projetos";

const Main = () => {
  return (
    <div className="main-section">
      <section id="first-section">
        <h1>Sobre</h1>
        <span>
          Ex-enfermeira que se apaixonou pelo mundo da tecnologia e
          desenvolvimento de sistemas.
        </span>

        <img
          alt="gif do bob esponja"
          src="https://i.giphy.com/media/SKGo6OYe24EBG/giphy.webp"
        />
      </section>
      <section id="second-section">
        <h1>Projetos</h1>
        <button>+</button>
        <Projeto />
      </section>
    </div>
  );
};

export default Main;
