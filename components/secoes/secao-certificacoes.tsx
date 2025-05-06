/* #region Seção Certificações */
import { ArteASCII } from "@/components/arte-ascii"
import { Award, Trophy, Flag, BookOpen, Code, Database } from "lucide-react"

/* #region Tipos de Certificações */
interface Certificacao {
  titulo: string
  descricao?: string
  data?: string
  categoria?: string
}

interface ProjetoDestacado {
  nome: string
}

interface HabilidadeTecnica {
  nome: string
  nivel: string
}
/* #endregion */

export function SecaoCertificacoes() {
  /* #region Dados de Certificações */
  const certificacoes: Certificacao[] = [
    // Certificados originais
    {
      titulo: "EC English Course",
      descricao: "Proficiência C2 em Inglês",
      data: "2019",
      categoria: "idiomas",
    },

    // Novos certificados da Alura
    // Certificados de 2024
    {
      titulo: "MySQL: conhecendo a ferramenta",
      data: "Agosto 2024",
      categoria: "banco-dados",
    },
    {
      titulo: "C: avançando na linguagem",
      data: "Abril 2024",
      categoria: "programacao",
    },
    {
      titulo: "C#: aplicando a Orientação a Objetos",
      data: "Março 2024",
      categoria: "programacao",
    },
    {
      titulo: "C#: criando sua primeira aplicação",
      data: "Março 2024",
      categoria: "programacao",
    },
    {
      titulo: "C#: dominando Orientação a Objetos",
      data: "Março 2024",
      categoria: "programacao",
    },
    {
      titulo: "HTML e CSS: Classes, posicionamento e Flexbox",
      data: "Março 2024",
      categoria: "web",
    },
    {
      titulo: "C: conhecendo a Linguagem das Linguagens",
      data: "Fevereiro 2024",
      categoria: "programacao",
    },

    // Certificados de 2023
    {
      titulo: "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags",
      data: "Abril 2023",
      categoria: "web",
    },
    {
      titulo: "Arquitetura de computadores: por trás de como seu programa funciona",
      data: "Janeiro 2023",
      categoria: "computacao",
    },
    {
      titulo: "HTML5 e CSS3 parte 1: crie uma página da Web",
      data: "Janeiro 2023",
      categoria: "web",
    },
    {
      titulo: "HTML5 e CSS3 parte 2: posicionamento, listas e navegação",
      data: "Janeiro 2023",
      categoria: "web",
    },
    {
      titulo: "HTML5 e CSS3 parte 3: trabalhando com formulários e tabelas",
      data: "Janeiro 2023",
      categoria: "web",
    },
    {
      titulo: "HTML5 e CSS3 parte 4: avançando no CSS",
      data: "Janeiro 2023",
      categoria: "web",
    },
    {
      titulo: "Lógica de programação: comece em lógica com o jogo Pong e JavaScript",
      data: "Janeiro 2023",
      categoria: "programacao",
    },
    {
      titulo: "Lógica de programação: laços e listas com JavaScript",
      data: "Janeiro 2023",
      categoria: "programacao",
    },
  ]

  const projetos_destacados: ProjetoDestacado[] = [
    { nome: "Juliamoura.online - Site LandingPage para Psicóloga" },
    { nome: "SmartFitApp - Sistema de Gerenciamento de Academia" },
    { nome: "Itaoca 2D - Jogo 2D Desenvolvido em GODOT 4" },
  ]

  const habilidades_tecnicas: HabilidadeTecnica[] = [
    { nome: "JavaScript", nivel: "Nível 3 - Avançado" },
    { nome: "HTML5/CSS3", nivel: "Nível 3 - Avançado" },
    { nome: "React.js/Next.js", nivel: "Nível 3 - Avançado" },
    { nome: ".NET", nivel: "Nível 3 - Avançado" },
    { nome: "C#", nivel: "Nível 3 - Avançado" },
    { nome: "SQL", nivel: "Nível 2 - Intermediário" },
  ]
  /* #endregion */

  // Agrupar certificados por categoria
  const certificados_web = certificacoes.filter((cert) => cert.categoria === "web")
  const certificados_programacao = certificacoes.filter((cert) => cert.categoria === "programacao")
  const certificados_banco_dados = certificacoes.filter((cert) => cert.categoria === "banco-dados")
  const certificados_computacao = certificacoes.filter((cert) => cert.categoria === "computacao")
  const certificados_idiomas = certificacoes.filter((cert) => cert.categoria === "idiomas")
  const certificados_outros = certificacoes.filter((cert) => !cert.categoria)

  return (
    <div className="space-y-4">
      <ArteASCII arte="certificacoes" />

      <div className="space-y-6">
        {/* Certificados de Desenvolvimento Web */}
        <div>
          <h3 className="text-primary font-bold mb-2 flex items-center">
            <Code className="h-4 w-4 mr-2" />
            Certificados de Desenvolvimento Web
          </h3>
          <ul className="space-y-2 pl-6">
            {certificados_web.map((cert, indice) => (
              <li key={indice} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <p className="font-medium">{cert.titulo}</p>
                  {cert.descricao && <p className="text-xs text-muted-foreground">{cert.descricao}</p>}
                  {cert.data && <p className="text-xs text-muted-foreground">Alura - {cert.data}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Certificados de Programação */}
        <div>
          <h3 className="text-primary font-bold mb-2 flex items-center">
            <BookOpen className="h-4 w-4 mr-2" />
            Certificados de Programação
          </h3>
          <ul className="space-y-2 pl-6">
            {certificados_programacao.map((cert, indice) => (
              <li key={indice} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <p className="font-medium">{cert.titulo}</p>
                  {cert.descricao && <p className="text-xs text-muted-foreground">{cert.descricao}</p>}
                  {cert.data && <p className="text-xs text-muted-foreground">Alura - {cert.data}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Certificados de Banco de Dados */}
        {certificados_banco_dados.length > 0 && (
          <div>
            <h3 className="text-primary font-bold mb-2 flex items-center">
              <Database className="h-4 w-4 mr-2" />
              Certificados de Banco de Dados
            </h3>
            <ul className="space-y-2 pl-6">
              {certificados_banco_dados.map((cert, indice) => (
                <li key={indice} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <p className="font-medium">{cert.titulo}</p>
                    {cert.descricao && <p className="text-xs text-muted-foreground">{cert.descricao}</p>}
                    {cert.data && <p className="text-xs text-muted-foreground">Alura - {cert.data}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Certificados de Computação */}
        {certificados_computacao.length > 0 && (
          <div>
            <h3 className="text-primary font-bold mb-2 flex items-center">
              <Award className="h-4 w-4 mr-2" />
              Certificados de Computação
            </h3>
            <ul className="space-y-2 pl-6">
              {certificados_computacao.map((cert, indice) => (
                <li key={indice} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <p className="font-medium">{cert.titulo}</p>
                    {cert.descricao && <p className="text-xs text-muted-foreground">{cert.descricao}</p>}
                    {cert.data && <p className="text-xs text-muted-foreground">Alura - {cert.data}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Certificados de Idiomas */}
        {certificados_idiomas.length > 0 && (
          <div>
            <h3 className="text-primary font-bold mb-2 flex items-center">
              <Award className="h-4 w-4 mr-2" />
              Certificados de Idiomas
            </h3>
            <ul className="space-y-2 pl-6">
              {certificados_idiomas.map((cert, indice) => (
                <li key={indice} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <p className="font-medium">{cert.titulo}</p>
                    {cert.descricao && <p className="text-xs text-muted-foreground">{cert.descricao}</p>}
                    {cert.data && <p className="text-xs text-muted-foreground">{cert.data}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Projetos Destacados */}
        <div>
          <h3 className="text-primary font-bold mb-2 flex items-center">
            <Trophy className="h-4 w-4 mr-2" />
            Projetos Destacados
          </h3>
          <ul className="space-y-2 pl-6">
            {projetos_destacados.map((projeto, indice) => (
              <li key={indice} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <p>{projeto.nome}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Habilidades Técnicas */}
        <div>
          <h3 className="text-primary font-bold mb-2 flex items-center">
            <Flag className="h-4 w-4 mr-2" />
            Habilidades Técnicas
          </h3>
          <ul className="space-y-2 pl-6">
            {habilidades_tecnicas.map((hab, indice) => (
              <li key={indice} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <p>
                  {hab.nome} ({hab.nivel})
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
/* #endregion */
