"use client";

import "../globals.css";
import Perfil from "../../public/assets/foto perfil.jpg";
import Certificado from "../../public/assets/certificado.png";
import { useEffect, useRef } from "react";
import Link from 'next/link';

export default function AcademyExperience() {
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
    <div className="academy-container">
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
              <Link href="/academy-experience" className="active-link"><span className="nav-dash">—</span>EXPERIÊNCIA ACADÊMICA</Link>
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
          <section id="academy">
            <h2 className="page-title">Experiência Acadêmica</h2>
            
            <div className="exp-section">
              <h3 className="section-subtitle">Ensino Médio</h3>
              <div className="exp-item">
                <div className="details">
                  <h4>Programação de Jogos Digitais</h4>
                  <p className="institution">Escola Técnica Estadual Cícero Dias</p>
                  <p className="description">
                    Desde os meus passos iniciais no ensino médio, sempre quis buscar algo relacionado a computadores, 
                    com aquela paixão por jogos e resolvi iniciar os estudos no curso de programação de jogos digitais, 
                    onde pude desenvolver dois jogos para projetos acadêmicos: um em 2D e outro em 3D.
                  </p>
                </div>
              </div>
            </div>

            <div className="exp-section" style={{marginTop: '40px'}}>
              <h3 className="section-subtitle">Ensino Superior</h3>
              <div className="exp-item">
                <div className="details">
                  <h4>Sistemas para Internet</h4>
                  <p className="institution">Universidade Católica de Pernambuco (UNICAP)</p>
                  <p className="badge-program">Programa Embarque Digital</p>
                  <p className="description">
                    Ainda focado em computadores e apaixonado pela programação, pude conhecer no fim do meu ensino médio 
                    a programação por fora dos jogos. Onde me interessei por mais áreas relacionadas como front-end e 
                    back-end, querendo ser um desenvolvedor FullStack. 
                    <br/><br/>
                    Com isso, escolhi participar do <strong>Embarque Digital</strong>, uma grande oportunidade de iniciar 
                    uma faculdade através do mérito acadêmico. Atualmente curso Sistemas para Internet, onde me encontro 
                    hoje e agradecido por conseguir um emprego na área.
                  </p>
                </div>
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