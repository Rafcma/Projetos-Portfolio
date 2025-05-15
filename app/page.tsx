/* #region Página Principal */
"use client"

import { useEffect, useState } from "react"
import Terminal from "@/components/terminal"
import SequenciaInicializacao from "@/components/sequencia-inicializacao"
import { BotaoReiniciarConsole } from "@/components/alternador-crt"
import { FundoCodigo } from "@/components/fundo-codigo"

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
      {/* Fundo Animado */}
      <FundoCodigo />

      {/* Sobreposição para melhor legibilidade */}
      <div className="fixed inset-0 z-0 bg-black/40" />

      {/* Botão Reiniciar Console */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 scale-75 sm:scale-100 origin-top-right">
        <BotaoReiniciarConsole />
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 h-screen flex flex-col relative z-10 max-w-5xl overflow-hidden conteudo-principal">
        {inicializando ? <SequenciaInicializacao /> : <Terminal />}
      </div>
    </main>
  )
}
/* #endregion */
