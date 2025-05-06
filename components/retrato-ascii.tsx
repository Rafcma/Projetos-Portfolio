/* #region Retrato ASCII */
"use client"

import { useEffect, useRef } from "react"

/* #region Tipos de Retrato */
interface PropsRetratoASCII {
  largura?: number
  altura?: number
}
/* #endregion */

export function RetratoASCII({ largura = 60, altura = 80 }: PropsRetratoASCII) {
  const ref_canvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref_canvas.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    /* #region Carregamento e Processamento de Imagem */
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pose2.JPEG-6Ua6wNwVYcJtG1UMNf8o6wYovA9RUA.jpeg"

    img.onload = () => {
      // Calcular proporção
      const proporcao = img.width / img.height
      const largura_ajustada = Math.floor(altura * proporcao)

      // Desenhar imagem no canvas
      ctx.drawImage(img, 0, 0, largura_ajustada, altura)

      // Obter dados da imagem
      const dados_imagem = ctx.getImageData(0, 0, largura_ajustada, altura)
      const dados = dados_imagem.data

      // Limpar canvas para redesenhar
      ctx.clearRect(0, 0, largura_ajustada * 10, altura * 10)

      // Caracteres ASCII do mais escuro para o mais claro
      const caracteres_ascii = ["@", "%", "#", "*", "+", "=", "-", ":", ".", " "]

      // Desenhar arte ASCII
      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, largura_ajustada * 10, altura * 10)

      for (let y = 0; y < altura; y++) {
        for (let x = 0; x < largura_ajustada; x++) {
          // Obter cor do pixel
          const i = (y * largura_ajustada + x) * 4
          const r = dados[i]
          const g = dados[i + 1]
          const b = dados[i + 2]

          // Calcular brilho
          const brilho = 0.299 * r + 0.587 * g + 0.114 * b

          // Mapear brilho para caractere ASCII
          const indice_char = Math.floor((brilho / 255) * (caracteres_ascii.length - 1))
          const caractere = caracteres_ascii[indice_char]

          // Usar cor da imagem
          ctx.fillStyle = `rgb(${r},${g},${b})`
          ctx.font = '8px "JetBrains Mono"'
          ctx.fillText(caractere, x * 8, y * 8)
        }
      }
    }
    /* #endregion */
  }, [largura, altura])

  return (
    <div className="container-retrato-ascii flex justify-center my-4 overflow-hidden">
      <div className="relative group">
        <canvas
          ref={ref_canvas}
          width={largura * 10}
          height={altura * 10}
          className="border border-primary/30 rounded transition-all duration-300 filter hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  )
}
/* #endregion */
