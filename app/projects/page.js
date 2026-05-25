"use client";

import "../globals.css";
import Image from 'next/image'; 
import Perfil from "../../public/assets/foto perfil.jpg"; 
import Certificado from "../../public/assets/certificado.png"; 
import { useEffect, useRef } from "react";
import Link from 'next/link';
import imgKora1 from "../../public/assets/kora/imagemKoraUm.png";
import imgKora2 from "../../public/assets/kora/imagemKoraDois.png";
import imgKora3 from "../../public/assets/kora/imagemKoraTres.png";
import imgChrono1 from "../../public/assets/ChronoTask/imagemTaskUm.png";
import imgChrono3 from "../../public/assets/ChronoTask/imagemTaskDois.png";


export default function Projects() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        glowRef.current.style.transform = `translate(${x - 400}px, ${y - 400}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="projects-container">
      <div className="glow" ref={glowRef}></div>

      <div className="layout">
        <header className="left-side">
          <div className="profile-header">
            <h1>Arthur Vinícius</h1>
            <img src={Perfil.src || Perfil} alt="Perfil" className="profile-pic-inline" />
          </div>

          <div className="sidebar-info">
            <h2>Estagiário de TI - Serpro</h2>
            <p>Estudante de Sistemas para Internet na UNICAP.</p>

            <nav className="nav-menu">
              <Link href="/"><span className="nav-dash">—</span>HOME</Link>
              <Link href="/about"><span className="nav-dash">—</span>SOBRE</Link>
              <Link href="/academy-experience"><span className="nav-dash">—</span>EXPERIÊNCIA ACADÊMICA</Link>
              <Link href="/projects" className="active-link"><span className="nav-dash">—</span>PROJETOS DESENVOLVIDOS</Link>
              <Link href="/professional-experience"><span className="nav-dash">—</span>EXPERIÊNCIA PROFISSIONAL</Link>
            </nav>
          </div>

          <div className="footer-sidebar">
            <p className="cert-label">Certificação em Destaque</p>
            <a href="/certificado-rocketseat.pdf" target="_blank" rel="noopener noreferrer">
              <img src={Certificado.src || Certificado} alt="Certificado" className="cert-img" />
            </a>
          </div>
        </header>

        <main className="right-side">
          <section id="projects-list">
            <h2 className="page-title">Projetos Desenvolvidos</h2>
            <p style={{marginBottom: '40px'}}>Soluções tecnológicas focadas em automação, produtividade e organização de fluxos de trabalho.</p>

            <div className="projects-grid">
              
              <div className="project-card">
                <div className="project-card-header">
                  <div className="project-title-area">
                    <h3>Kora IA</h3>
                    <span className="status-badge approved">Aprovado</span>
                  </div>
                </div>

                <div className="project-body">
                  <p className="project-description">
                    Sistema de construção de relatórios de convênios de saúde que utiliza <strong>Inteligência Artificial</strong>. 
                    O sistema processa PDFs com informações brutas e automatiza o preenchimento de questionários complexos.
                  </p>
                  
                  <div className="highlight-box">
                    <span className="highlight-icon">🚀</span>
                    <p><strong>Impacto:</strong> Redução do tempo de elaboração de <strong>3 dias para apenas 1 dia</strong> por relatório.</p>
                  </div>

                  <div className="project-images-placeholder">
                    <div className="img-container">
                      <Image 
                        src={imgKora1}
                        alt="Kora IA" 
                        width={400} 
                        height={250} 
                        className="project-img"
                      />
                    </div>
                    <div className="img-container">
                      <Image 
                        src={imgKora2}
                        alt="Kora IA" 
                        width={400} 
                        height={250} 
                        className="project-img"
                      />
                    </div>
                    <div className="img-container">
                      <Image 
                        src={imgKora3}
                        alt="Kora IA" 
                        width={400} 
                        height={250} 
                        className="project-img"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-card-header">
                  <div className="project-title-area">
                    <h3>ChronoTask</h3>
                    <span className="status-badge developing">Em Desenvolvimento (60%)</span>
                  </div>
                </div>

                <div className="project-body">
                  <p className="project-description">
                    Sistema de gestão de demandas para equipes, com níveis de acesso para <strong>Administradores e Funcionários</strong>. 
                    Permite atribuição de tarefas com controle rigoroso de data/hora de início e término.
                  </p>
                  
                  <div className="highlight-box">
                    <span className="highlight-icon">📊</span>
                    <p><strong>Objetivo:</strong> Tornar o fluxo de tarefas visível e maleável, gerando relatórios mensais automáticos de produtividade.</p>
                  </div>

                  <div className="project-images-placeholder">
                    <div className="img-container">
                      <Image 
                        src={imgChrono1}
                        alt="Interface do ChronoTask - Login" 
                        width={400} 
                        height={250} 
                        className="project-img"
                      />
                    </div>
                    <div className="img-container">
                      <Image 
                        src={imgChrono3}
                        alt="ChronoTask - Relatórios" 
                        width={400} 
                        height={250} 
                        className="project-img"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div >
          </section>
        </main>
      </div>

      <footer>
        <p>Projetado e desenvolvido por <strong>Arthur Vinícius</strong> &copy; 2026</p>
      </footer>
    </div>
  );
}