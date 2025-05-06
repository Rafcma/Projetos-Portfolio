/* #region Retrato ASCII Canvas */
"use client"

import { useEffect, useRef } from "react"

/* #region Tipos de Retrato Canvas */
interface PropsRetratoASCIICanvas {
  largura?: number
  altura?: number
  contraste?: number
  brilho?: number
}
/* #endregion */

export function RetratoASCIICanvas({
  largura = 100,
  altura = 120,
  contraste = 1.4,
  brilho = 0.7,
}: PropsRetratoASCIICanvas) {
  const ref_canvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref_canvas.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    /* #region Carregamento e Processamento de Imagem */
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = "/images/minha-foto.png" // Caminho correto para sua imagem local

    img.onerror = () => {
      console.error("Erro ao carregar a imagem. Verificando caminho alternativo...")
      // Fallback para uma imagem padrão caso a primeira falhe
      img.src = "/images/minha-foto.jpg" // Tenta com extensão jpg
    }

    img.onload = () => {
      // Calcular proporção e aplicar melhor recorte
      const largura_original = img.width
      const altura_original = img.height

      // Definir área de recorte (foco no rosto e parte superior do corpo)
      const recorte_x = largura_original * 0.2 // Recortar 20% da esquerda
      const recorte_y = altura_original * 0.05 // Recortar 5% do topo
      const recorte_largura = largura_original * 0.6 // Usar 60% da largura
      const recorte_altura = altura_original * 0.7 // Usar 70% da altura

      const proporcao = recorte_largura / recorte_altura
      const largura_ajustada = Math.floor(altura * proporcao)

      // Criar um canvas temporário para processamento de imagem
      const canvas_temp = document.createElement("canvas")
      const ctx_temp = canvas_temp.getContext("2d", { alpha: false })
      if (!ctx_temp) return

      canvas_temp.width = largura_ajustada
      canvas_temp.height = altura

      // Desenhar e processar a imagem com recorte
      ctx_temp.drawImage(
        img,
        recorte_x,
        recorte_y,
        recorte_largura,
        recorte_altura, // Retângulo de origem
        0,
        0,
        largura_ajustada,
        altura, // Retângulo de destino
      )

      // Aplicar ajustes de contraste e brilho
      const dados_imagem = ctx_temp.getImageData(0, 0, largura_ajustada, altura)
      const dados = dados_imagem.data

      for (let i = 0; i < dados.length; i += 4) {
        // Aplicar brilho
        dados[i] = Math.min(255, dados[i] * brilho)
        dados[i + 1] = Math.min(255, dados[i + 1] * brilho)
        dados[i + 2] = Math.min(255, dados[i + 2] * brilho)

        // Aplicar contraste
        dados[i] = Math.min(255, Math.max(0, ((dados[i] / 255 - 0.5) * contraste + 0.5) * 255))
        dados[i + 1] = Math.min(255, Math.max(0, ((dados[i + 1] / 255 - 0.5) * contraste + 0.5) * 255))
        dados[i + 2] = Math.min(255, Math.max(0, ((dados[i + 2] / 255 - 0.5) * contraste + 0.5) * 255))
      }

      ctx_temp.putImageData(dados_imagem, 0, 0)

      // Configurar o canvas principal
      const largura_char = 6
      const altura_char = 10
      canvas.width = largura_ajustada * largura_char
      canvas.height = altura * altura_char

      // Limpar canvas e definir fundo
      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Conjunto avançado de caracteres ASCII com pesos visuais variados
      const caracteres_ascii = [
        "@",
        "%",
        "#",
        "8",
        "&",
        "W",
        "M",
        "B",
        "O",
        "Q",
        "D",
        "X",
        "H",
        "U",
        "A",
        "K",
        "V",
        "Z",
        "Y",
        "N",
        "C",
        "L",
        "T",
        "I",
        "J",
        "F",
        "S",
        "G",
        "P",
        "E",
        "R",
        "?",
        "7",
        "1",
        "/",
        "\\",
        "|",
        "(",
        ")",
        "{",
        "}",
        "[",
        "]",
        "*",
        "+",
        "~",
        "-",
        "_",
        ":",
        ";",
        "!",
        ">",
        "<",
        '"',
        "^",
        "=",
        ",",
        ".",
        "`",
        " ",
      ]

      // Obter dados da imagem processada
      const dados_imagem_processada = ctx_temp.getImageData(0, 0, largura_ajustada, altura)
      const dados_processados = dados_imagem_processada.data

      // Desenhar arte ASCII com algoritmo aprimorado
      ctx.textBaseline = "top"
      ctx.font = `${altura_char}px "JetBrains Mono"`

      for (let y = 0; y < altura; y++) {
        for (let x = 0; x < largura_ajustada; x++) {
          const i = (y * largura_ajustada + x) * 4
          const r = dados_processados[i]
          const g = dados_processados[i + 1]
          const b = dados_processados[i + 2]

          // Calcular brilho percebido (olho humano é mais sensível ao verde)
          const brilho = 0.299 * r + 0.587 * g + 0.114 * b

          // Mapear brilho para caractere ASCII com mais precisão
          const indice_char = Math.floor((brilho / 255) * (caracteres_ascii.length - 1))
          const caractere = caracteres_ascii[indice_char]

          // Criar gradiente para cada caractere baseado nos pixels ao redor
          const gradiente = ctx.createLinearGradient(
            x * largura_char,
            y * altura_char,
            x * largura_char + largura_char,
            y * altura_char + altura_char,
          )

          gradiente.addColorStop(0, `rgba(${r},${g},${b},1)`)

          // Amostrar pixels próximos para gradiente
          if (x < largura_ajustada - 1 && y < altura - 1) {
            const i2 = ((y + 1) * largura_ajustada + (x + 1)) * 4
            gradiente.addColorStop(
              1,
              `rgba(${dados_processados[i2]},${dados_processados[i2 + 1]},${dados_processados[i2 + 2]},1)`,
            )
          } else {
            gradiente.addColorStop(1, `rgba(${r},${g},${b},1)`)
          }

          ctx.fillStyle = gradiente
          ctx.fillText(caractere, x * largura_char, y * altura_char)
        }
      }
    }
    /* #endregion */
  }, [largura, altura, contraste, brilho])

  return (
    <div className="container-retrato-ascii flex justify-center my-4">
      <div className="relative group">
        <canvas
          ref={ref_canvas}
          className="border border-primary/30 rounded shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/40"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
      </div>
    </div>
  )
}
/* #endregion */
