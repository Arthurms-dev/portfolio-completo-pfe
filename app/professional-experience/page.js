"use client";

import "../globals.css";
import Perfil from "../../public/assets/foto perfil.jpg";
import Certificado from "../../public/assets/certificado.png";
import { useEffect, useRef } from "react";
import Link from 'next/link';

export default function ProfessionalExperience() {
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
    <div className="prof-container">
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
              <Link href="/projects"><span className="nav-dash">—</span>PROJETOS DESENVOLVIDOS</Link>
              <Link href="/professional-experience" className="active-link"><span className="nav-dash">—</span>EXPERIÊNCIA PROFISSIONAL</Link>
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
          <section id="professional">
            <h2 className="page-title">Experiência Profissional</h2>
            
            <div className="timeline">
              
              <div className="exp-item current-job">
                <div className="exp-status">ATUAL</div>
                <div className="details">
                  <h4 className="job-title">Estagiário</h4>
                  <p className="company-name">Ministério da Saúde (Serpro)</p>
                  <p className="location">📍 Av. Parnamirim - Recife/PE</p>
                  <div className="functions-list">
                    <p>• Apoio administrativo</p>
                    <p>• Criação de soluções tecnológicas para auxiliar e melhorar a organização do setor.</p>
                  </div >
                </div>
              </div>

              <div className="exp-item">
                <div className="details">
                  <h4 className="job-title">Assistente de Departamento Pessoal Júnior</h4>
                  <p className="company-name">Grupo GPS</p>
                  <p className="location">📍 Boa Viagem - Recife/PE</p>
                  <div className="functions-list">
                    <p>• Atendimento de ligações de funcionários</p>
                    <p>• Gestão de vale transporte, alimentação e refeição</p>
                    <p>• Administração de planos de saúde</p>
                    <p>• Processos de demissões e admissões de novos colaboradores</p>
                    <p>• Integração e apresentação aos novos funcionários</p>
                  </div >
                  <div className="promotion-badge">
                    <span>🚀</span>
                    <p>Promovido de Jovem Aprendiz para Assistente de DP Júnior por desempenho e confiança.</p>
                  </div>
                </div>
              </div>

              <div className="exp-item">
                <div className="details">
                  <h4 className="job-title">Jovem Aprendiz</h4>
                  <p className="company-name">Servis Segurança LTDA</p>
                  <p className="location">📍 Imbiribeira - Recife/PE</p>
                  <div className="functions-list">
                    <p>• Apoio administrativo</p>
                    <p>• Auxílio e apoio na equipe de operação</p>
                    <p>• Atendimento de funcionários</p>
                    <p>• Organização de documentos e arquivos</p>
                  </div >
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