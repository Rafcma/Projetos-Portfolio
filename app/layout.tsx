import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ProvedorTema } from "@/components/provedor-tema"

/* #region Configuração de Fontes */
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})
/* #endregion */

/* #region Metadados */
export const metadata: Metadata = {
  title: "Rafael Costa Monte Alegre | Programador FrontEnd/BackEnd",
  description: "Portfólio de programação de Rafael Costa Monte Alegre - Desenvolvedor FrontEnd/BackEnd",
  generator: "v0.dev",
}
/* #endregion */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} ${jetbrains_mono.variable} font-sans`}>
        <ProvedorTema
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          forcedTheme="dark"
        >
          {children}
        </ProvedorTema>
      </body>
    </html>
  )
}
/* #endregion */
