"use client"
import { useEffect } from "react"
import Link from "next/link"
import styles from './page.module.css'; 

export default function Home() {

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
      <article>
        
        <div className={styles.container1}>
          <div className={styles.introCard}> 
            
            <div className={styles.introLeft}>
              <h2 id="big1">Sua </h2>
              <h2 id="big2">Saúde mental</h2>
              <h2 id="big3">importa.</h2>
              <Link href="/teste" className="btn intro-btn"> Como você está se sentindo hoje? </Link>
            </div>
            
            <div className={styles.introRight}>
              <img src="/imagens/mental-health.png" alt="Ícone de saúde mental" />
            </div>
          </div>
        </div>

        <hr />

        <div className={styles.container2}>
          <div className="card">
            <img src="/imagens/wind.png" alt="respiração" />
            <h2>Respiração</h2>
            <p>Sente muita ansiedade e falta de ar? Confira algumas técnicas que vão te ajudar a resolver isso.</p>
            <Link href="/praticas" className="btn">Saiba mais</Link>
          </div>
          <div className="card">
            <img src="/imagens/heart.png" alt="coração" />
            <h2>Bem-estar</h2>
            <p>Descubra um pouco mais sobre saúde mental, e como nosso site pode ajudar a controlar sintomas.</p>
            <Link href="/sobre" className="btn">Saiba mais</Link>
          </div>
          <div className="card">
            <img src="/imagens/sos.png" alt="sos" />
            <h2>Ajuda</h2>
            <p>Não sabe o que fazer? Aqui têm algo que poderá te ajudar da melhor forma.</p>
            <Link href="/ajuda" className="btn">Saiba mais</Link>
          </div>
        </div>

        <hr />
        
        <div className={styles.intro}>
          <div className={styles.text}>
            <h4>Por que do projeto...</h4>
            <p>
              A saúde mental é um dos maiores desafios enfrentados pela população brasileira. Problemas como estresse, ansiedade e depressão têm crescido de forma alarmante, atingindo pessoas de todas as idades e classes sociais, comprometendo a qualidade de vida, a produtividade no trabalho e os relacionamentos pessoais. Infelizmente, o tema ainda é cercado de preconceitos e estigmas, o que faz com que muitas pessoas sofram em silêncio e não saibam onde buscar apoio ou informação confiável.
              <br /><br />
              O intuito deste projeto é justamente criar um espaço acessível e acolhedor, que ofereça conteúdos informativos de qualidade, ferramentas de autoconhecimento e orientações práticas para lidar com questões do dia a dia relacionadas ao bem-estar emocional. Mais do que um simples site, buscamos construir um ponto de apoio digital, onde o usuário sinta-se à vontade para aprender, refletir e encontrar caminhos para melhorar sua saúde mental.
              <br /><br />
              Nosso projeto também tem como objetivo reduzir o estigma que envolve o cuidado psicológico, mostrando que cuidar da mente é tão importante quanto cuidar do corpo. O site pode funcionar como um primeiro passo para quem ainda não sabe como ou onde procurar ajuda profissional, servindo como uma ponte entre a informação e a ação.
              <br /><br />
              Além disso, acreditamos que a tecnologia pode ser uma grande aliada no processo de transformação social. Com um design simples, moderno e funcional, o site permitirá que qualquer pessoa, de qualquer lugar, tenha acesso a conteúdos que estimulem o diálogo, a empatia e a prevenção de problemas emocionais mais graves.
              <br /><br />
              Assim, a proposta vai além de apenas informar: queremos inspirar mudanças de hábitos, incentivar o autocuidado e promover a valorização da saúde mental no Brasil. Nosso projeto é um convite para que todos reconheçam a importância de olhar para si mesmos, buscar equilíbrio e, principalmente, entender que pedir ajuda não é sinal de fraqueza, mas sim de coragem.
            </p>
          </div>

          <div className={styles.bonequinho}>
            <img src="/imagens/self-care.png" alt="auto-cuidado" />
          </div>
        </div>
      </article>

      <button id="btnTopo" title="Voltar ao topo">↑</button>
    </section>
  )
  }