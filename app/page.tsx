/* #region Página Principal */
"use client"

import { useEffect, useState } from "react"
import Terminal from "@/components/terminal"
import SequenciaInicializacao from "@/components/sequencia-inicializacao"
import { AlternadorCRT } from "@/components/alternador-crt"

export default function Home() {
  /* #region Estados */
  const [inicializando, setInicializando] = useState(true)
  /* #endregion */

  /* #region Efeitos */
  useEffect(() => {
    const temporizador = setTimeout(() => {
      setInicializando(false)
    }, 2500)

    return () => clearTimeout(temporizador)
  }, [])
  /* #endregion */

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* #region Imagem de Fundo */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundColor: "#000000",
        }}
        aria-hidden="true"
      >
        {/* Sobreposição para melhor legibilidade do texto */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* #endregion */}

      {/* #region Alternador CRT */}
      <div className="absolute top-4 right-4 z-50">
        <AlternadorCRT />
      </div>
      {/* #endregion */}

      {/* #region Conteúdo Principal */}
      <div className="container mx-auto px-4 py-8 h-screen flex flex-col relative z-10 max-w-5xl">
        {inicializando ? <SequenciaInicializacao /> : <Terminal />}
      </div>
      {/* #endregion */}
    </main>
  )
}
/* #endregion */
