"use client";

import "./globals.css";
import Perfil from "../public/assets/foto perfil.jpg";
import Certificado from "../public/assets/certificado.png";
import { useEffect, useRef, useState } from "react";
import Link from 'next/link';

export default function Home() {
  const glowRef = useRef(null);
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!userName) return alert("Por favor, digite seu nome!");
    setIsLoading(true);

    try {
      const response = await fetch('/api/whatsapp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName: userName }),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso! Verifique seu WhatsApp.");
        setUserName(""); 
      } else {
        const errorData = await response.json();
        alert(`Erro: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Erro detalhado:", error);
      alert("Erro de conexão com o servidor.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="home-container">
      <div className="glow" ref={glowRef}></div>

      <div className="layout">
        <header className="left-side">
          <div className="profile-header">
            <h1>Arthur Vinícius</h1>
            <img src={Perfil.src || Perfil} alt="Perfil" className="profile-pic-inline" />
          </div>

          <div className="sidebar-info">
            <h2>Estagiário de TI - Serpro</h2>
            <p>Estudante de Sistemas para Internet na UNICAP, focado em interfaces modernas e eficientes.</p>

            <nav className="nav-menu">
              <Link href="/"><span className="nav-dash">—</span>HOME</Link>
              <Link href="/about"><span className="nav-dash">—</span>SOBRE</Link>
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
          <section id="welcome">
            <h2 className="page-title">Bem-vindo ao meu Portfólio</h2>
            <p>Sou desenvolvedor em formação, focado em criar soluções digitais que unam performance, acessibilidade e design moderno.</p>
            <p style={{ marginTop: '20px' }}>Explore minhas experiências e projetos navegando pelo menu lateral para conhecer mais sobre minha trajetória.</p>

            <div className="contact-wrapper">
              <form onSubmit={handleSendMessage} className="contact-api-form">
                <p className="form-label">Gostaria de conversar? Me mande um "Oi"!</p>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Seu nome..."
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="api-input"
                  />
                  <button type="submit" className="btn-whatsapp" disabled={isLoading}>
                    {isLoading ? "Enviando..." : "🚀 Enviar Mensagem"}
                  </button>
                </div>
              </form>
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