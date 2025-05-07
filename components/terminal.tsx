/* #region Terminal */
"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import { TerminalIcon, User, Briefcase, Code, Mail, GraduationCap, Award, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SecaoSobre } from "@/components/secoes/secao-sobre"
import { SecaoEducacao } from "@/components/secoes/secao-educacao"
import { SecaoHabilidades } from "@/components/secoes/secao-habilidades"
import { SecaoExperiencia } from "@/components/secoes/secao-experiencia"
import { SecaoProjetos } from "@/components/secoes/secao-projetos"
import { SecaoCertificacoes } from "@/components/secoes/secao-certificacoes"
import { SecaoContato } from "@/components/secoes/secao-contato"
import { LogoASCIIImagem } from "@/components/logo-ascii-imagem"
import { SecaoSpaceInvaders } from "@/components/secoes/secao-space-invaders"

/* #region Tipos de Terminal */
type Comando = {
  entrada: string
  saida: React.ReactNode
  timestamp: Date
}

interface MapaComandos {
  [comando: string]: {
    acao: () => React.ReactNode
    descricao: string
  }
}
/* #endregion */

export default function Terminal() {
  /* #region Estados e Refs */
  const [entrada, setEntrada] = useState("")
  const [historico_comandos, setHistoricoComandos] = useState<Comando[]>([])
  const [indice_historico, setIndiceHistorico] = useState(-1)
  const [secao_atual, setSecaoAtual] = useState<string | null>(null)
  const ref_entrada = useRef<HTMLInputElement>(null)
  const ref_terminal = useRef<HTMLDivElement>(null)
  /* #endregion */

  /* #region Funções de Utilidade */
  // Usar useCallback para memorizar a função rolar_para_baixo
  const rolar_para_baixo = useCallback(() => {
    if (ref_terminal.current) {
      ref_terminal.current.scrollTop = ref_terminal.current.scrollHeight
    }
  }, [])

  // Definir mapa de comandos disponíveis
  const comandos: MapaComandos = {
    ajuda: {
      acao: () => (
        <div className="space-y-2 text-white">
          <p className="font-bold">Comandos disponíveis:</p>
          <ul className="space-y-1">
            <li>
              <span className="text-white font-bold">sobre</span> - Saiba mais sobre Rafael
            </li>
            <li>
              <span className="text-white font-bold">educacao</span> - Ver formação acadêmica
            </li>
            <li>
              <span className="text-white font-bold">habilidades</span> - Ver habilidades técnicas
            </li>
            <li>
              <span className="text-white font-bold">experiencia</span> - Ver experiência profissional
            </li>
            <li>
              <span className="text-white font-bold">projetos</span> - Ver projetos
            </li>
            <li>
              <span className="text-white font-bold">certificacoes</span> - Ver certificações e competências
            </li>
            <li>
              <span className="text-white font-bold">contato</span> - Obter informações de contato
            </li>
            <li>
              <span className="text-white font-bold">limpar</span> - Limpar o terminal
            </li>
            <li>
              <span className="text-white font-bold">ajuda</span> - Mostrar esta mensagem de ajuda
            </li>
            <li>
              <span className="text-white font-bold">scan</span> - Executar uma verificação de segurança
            </li>
            <li>
              <span className="text-white font-bold">space-invaders</span> - Jogar Space Invaders no terminal
            </li>
          </ul>
        </div>
      ),
      descricao: "Mostrar lista de comandos disponíveis",
    },
    sobre: {
      acao: () => <SecaoSobre />,
      descricao: "Saiba mais sobre Rafael",
    },
    educacao: {
      acao: () => <SecaoEducacao />,
      descricao: "Ver formação acadêmica",
    },
    habilidades: {
      acao: () => <SecaoHabilidades />,
      descricao: "Ver habilidades técnicas",
    },
    experiencia: {
      acao: () => <SecaoExperiencia />,
      descricao: "Ver experiência profissional",
    },
    projetos: {
      acao: () => <SecaoProjetos />,
      descricao: "Ver projetos",
    },
    certificacoes: {
      acao: () => <SecaoCertificacoes />,
      descricao: "Ver certificações e competências",
    },
    contato: {
      acao: () => <SecaoContato />,
      descricao: "Obter informações de contato",
    },
    scan: {
      acao: () => (
        <div className="space-y-2 text-white">
          <p>Executando verificação de segurança...</p>
          <pre className="text-xs my-2 text-white/70">
            {`
[+] Verificando sistema em busca de vulnerabilidades...
[+] Verificando portas abertas...
[+] Analisando tráfego de rede...
[+] Inspecionando integridade de arquivos...
[+] Verificando assinaturas de malware...
[+] Verificando processos suspeitos...
[+] Verificando processos suspeitos...
`}
          </pre>
          <p className="text-green-500">Verificação completa! Nenhuma ameaça detectada. Sistema seguro.</p>
        </div>
      ),
      descricao: "Executar uma verificação de segurança",
    },
    "space-invaders": {
      acao: () => <SecaoSpaceInvaders />,
      descricao: "Jogar Space Invaders no terminal",
    },
  }
  /* #endregion */

  /* #region Efeitos */
  useEffect(() => {
    // Focar entrada ao montar e ao clicar em qualquer lugar no terminal
    ref_entrada.current?.focus()

    const handle_click = () => {
      ref_entrada.current?.focus()
    }

    document.addEventListener("click", handle_click)

    // Adicionar mensagem de boas-vindas
    setHistoricoComandos([
      {
        entrada: "bemvindo",
        saida: (
          <div className="space-y-2">
            <LogoASCIIImagem />
            <p className="font-mono text-white">
              Bem-vindo ao portfólio de programação de Rafael Costa Monte Alegre! Digite ajuda para ver os comandos
              disponíveis.
            </p>
          </div>
        ),
        timestamp: new Date(),
      },
    ])

    return () => {
      document.removeEventListener("click", handle_click)
    }
  }, [])

  useEffect(() => {
    rolar_para_baixo()
  }, [historico_comandos, secao_atual, rolar_para_baixo])
  /* #endregion */

  /* #region Manipuladores de Eventos */
  const handle_submit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!entrada.trim()) return

    const comando = entrada.trim().toLowerCase()
    let saida: React.ReactNode

    // Processar comando
    if (comando === "limpar") {
      setHistoricoComandos([])
      setSecaoAtual(null)
      setEntrada("")
      return
    } else if (comandos[comando]) {
      saida = comandos[comando].acao()
      setSecaoAtual(comando === "ajuda" || comando === "scan" ? null : comando)
    } else {
      saida = (
        <p className="text-white">
          Comando não encontrado: {comando}. Digite <span className="text-white font-bold">ajuda</span> para ver os
          comandos disponíveis.
        </p>
      )
      setSecaoAtual(null)
    }

    // Adicionar comando ao histórico
    setHistoricoComandos((prev) => [
      ...prev,
      {
        entrada: comando,
        saida,
        timestamp: new Date(),
      },
    ])

    // Resetar entrada e índice do histórico
    setEntrada("")
    setIndiceHistorico(-1)
  }

  const handle_key_down = (e: React.KeyboardEvent) => {
    // Lidar com setas para cima/baixo para navegação no histórico de comandos
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (indice_historico < historico_comandos.length - 1) {
        const novo_indice = indice_historico + 1
        setIndiceHistorico(novo_indice)
        setEntrada(historico_comandos[historico_comandos.length - 1 - novo_indice].entrada)
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (indice_historico > 0) {
        const novo_indice = indice_historico - 1
        setIndiceHistorico(novo_indice)
        setEntrada(historico_comandos[historico_comandos.length - 1 - novo_indice].entrada)
      } else if (indice_historico === 0) {
        setIndiceHistorico(-1)
        setEntrada("")
      }
    }
  }

  const executar_comando = (cmd: string) => {
    setEntrada(cmd)
    handle_submit({ preventDefault: () => {} } as React.FormEvent)
  }
  /* #endregion */

  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto">
      {/* #region Cabeçalho do Terminal */}
      <div className="bg-black border border-white/30 rounded-t-md p-2 flex items-center">
        <TerminalIcon className="h-4 w-4 text-white mr-2" />
        <span className="text-xs sm:text-sm font-mono text-white truncate">
          rafael@programador ~ {secao_atual ? `/${secao_atual}` : ""}
        </span>
      </div>
      {/* #endregion */}

      {/* #region Área de Saída do Terminal */}
      <div
        ref={ref_terminal}
        className="flex-1 bg-black border-x border-white/30 p-2 sm:p-4 overflow-y-auto font-mono text-xs sm:text-sm mobile-terminal-height"
      >
        {historico_comandos.map((cmd, index) => (
          <div key={index} className="mb-3 sm:mb-4">
            <div className="flex items-center text-white/70">
              <span className="text-white mr-2">$</span>
              <span className="break-all">{cmd.entrada}</span>
            </div>
            <div className="mt-1 ml-2 sm:ml-4 text-xs sm:text-sm">{cmd.saida}</div>
          </div>
        ))}
      </div>
      {/* #endregion */}

      {/* #region Área de Entrada do Terminal */}
      <div className="bg-black border border-white/30 rounded-b-md p-2">
        <form onSubmit={handle_submit} className="flex items-center">
          <span className="text-white mr-2">$</span>
          <input
            ref={ref_entrada}
            type="text"
            value={entrada}
            onChange={(e) => setEntrada(e.target.value)}
            onKeyDown={handle_key_down}
            className="flex-1 bg-transparent border-none outline-none font-mono text-white text-xs sm:text-sm"
            aria-label="Entrada do terminal"
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
      {/* #endregion */}

      {/* #region Barra de Navegação Rápida */}
      <nav className="mt-4 flex flex-wrap justify-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => executar_comando("sobre")}
          className="text-xs bg-black/50 hover:bg-black/70 text-white border-white/30 transition-all duration-300 hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.2)]"
        >
          <User className="h-3 w-3 mr-1" />
          <span className="hidden xs:inline">Sobre</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => executar_comando("educacao")}
          className="text-xs bg-black/50 hover:bg-black/70 text-white border-white/30 transition-all duration-300 hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.2)]"
        >
          <GraduationCap className="h-3 w-3 mr-1" />
          <span className="hidden xs:inline">Educação</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => executar_comando("habilidades")}
          className="text-xs bg-black/50 hover:bg-black/70 text-white border-white/30 transition-all duration-300 hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.2)]"
        >
          <Shield className="h-3 w-3 mr-1" />
          <span className="hidden xs:inline">Habilidades</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => executar_comando("experiencia")}
          className="text-xs bg-black/50 hover:bg-black/70 text-white border-white/30 transition-all duration-300 hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.2)]"
        >
          <Briefcase className="h-3 w-3 mr-1" />
          <span className="hidden xs:inline">Experiência</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => executar_comando("projetos")}
          className="text-xs bg-black/50 hover:bg-black/70 text-white border-white/30 transition-all duration-300 hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.2)]"
        >
          <Code className="h-3 w-3 mr-1" />
          <span className="hidden xs:inline">Projetos</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => executar_comando("certificacoes")}
          className="text-xs bg-black/50 hover:bg-black/70 text-white border-white/30 transition-all duration-300 hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.2)]"
        >
          <Award className="h-3 w-3 mr-1" />
          <span className="hidden xs:inline">Certificações</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => executar_comando("contato")}
          className="text-xs bg-black/50 hover:bg-black/70 text-white border-white/30 transition-all duration-300 hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.2)]"
        >
          <Mail className="h-3 w-3 mr-1" />
          <span className="hidden xs:inline">Contato</span>
        </Button>
      </nav>
      {/* #endregion */}
    </div>
  )
}
/* #endregion */
