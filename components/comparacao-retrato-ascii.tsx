/* #region Comparação de Retrato ASCII */
"use client"

import { RetratoASCIICanvas } from "./retrato-ascii-canvas"

export function ComparacaoRetratoASCII() {
  /* #region Configurações de Retrato */
  const contraste = 1.4
  const brilho = 0.7
  /* #endregion */

  return (
    <div className="space-y-4">
      <RetratoASCIICanvas largura={100} altura={120} contraste={contraste} brilho={brilho} />
      <div className="text-center text-xs text-muted-foreground mt-2">Retrato Arte ASCII</div>
    </div>
  )
}
/* #endregion */
