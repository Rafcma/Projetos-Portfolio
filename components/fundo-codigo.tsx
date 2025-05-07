/* #region Fundo de Código */
"use client"

import { useEffect, useRef } from "react"

export function FundoCodigo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar tamanho do canvas para preencher a tela
    const redimensionarCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    redimensionarCanvas()
    window.addEventListener("resize", redimensionarCanvas)

    // Caracteres para o efeito "chuva de código"
    // Adicionar mais caracteres ao conjunto para maior variedade
    // Na linha 22, expandir o conjunto de caracteres
    const caracteres = "01010101110000111010"
    const tamanhoFonte = 14
    const colunas = Math.floor(canvas.width / tamanhoFonte)

    // Array para controlar a posição Y de cada coluna
    const posicaoY = Array(colunas).fill(0)

    // Selecionar apenas algumas colunas para mostrar (para manter o efeito esparso)
    const colunasAtivas = Array(colunas).fill(false)

    // Ativar aproximadamente 5-10% das colunas
    const numColunasAtivas = Math.floor(colunas * 0.18)
    for (let i = 0; i < numColunasAtivas; i++) {
      const indiceAleatorio = Math.floor(Math.random() * colunas)
      colunasAtivas[indiceAleatorio] = true
    }

    // Função para desenhar o efeito
    const desenhar = () => {
      // Fundo semi-transparente para criar efeito de desvanecimento
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Modificar o efeito de fundo para adicionar brilho roxo
      // Definir cor e fonte para os caracteres
      ctx.fillStyle = "rgba(147, 51, 234, 0.3)" // Roxo com transparência
      ctx.font = `${tamanhoFonte}px 'JetBrains Mono', monospace`

      // Adicionar efeito de brilho
      ctx.shadowColor = "rgba(147, 51, 234, 0.5)"
      ctx.shadowBlur = 5
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0

      // Desenhar caracteres
      for (let i = 0; i < colunas; i++) {
        // Apenas desenhar nas colunas ativas
        if (!colunasAtivas[i]) continue

        // Escolher um caractere aleatório
        const caractere = caracteres.charAt(Math.floor(Math.random() * caracteres.length))

        // Posição X baseada no índice da coluna
        const x = i * tamanhoFonte

        // Desenhar o caractere
        ctx.fillText(caractere, x, posicaoY[i])

        // Mover para baixo
        posicaoY[i] += tamanhoFonte

        // Resetar quando chegar ao fundo ou aleatoriamente
        if (posicaoY[i] > canvas.height || Math.random() > 0.98) {
          posicaoY[i] = Math.random() * -100
        }
      }
    }

    // Iniciar animação
    const intervalo = setInterval(desenhar, 80)

    return () => {
      clearInterval(intervalo)
      window.removeEventListener("resize", redimensionarCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 bg-black" style={{ opacity: 0.8 }} />
}
/* #endregion */
