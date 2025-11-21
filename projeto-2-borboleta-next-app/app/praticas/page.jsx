"use client"
import { useEffect } from "react"
import styles from './Praticas.module.css'; 

export default function Praticas() {

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
        
        <article>
          <div className={styles.intro}>
            <div className={styles.text}>
              <h4>Prática de técnicas de respiração</h4>
              <p>
                A prática de técnicas de respiração tem ganhado destaque na promoção da saúde mental por sua ação direta sobre o sistema nervoso autônomo.
                <br /><br />
                Estudos mostram que a respiração lenta e profunda estimula o nervo vago, responsável pela ativação do sistema parassimpático, o que reduz a frequência cardíaca, a pressão arterial e os níveis de cortisol, hormônio relacionado ao estresse.
                <br /><br />
                Esse mecanismo favorece o relaxamento físico e mental, contribuindo para a diminuição da ansiedade, melhora da qualidade do sono e maior estabilidade emocional.
                <br /><br />
                Além disso, pesquisas em neurociência apontam que exercícios respiratórios regulares aumentam a atividade em áreas cerebrais ligadas à regulação emocional, como o córtex pré-frontal.
                <br /><br />
                Dessa forma, a respiração consciente não é apenas uma ferramenta de relaxamento imediato, mas também um recurso complementar eficaz na prevenção e no tratamento de sintomas de ansiedade e depressão, promovendo maior equilíbrio psicológico e bem-estar geral.
              </p>
            </div>
            <div className={styles.imagemResp}>
              <img src="/imagens/respira.jpg" alt="Pessoa praticando respiração" />
            </div>
          </div>

          <hr />

          <div className={styles.containerCards}>
            <div className="card">
              <h2 id="titulo">Respiração 4-7-8</h2>
              <ul>
                <li>Inspirar pelo nariz contando até 4.</li>
                <li>Segurar o ar por 7 segundos.</li>
                <li>Expirar pela boca contando até 8.</li>
                <li>Indicada para acalmar a mente e facilitar o sono.</li>
              </ul>
            </div>

            <div className="card">
              <h2 id="titulo">Respiração alternada pelas narinas (Nadi Shodhana, do yoga)</h2>
              <ul>
                <li>Tampar uma narina e inspirar pela outra.</li>
                <li>Trocar, expirando pela narina oposta e inspirando por ela.</li>
                <li>Promove equilíbrio e clareza mental.</li>
              </ul>
            </div>

            <div className="card">
              <h2 id="titulo">Respiração consciente (mindful breathing)</h2>
              <ul>
                <li>Observar o ar entrando e saindo, sem forçar o ritmo.</li>
                <li>Focar no presente, ajudando a reduzir pensamentos negativos e ruminativos.</li>
              </ul>
            </div>

            <div className="card">
              <h2 id="titulo">Respiração prolongada na expiração</h2>
              <ul>
                <li>Inspirar em 3–4 segundos.</li>
                <li>Expirar lentamente em 6–8 segundos.</li>
                <li>Prolongar a expiração reduz a frequência cardíaca e ajuda no relaxamento.</li>
              </ul>
            </div>
          </div>

          <hr />

          <div className={styles.youtubeContainer}>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/8YG8HABY25w?si=NlUfVhDKiYXkw3Hb" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </article>
      </main>
      

      <button id="btnTopo" title="Voltar ao topo">↑</button>

    </section>
  )
}