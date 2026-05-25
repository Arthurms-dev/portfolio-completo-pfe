"use client";

import "../globals.css";
import Perfil from "../../public/assets/foto perfil.jpg";
import Certificado from "../../public/assets/certificado.png";
import Logo from "../../public/assets/logo.png";
import { useEffect, useRef } from "react";
import Link from 'next/link';

export default function About() {
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
    <div className="about-container">
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
              <Link href="/about" className="active-link"><span className="nav-dash">—</span>SOBRE</Link>
              <Link href="/academy-experience"><span className="nav-dash">—</span>EXPERIÊNCIA ACADÊMICA</Link>
              <Link href="/projects"><span className="nav-dash">—</span>PROJETOS DESENVOLVIDOS</Link>
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
          <section id="about-detailed">
            <h2 className="page-title">Sobre Mim</h2>
            <div className="about-content">
              <p>
                Sou um estudante cursando na área de tecnologia, focado atualmente em criar aplicações eficientes e escaláveis. 
                Neste novo ano de 2026, consegui iniciar um estágio no Ministério da Saúde voltado para criação de sistemas que agregam no setor. Atualmente, curso Sistemas para
                Internet na Universidade Católica de Pernambuco no terceiro período, onde tenho me dedicado a aprender as melhores práticas de desenvolvimento web, com foco em React e Next.js.
              </p>
            </div>

            <div className="tech-section">
              <h3>Tecnologias Utilizadas no Projeto</h3>
              <div className="tech-grid">
                <div className="tech-item">React</div>
                <div className="tech-item">Next.js</div>
                <div className="tech-item">Node.js</div>
                <div className="tech-item">CallMeBot API</div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer>
        <p>Projetado e desenvolvido por <strong>Arthur Vinícius</strong> &copy; 2026</p>
      </footer>
    </div>
  );
}