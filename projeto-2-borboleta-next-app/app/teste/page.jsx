"use client"
import { useEffect, useState } from "react"
import styles from './Teste.module.css' 

export default function Teste() {
  const [resultado, setResultado] = useState("") 

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

  const handleFinalizar = () => {
    const pontuacoes = [ 
        [1, 2, 3, 4, 5], 
        [1, 2, 3, 4, 5], 
        [1, 2, 3, 4, 5], 
        [1, 2, 3, 4, 5], 
        [1, 2, 3, 4, 5], 
        [1, 2, 3, 4, 5],
    ];

    let total = 0
    let respondidas = 0

    for (let i = 1; i <= 6; i++) {
      const selecionada = document.querySelector(`input[name="q${i}"]:checked`)
      if (selecionada) {
        const opcoes = Array.from(document.querySelectorAll(`input[name="q${i}"]`));
        const index = opcoes.indexOf(selecionada);
        
        total += pontuacoes[i - 1][index]; 
        respondidas++
      }
    }

    if (respondidas < 6) {
      setResultado("Por favor, responda todas as perguntas!")
      return
    }

    let mensagem = ""
    if (total <= 10) {
      mensagem = "Você parece estar precisando de atenção e autocuidado. Busque ajuda!"
    } else if (total <= 18) {
      mensagem = "Seu estado está razoável, mas pode melhorar. Continue praticando o autocuidado."
    } else {
      mensagem = "Ótimo! Você está se sentindo bem! Continue assim."
    }

    setResultado(`${mensagem}`)
  }

  return (
    <section>
      
      <main className={styles.cardPrincipal}>

        <article>
          <section className={styles.quizContainer}>
            <h2>Responda com sinceridade:</h2>
            
            <div className={styles.perguntaCard}>
              <p>1. Como você se sente hoje?</p>
              {["Muito mal", "Mal", "Normal", "Bem", "Muito bem"].map((opt, i) => (
                <label key={i}>
                  <input type="radio" name="q1" /> {opt}
                </label>
              ))}
            </div>

            <div className={styles.perguntaCard}>
              <p>2. Você tem conversado com amigos ou familiares ultimamente?</p>
              {["Não, estou isolado", "Muito pouco", "Às vezes", "Frequentemente", "Todos os dias"].map((opt, i) => (
                <label key={i}>
                  <input type="radio" name="q2" /> {opt}
                </label>
              ))}
            </div>

            <div className={styles.perguntaCard}>
              <p>3. Como está sua energia hoje?</p>
              {["Sem energia nenhuma", "Cansado", "Normal", "Energizado", "Cheio de energia"].map((opt, i) => (
                <label key={i}>
                  <input type="radio" name="q3" /> {opt}
                </label>
              ))}
            </div>

            <div className={styles.perguntaCard}>
              <p>4. Você tem se sentido ansioso ou preocupado com frequência?</p>
              {["Sempre", "Frequentemente", "Às vezes", "Raramente", "Nunca"].map((opt, i) => (
                <label key={i}>
                  <input type="radio" name="q4" /> {opt}
                </label>
              ))}
            </div>

            <div className={styles.perguntaCard}>
              <p>5. Como você se sente em relação a si mesmo?</p>
              {["Muito insatisfeito", "Insatisfeito", "Neutro", "Satisfeito", "Muito satisfeito"].map((opt, i) => (
                <label key={i}>
                  <input type="radio" name="q5" /> {opt}
                </label>
              ))}
            </div>

            <div className={styles.perguntaCard}>
              <p>6. Como está a qualidade do seu sono ultimamente?</p>
              {["Muito ruim (insônia, acorda várias vezes)", "Ruim", "Regular", "Boa", "Muito boa"].map((opt, i) => (
                <label key={i}>
                  <input type="radio" name="q6" /> {opt}
                </label>
              ))}
            </div>

            <button className={styles.botaoFinalizar} onClick={handleFinalizar}>Finalizar</button>

            <div className={styles.resultado}>{resultado}</div>

          </section>
        </article>

      </main>

      <button id="btnTopo" title="Voltar ao topo">↑</button>

    </section>
  )
}