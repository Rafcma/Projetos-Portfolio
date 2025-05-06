/* #region Botão Reiniciar Console */
"use client"
import { RefreshCcw } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export function BotaoReiniciarConsole() {
  const reiniciarConsole = () => {
    // Limpar o console e reiniciar a sequência de inicialização
    window.location.reload()
  }

  return (
    <Toggle
      aria-label="Reiniciar Console"
      onClick={reiniciarConsole}
      className="bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.2)]"
    >
      <RefreshCcw className="h-4 w-4 mr-2 hover:animate-spin" />
      Reiniciar Console
    </Toggle>
  )
}
/* #endregion */
