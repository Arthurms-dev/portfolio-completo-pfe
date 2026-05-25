import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { userName } = await request.json();

    const phone = "+558199944106"; 
    const apiKey = "7518243"; 
    const message = `Olá Arthur! Meu nome é ${userName} e vi seu portfólio. Gostaria de conversar com você!`;
    const encodedMessage = encodeURIComponent(message);

    const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodedMessage}&apikey=${apiKey}`;
    
    const response = await fetch(url);

    if (response.ok) {
      return NextResponse.json({ message: "Sucesso!" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Erro na API do CallMeBot" }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Erro interno no servidor" }, { status: 500 });
  }
}