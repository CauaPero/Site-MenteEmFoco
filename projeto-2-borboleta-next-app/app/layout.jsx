import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

export const metadata = {
  title: "Projeto Borboleta – Mente em Foco",
  description: "Site educativo sobre saúde mental e ansiedade.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
