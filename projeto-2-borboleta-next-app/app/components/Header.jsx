"use client"
import Link from "next/link"

export default function Header() {
  return (
    <header>
      <h1>Mente em Foco</h1>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
          <li><Link href="/praticas">Técnicas</Link></li>
          <li><Link href="/teste">Teste</Link></li>
          <li><Link href="/ajuda">Ajuda</Link></li>
        </ul>
      </nav>
    </header>
  )
}
