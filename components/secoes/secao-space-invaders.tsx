/* #region Seção Space Invaders */
"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import { ArteASCII } from "@/components/arte-ascii"

export function SecaoSpaceInvaders() {
  /* #region Estados do Jogo */
  const [jogando, setJogando] = useState(false)
  const [pontuacao, setPontuacao] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [vidas, setVidas] = useState(3)
  const [mensagem, setMensagem] = useState("")
  const [jogadorPos, setJogadorPos] = useState(15)
  const [tiros, setTiros] = useState<{ x: number; y: number }[]>([])
  const [inimigos, setInimigos] = useState<{ x: number; y: number; tipo: number }[]>([])
  const [direcaoInimigos, setDirecaoInimigos] = useState(1)
  const [gameLoopId, setGameLoopId] = useState<NodeJS.Timeout | null>(null)
  const gameAreaRef = useRef<HTMLDivElement>(null)
  const [tempoUltimoTiro, setTempoUltimoTiro] = useState(0)
  /* #endregion */

  /* #region Configurações do Jogo */
  const LARGURA_JOGO = 40
  const ALTURA_JOGO = 24
  const VELOCIDADE_JOGO = 200 // ms por frame
  const COOLDOWN_TIRO = 300 // ms entre tiros
  /* #endregion */

  /* #region Iniciar Jogo */
  const iniciarJogo = () => {
    // Resetar estados básicos
    setPontuacao(0)
    setVidas(3)
    setMensagem("")
    setJogadorPos(Math.floor(LARGURA_JOGO / 2))
    setTiros([])

    // Criar formação de inimigos
    const novosInimigos = []

    // Primeira linha - inimigos superiores (30 pontos)
    for (let x = 5; x < LARGURA_JOGO - 5; x += 4) {
      novosInimigos.push({ x, y: 3, tipo: 0 })
    }

    // Segunda e terceira linhas - inimigos médios (20 pontos)
    for (let x = 5; x < LARGURA_JOGO - 5; x += 4) {
      novosInimigos.push({ x, y: 5, tipo: 1 })
      novosInimigos.push({ x, y: 7, tipo: 1 })
    }

    // Quarta e quinta linhas - inimigos inferiores (10 pontos)
    for (let x = 5; x < LARGURA_JOGO - 5; x += 4) {
      novosInimigos.push({ x, y: 9, tipo: 2 })
      novosInimigos.push({ x, y: 11, tipo: 2 })
    }

    setInimigos(novosInimigos)
    setDirecaoInimigos(1)

    // Focar na área de jogo
    setTimeout(() => {
      if (gameAreaRef.current) gameAreaRef.current.focus()
    }, 100)

    setJogando(true)
  }
  /* #endregion */

  /* #region Loop Principal */
  useEffect(() => {
    if (!jogando) return

    const gameLoop = setInterval(() => {
      // Mover tiros para cima
      setTiros((prevTiros) => prevTiros.map((tiro) => ({ ...tiro, y: tiro.y - 1 })).filter((tiro) => tiro.y >= 0))

      // Mover inimigos
      setInimigos((prevInimigos) => {
        // Verificar colisão com bordas
        let tocarBorda = false
        let descerInimigos = false

        prevInimigos.forEach((inimigo) => {
          if (inimigo.x + direcaoInimigos < 2 || inimigo.x + direcaoInimigos >= LARGURA_JOGO - 2) {
            tocarBorda = true
          }
        })

        if (tocarBorda) {
          setDirecaoInimigos((prev) => -prev)
          descerInimigos = true
        }

        // Retornar inimigos com novas posições
        return prevInimigos.map((inimigo) => ({
          ...inimigo,
          x: inimigo.x + (tocarBorda ? 0 : direcaoInimigos),
          y: inimigo.y + (descerInimigos ? 1 : 0),
        }))
      })

      // Verificar colisões entre tiros e inimigos
      setTiros((prevTiros) => {
        const tirosFiltrados = [...prevTiros]

        setInimigos((prevInimigos) => {
          return prevInimigos.filter((inimigo) => {
            // Verificar se algum tiro atingiu este inimigo
            const tiroIndex = tirosFiltrados.findIndex(
              (tiro) => tiro.y === inimigo.y && Math.abs(tiro.x - inimigo.x) <= 2,
            )

            if (tiroIndex !== -1) {
              // Remover o tiro que acertou
              tirosFiltrados.splice(tiroIndex, 1)

              // Aumentar pontuação baseado no tipo de inimigo
              const pontosPorTipo = [30, 20, 10] // Pontos para tipo 0, 1, 2
              setPontuacao((prev) => {
                const novaPontuacao = prev + pontosPorTipo[inimigo.tipo]
                if (novaPontuacao > highScore) {
                  setHighScore(novaPontuacao)
                }
                return novaPontuacao
              })

              // Inimigo foi atingido
              return false
            }
            return true
          })
        })

        return tirosFiltrados
      })

      // Verificar se inimigos chegaram ao jogador
      setInimigos((prevInimigos) => {
        const inimigoNaBase = prevInimigos.find((inimigo) => inimigo.y >= ALTURA_JOGO - 2)

        if (inimigoNaBase) {
          // Perder uma vida
          setVidas((prev) => prev - 1)
          // Remover inimigos que chegaram à base
          return prevInimigos.filter((inimigo) => inimigo.y < ALTURA_JOGO - 2)
        }

        return prevInimigos
      })

      // Verificar condições de fim de jogo
      if (vidas <= 0) {
        setMensagem("GAME OVER!")
        setJogando(false)
        clearInterval(gameLoop)
      }

      if (inimigos.length === 0) {
        setMensagem("VITÓRIA!")
        setJogando(false)
        clearInterval(gameLoop)
      }
    }, VELOCIDADE_JOGO)

    setGameLoopId(gameLoop)

    // Limpar loop ao desmontar
    return () => clearInterval(gameLoop)
  }, [jogando, jogadorPos, direcaoInimigos, vidas, inimigos.length, highScore])
  /* #endregion */

  /* #region Controles */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!jogando) return

    e.preventDefault()

    switch (e.key) {
      case "ArrowLeft":
        setJogadorPos((prev) => Math.max(2, prev - 1))
        break
      case "ArrowRight":
        setJogadorPos((prev) => Math.min(LARGURA_JOGO - 3, prev + 1))
        break
      case " ": // Espaço para atirar
        const agora = Date.now()
        if (agora - tempoUltimoTiro > COOLDOWN_TIRO) {
          setTiros((prev) => [...prev, { x: jogadorPos, y: ALTURA_JOGO - 3 }])
          setTempoUltimoTiro(agora)
        }
        break
    }
  }
  /* #endregion */

  /* #region Renderização */
  const renderizarJogo = () => {
    // Criar matriz para o jogo
    const tela = Array(ALTURA_JOGO)
      .fill(0)
      .map(() => Array(LARGURA_JOGO).fill(" "))

    // Adicionar bordas
    for (let x = 0; x < LARGURA_JOGO; x++) {
      tela[0][x] = "═"
      tela[ALTURA_JOGO - 1][x] = "═"
    }
    for (let y = 0; y < ALTURA_JOGO; y++) {
      tela[y][0] = "║"
      tela[y][LARGURA_JOGO - 1] = "║"
    }

    // Adicionar cantos
    tela[0][0] = "╔"
    tela[0][LARGURA_JOGO - 1] = "╗"
    tela[ALTURA_JOGO - 1][0] = "╚"
    tela[ALTURA_JOGO - 1][LARGURA_JOGO - 1] = "╝"

    // Adicionar pontuação e vidas
    const pontuacaoStr = `SCORE: ${pontuacao.toString().padStart(4, "0")}`
    const highScoreStr = `HI-SCORE: ${highScore.toString().padStart(4, "0")}`
    const vidasStr = `VIDAS: ${vidas}`

    for (let i = 0; i < pontuacaoStr.length; i++) {
      if (i + 2 < LARGURA_JOGO) tela[1][i + 2] = pontuacaoStr[i]
    }

    for (let i = 0; i < highScoreStr.length; i++) {
      if (i + LARGURA_JOGO / 2 < LARGURA_JOGO) tela[1][i + Math.floor(LARGURA_JOGO / 2)] = highScoreStr[i]
    }

    for (let i = 0; i < vidasStr.length; i++) {
      if (LARGURA_JOGO - vidasStr.length - 2 + i < LARGURA_JOGO)
        tela[ALTURA_JOGO - 2][LARGURA_JOGO - vidasStr.length - 2 + i] = vidasStr[i]
    }

    // Adicionar nave do jogador (mais bonita)
    tela[ALTURA_JOGO - 2][jogadorPos - 2] = "/"
    tela[ALTURA_JOGO - 2][jogadorPos - 1] = "="
    tela[ALTURA_JOGO - 2][jogadorPos] = "▲"
    tela[ALTURA_JOGO - 2][jogadorPos + 1] = "="
    tela[ALTURA_JOGO - 2][jogadorPos + 2] = "\\"

    // Adicionar tiros
    tiros.forEach((tiro) => {
      if (tiro.y >= 0 && tiro.y < ALTURA_JOGO) {
        tela[tiro.y][tiro.x] = "│"
      }
    })

    // Adicionar inimigos com designs diferentes por tipo
    inimigos.forEach((inimigo) => {
      // Diferentes designs de inimigos baseados no tipo
      if (inimigo.tipo === 0) {
        // Inimigo tipo 0 (superior)
        tela[inimigo.y][inimigo.x - 1] = "/"
        tela[inimigo.y][inimigo.x] = "Ö"
        tela[inimigo.y][inimigo.x + 1] = "\\"
      } else if (inimigo.tipo === 1) {
        // Inimigo tipo 1 (meio)
        tela[inimigo.y][inimigo.x - 1] = "{"
        tela[inimigo.y][inimigo.x] = "ö"
        tela[inimigo.y][inimigo.x + 1] = "}"
      } else {
        // Inimigo tipo 2 (inferior)
        tela[inimigo.y][inimigo.x - 1] = "("
        tela[inimigo.y][inimigo.x] = "ò"
        tela[inimigo.y][inimigo.x + 1] = ")"
      }
    })

    // Converter matriz para string
    return tela.map((linha) => linha.join("")).join("\n")
  }
  /* #endregion */

  /* #region Parar Jogo */
  const pararJogo = () => {
    if (gameLoopId) {
      clearInterval(gameLoopId)
    }
    setJogando(false)
  }
  /* #endregion */

  return (
    <div className="space-y-4">
      <ArteASCII arte="space-invaders" />

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-primary">Space Invaders Terminal</h2>
        {!jogando ? (
          <button
            onClick={iniciarJogo}
            className="bg-green-800 hover:bg-green-700 text-white px-4 py-2 rounded font-mono"
          >
            INICIAR
          </button>
        ) : (
          <button onClick={pararJogo} className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded font-mono">
            SAIR
          </button>
        )}
      </div>

      <div className="flex justify-center">
        <div
          ref={gameAreaRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="border border-primary/30 rounded-md overflow-hidden bg-black p-2 focus:outline-none focus:border-primary/60 w-full max-w-2xl"
        >
          <pre className="text-white font-mono text-xs whitespace-pre">
            {jogando
              ? renderizarJogo()
              : `
╔══════════════════════════════════════════╗
║                                          ║
║             SPACE INVADERS               ║
║                                          ║
║                                          ║
║       /Ö\\  /Ö\\  /Ö\\  /Ö\\  /Ö\\           ║
║                                          ║
║       {ö}  {ö}  {ö}  {ö}  {ö}           ║
║                                          ║
║       {ö}  {ö}  {ö}  {ö}  {ö}           ║
║                                          ║
║       (ò)  (ò)  (ò)  (ò)  (ò)           ║
║                                          ║
║       (ò)  (ò)  (ò)  (ò)  (ò)           ║
║                                          ║
║                                          ║
║                                          ║
║                                          ║
║                                          ║
║                                          ║
║                                          ║
║              /=▲=\\                       ║
║                                          ║
╚══════════════════════════════════════════╝
              `}
          </pre>
        </div>
      </div>

      {jogando && (
        <div className="flex justify-between items-center text-sm">
          <div className="text-white font-mono">Pontuação: {pontuacao}</div>
          <div className="text-white font-mono">Vidas: {vidas}</div>
        </div>
      )}

      {mensagem && <div className="text-center text-green-500 font-bold font-mono">{mensagem}</div>}

      <div className="text-sm text-muted-foreground font-mono border border-primary/20 p-3 rounded-md bg-black/40">
        <p className="text-center font-bold mb-2">Controles:</p>
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="border border-primary/20 p-2 rounded-md">
            <p className="font-bold">← →</p>
            <p>Mover nave</p>
          </div>
          <div className="border border-primary/20 p-2 rounded-md">
            <p className="font-bold">Espaço</p>
            <p>Atirar</p>
          </div>
        </div>
        <p className="mt-2 text-xs text-green-500 text-center">Destrua todos os invasores para vencer!</p>
        <p className="mt-1 text-xs text-center">Inimigos superiores: 30 pts | Médios: 20 pts | Inferiores: 10 pts</p>
      </div>
    </div>
  )
}
/* #endregion */
