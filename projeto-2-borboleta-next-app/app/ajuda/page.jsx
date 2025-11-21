"use client";
import { useEffect } from "react";
import styles from "./Ajuda.module.css"; 

const centrosDeAjuda = [
  {
    nome: "Centro de Apoio Emocional SP - Capital",
    cidade: "São Paulo",
    uf: "SP",
    telefone: "(11) 5461-5600",  
    detalhe: "Atendimento presencial e online, plantão 24h."
  },
  {
    nome: "Centro de Valorização da Vida (CVV)",
    cidade: "Todos",
    uf: "BR",
    telefone: "188",  
    detalhe: "Ligação gratuita e confidencial em todo o Brasil (24h)."
  },
  {
    nome: "CAPS II - Região de Campinas",
    cidade: "Campinas",
    uf: "SP",
    telefone: "(19) 3365-4918",  
    detalhe: "Atendimento especializado em saúde mental na região metropolitana de Campinas."
  },
  {
    nome: "Apoio Psicossocial - RJ",
    cidade: "Rio de Janeiro",
    uf: "RJ",
    telefone: "(21) 3460-1746",  
    detalhe: "Foco em ansiedade e depressão."
  },
  {
    nome: "Serviço de Plantão Psicológico - MG",
    cidade: "Belo Horizonte",
    uf: "MG",
    telefone: "(31) 3277-1573",  
    detalhe: "Consulta inicial gratuita."
  }
];

export default function AjudaPage() {

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const cepInput = e.target.cep;
        const cep = cepInput.value.replace(/\D/g, ''); 
        const resultado = document.getElementById("resultado");

        if (cep.length !== 8) {
            resultado.innerHTML = `<p class="${styles.erro}">Por favor, insira um CEP válido com 8 dígitos.</p>`;
            return;
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                if (data.erro) {
                    resultado.innerHTML = `<p class="${styles.erro}">CEP não encontrado. Tente outro ou verifique a digitação.</p>`;
                    return;
                }

                const cidadeUsuario = data.localidade;
                const ufUsuario = data.uf;

                const centrosProximos = centrosDeAjuda.filter(centro => 
                    centro.cidade.toUpperCase() === cidadeUsuario.toUpperCase() ||
                    centro.uf.toUpperCase() === ufUsuario.toUpperCase() ||
                    centro.uf.toUpperCase() === 'BR'
                );

                let htmlResultado = `
                    <div class="${styles.localizacao}">
                        <h3>Sua Localização:</h3>
                        <p>${data.logradouro ? data.logradouro + ', ' : ''}${data.bairro}</p>
                        <p><strong>${cidadeUsuario} / ${ufUsuario}</strong></p>
                    </div>
                `;

                if (centrosProximos.length > 0) {
                    htmlResultado += `<h3>Centros de Ajuda Encontrados:</h3>`;

                    centrosProximos.forEach(centro => {
                        htmlResultado += `
                            <div class="${styles.cardAjuda}">
                                <h4>${centro.nome}</h4>
                                <p>Telefone: <strong><a href="tel:${centro.telefone.replace(/\D/g, '')}">${centro.telefone}</a></strong></p>
                                <p>Região: ${centro.cidade} / ${centro.uf}</p>
                                <p>${centro.detalhe}</p>
                            </div>
                        `;
                    });
                } else {
                    htmlResultado += `<p class="${styles.aviso}">Nenhum centro local encontrado. Por favor, utilize o serviço de abrangência nacional (CVV - 188).</p>`;
                }

                resultado.innerHTML = htmlResultado;

            })
            .catch(() => {
                resultado.innerHTML = `<p class="${styles.erro}">Erro ao buscar o CEP. Tente novamente mais tarde.</p>`;
            });
    };

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
        <section className={styles.container}>
            <article className={styles.cardPrincipal}>
                <h2>Ajuda e Contato</h2>
                <p>Encontre o centro de apoio mais próximo de você, ou serviços de atendimento nacional, digitando seu CEP.</p>
                <form onSubmit={handleSubmit} className={styles.formulario}>
                    <label htmlFor="cep">CEP:</label>
                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        placeholder="Apenas números, Ex: 01001000"
                        maxLength="8"/>

                    <button type="submit">Buscar Ajuda</button>
                    <button type="reset">Limpar</button>
                </form>

                <div id="resultado">
                    <p>O resultado da sua busca aparecerá aqui.</p>
                </div>
            </article>

            <button id="btnTopo" title="Voltar ao topo">
                ↑
            </button>
        </section>
    );
}