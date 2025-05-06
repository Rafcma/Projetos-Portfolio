/* #region Seção Certificações */
import { ArteASCII } from "@/components/arte-ascii"
import { Award, Trophy, Flag } from "lucide-react"

/* #region Tipos de Certificações */
interface Certificacao {
  titulo: string
  descricao: string
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
    {
      titulo: "EC English Course",
      descricao: "Proficiência C2 em Inglês (2019)",
    },
    {
      titulo: "Certificados Alura",
      descricao: "Diversos cursos de programação e desenvolvimento",
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
  ]
  /* #endregion */

  return (
    <div className="space-y-4">
      <ArteASCII arte="certificacoes" />

      <div className="space-y-6">
        <div>
          <h3 className="text-primary font-bold mb-2 flex items-center">
            <Award className="h-4 w-4 mr-2" />
            Certificações
          </h3>
          <ul className="space-y-2 pl-6">
            {certificacoes.map((cert, indice) => (
              <li key={indice} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <div>
                  <p className="font-medium">{cert.titulo}</p>
                  <p className="text-xs text-muted-foreground">{cert.descricao}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

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
