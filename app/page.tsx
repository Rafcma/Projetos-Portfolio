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
      {/* #region Fundo Animado */}
      <FundoCodigo />
      {/* #endregion */}

      {/* #region Sobreposição para melhor legibilidade do texto */}
      <div className="fixed inset-0 z-0 bg-black/40" />
      {/* #endregion */}

      {/* #region Botão Reiniciar Console */}
      <div className="absolute top-4 right-4 z-50">
        <BotaoReiniciarConsole />
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
