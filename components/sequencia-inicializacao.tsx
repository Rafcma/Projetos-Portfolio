/* #region Sequência de Inicialização */
"use client"

import { useEffect, useState } from "react"

export default function SequenciaInicializacao() {
  /* #region Estados e Dados */
  const [indice_mensagem_atual, setIndiceMensagemAtual] = useState(0)

  const mensagens_inicializacao = [
    "Inicializando sistema...",
    "Carregando kernel...",
    "Montando sistemas de arquivos...",
    "Iniciando serviços de segurança...",
    "Verificando ameaças...",
    "Carregando dados do portfólio...",
    "Inicializando interface de terminal seguro...",
  ]
  /* #endregion */

  /* #region Efeitos */
  useEffect(() => {
    if (indice_mensagem_atual < mensagens_inicializacao.length) {
      const temporizador = setTimeout(() => {
        setIndiceMensagemAtual((prev) => prev + 1)
      }, 400)

      return () => clearTimeout(temporizador)
    }
  }, [indice_mensagem_atual, mensagens_inicializacao.length])
  /* #endregion */

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-2xl bg-black/70 p-8 rounded-md border border-primary/30 font-mono text-primary">
        {/* #region Logo ASCII */}
        <div className="mb-6 text-center">
          <pre className="text-xs sm:text-sm md:text-base whitespace-pre overflow-x-auto">
            {`
 ██████╗   █████╗  ███████╗  ██████╗ ███╗   ███╗  █████╗  
 ██╔══██╗ ██╔══██╗ ██╔════╝ ██╔════╝ ████╗ ████║ ██╔══██╗ 
 ██████╔╝ ███████║ █████╗   ██║      ██╔████╔██║ ███████║ 
 ██╔══██╗ ██╔══██║ ██╔══╝   ██║      ██║╚██╔╝██║ ██╔══██║ 
 ██║  ██║ ██║  ██║ ██║      ╚██████╗ ██║ ╚═╝ ██║ ██║  ██║ 
 ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝       ╚═════╝ ╚═╝     ╚═╝ ╚═╝  ╚═╝ 
                                                                                                  
`}
          </pre>
        </div>
        {/* #endregion */}

        {/* #region Mensagens de Inicialização */}
        <div className="space-y-2">
          {mensagens_inicializacao.slice(0, indice_mensagem_atual).map((mensagem, index) => (
            <div key={index} className="flex">
              <span className="text-primary mr-2">&gt;</span>
              <span className="text-foreground/90">{mensagem}</span>
              {index === indice_mensagem_atual - 1 && index !== mensagens_inicializacao.length - 1 && (
                <span className="ml-1 cursor-blink">_</span>
              )}
            </div>
          ))}

          {indice_mensagem_atual === mensagens_inicializacao.length && (
            <div className="flex mt-4">
              <span className="text-primary mr-2">&gt;</span>
              <span className="typing-animation text-foreground/90">
                Sequência de inicialização completa. Bem-vindo ao terminal seguro de Rafael.
              </span>
              <span className="cursor-blink">_</span>
            </div>
          )}
        </div>
        {/* #endregion */}
      </div>
    </div>
  )
}
/* #endregion */
