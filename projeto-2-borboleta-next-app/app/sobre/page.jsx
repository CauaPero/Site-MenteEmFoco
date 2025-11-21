"use client"
import { useEffect } from "react"
import styles from './Sobre.module.css';

export default function Sobre() {

useEffect(() => {
    const btn = document.getElementById("btnTopo");

    if (btn) {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                btn.style.display = "block";
            } else {
                btn.style.display = "none";
            }
        };

        window.addEventListener("scroll", handleScroll);
        
       
        btn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }
    return () => {}; 
}, []);
  return (
    <section>
      
      <main className={styles.cardPrincipal}> 
        
        <article className={styles.principal}>
          <h2>Sobre o Projeto</h2>

          <section className={styles.secundaria}>
            <div className={styles.texto}>
              <p>
                A saúde mental é um tema cada vez mais discutido, mas ainda cercado de tabus e desinformação. 
                <br /> 
                Esse projeto nasceu da vontade de tornar o cuidado com a mente algo mais acessível, simples e acolhedor.
              </p>
            </div>
            <img src="/imagens/meditar.png" alt="Pessoa relaxando em ambiente calmo" className={styles.imagem} />
          </section>

          <section className={`${styles.secundaria} ${styles.invertida}`}>
            <img src="/imagens/calmo.png" alt="Rede de apoio e união" className={styles.imagem} />
            <div className={styles.texto}>
              <p>
                Aqui, reunimos informações confiáveis, dicas práticas e recursos de apoio que podem fazer diferença no dia a dia. 
                <br />
                O site não substitui a ajuda profissional, mas funciona como um espaço de orientação e incentivo para quem busca conhecer melhor a si mesmo e cuidar do seu bem-estar.
              </p>
            </div>
          </section>
        </article>

        <section className={styles.sobre}>
          <blockquote>
            “Cuidar da mente é tão importante quanto cuidar do corpo.”
          </blockquote>

          <h2>O que você vai encontrar aqui?</h2>
          
          <div className={styles.cards}>
            <div className="card">Técnicas de respiração</div>
            <div className="card">Teste interativo</div>
            <div className="card">Espaço de ajuda</div>
            <div className="card">Conteúdos de apoio</div>
          </div>

          <p className={styles.aviso}>
            <strong>Aviso:</strong> Este site é apenas informativo e não substitui acompanhamento psicológico ou médico.
          </p>
        </section>
      </main>
      
    </section>
  )
}