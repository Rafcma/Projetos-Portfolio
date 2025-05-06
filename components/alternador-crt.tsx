/* #region Alternador de Efeito CRT */
"use client"

import { useState, useEffect } from "react"
import { Monitor } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export function AlternadorCRT() {
  const [efeito_crt_ativado, setEfeitoCRTAtivado] = useState(false)

  useEffect(() => {
    const corpo = document.body
    if (efeito_crt_ativado) {
      corpo.classList.add("crt")
    } else {
      corpo.classList.remove("crt")
    }

    // Salvar preferência no localStorage
    localStorage.setItem("efeito-crt", efeito_crt_ativado.toString())

    return () => {
      corpo.classList.remove("crt")
    }
  }, [efeito_crt_ativado])

  // Carregar preferência do localStorage ao montar
  useEffect(() => {
    const preferencia_salva = localStorage.getItem("efeito-crt")
    if (preferencia_salva === "true") {
      setEfeitoCRTAtivado(true)
    }
  }, [])

  return (
    <Toggle
      aria-label="Alternar efeito CRT"
      pressed={efeito_crt_ativado}
      onPressedChange={setEfeitoCRTAtivado}
      className="data-[state=on]:bg-primary/20"
    >
      <Monitor className="h-4 w-4 mr-2" />
      Efeito CRT
    </Toggle>
  )
}
/* #endregion */
