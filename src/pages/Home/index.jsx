import "./style.css";
import Centralimage from "../../assets/Sans titre.jpg";
import projet2 from "../../assets/projet2.webp";
import projet3 from "../../assets/projet3.webp";
import projet4 from "../../assets/projet4.webp";
import projet5 from "../../assets/projet5.webp";
import projet6 from "../../assets/projet6.webp";
import projet7 from "../../assets/projet7.webp";
import projet8 from "../../assets/projet8.webp";
import projet9 from "../../assets/projet9.webp";
import projet10 from "../../assets/projet10.webp";
import projet11 from "../../assets/projet11.webp";

function Home() {
  return (
    <>
      <span className="hideborder"></span>
      <div className="Home">
        <article className="projet2">
          <img alt="" src={projet2} />
        </article>
        <article className="projet3">
          <img alt="" src={projet3} />
        </article>
        <article className="projet4">
          <img alt="" src={projet4} />
        </article>
        <article className="projet5">
          <img alt="" src={projet5} />
        </article>
        <article className="projet6">
          <img alt="" src={projet6} />
        </article>
        <article className="projet7">
          <img alt="" src={projet7} />
        </article>
        <article className="projet8">
          <img alt="" src={projet8} />
        </article>
        <a href="https://rudidonnot.github.io/Nina-Carducci/">
          <article className="projet9">
            <img alt="" src={projet9} />
          </article>
        </a>
        <article className="projet10">
          <img alt="" src={projet10} />
        </article>
        <article className="projet11">
          <img alt="" src={projet11} />
        </article>
        <img className="centerimage" alt="" src={Centralimage} />
      </div>
    </>
  );
}

export default Home;
