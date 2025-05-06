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
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* #region Imagem de Fundo */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wp14013807.jpg-R0GMP9bCUVPW5Qfg2rbLlUeYSGymlM.jpeg")',
          backgroundPosition: "center 40%",
          filter: "brightness(0.7) contrast(1.1)",
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
      <div className="container mx-auto px-4 py-8 h-screen flex flex-col relative z-10">
        {inicializando ? <SequenciaInicializacao /> : <Terminal />}
      </div>
      {/* #endregion */}
    </main>
  )
}
/* #endregion */
