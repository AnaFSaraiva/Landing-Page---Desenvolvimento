import "./projeto.css";
import "../../objeto.js";
import projetos from "../../objeto.js";

const Projeto = () => {
  return projetos.map((e) => (
    <div className="itemProjeto" key={e.titulo}>
      <h2>{e.titulo}</h2>
      <span>{e.descrição}</span>
      <img
        alt="gif do bob esponja"
        src="https://i.giphy.com/media/WoWm8YzFQJg5i/200.webp"
      />
    </div>
  ));
};

export default Projeto;
