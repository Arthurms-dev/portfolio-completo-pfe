import "./globals.css";
import GlowEffect from "../app/components/GlowEffect"; 

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <GlowEffect /> 
        {children}
      </body>
    </html>
  );
}