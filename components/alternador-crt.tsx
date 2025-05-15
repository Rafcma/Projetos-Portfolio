/* #region Botão Reiniciar Console */
"use client"
import { RefreshCcw } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

export function BotaoReiniciarConsole() {
  const reiniciarConsole = () => {
    window.location.reload()
  }

  return (
    <Toggle
      aria-label="Reiniciar Console"
      onClick={reiniciarConsole}
      className="bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.2)] text-xs sm:text-sm scale-90 sm:scale-100 h-7 w-auto px-1.5 sm:px-3"
    >
      <RefreshCcw className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 hover:animate-spin" />
      <span className="hidden xs:inline">Reiniciar Console</span>
    </Toggle>
  )
}
/* #endregion */
