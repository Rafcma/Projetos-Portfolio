/* #region Seção Habilidades */
import { ArteASCII } from "@/components/arte-ascii"

/* #region Tipos de Habilidades */
type NivelHabilidade = 1 | 2 | 3 | 4 | 5 // 1: Iniciante, 2: Intermediário, 3: Avançado, 4: Profissional, 5: Especialista

interface Habilidade {
  nome: string
  nivel: NivelHabilidade
}

interface GrupoHabilidades {
  titulo: string
  habilidades: Habilidade[]
}
/* #endregion */

export function SecaoHabilidades() {
  /* #region Dados de Habilidades */
  const grupos_habilidades: GrupoHabilidades[] = [
    {
      titulo: "Linguagens de Programação & Ferramentas",
      habilidades: [
        { nome: "JavaScript", nivel: 3 },
        { nome: "HTML5", nivel: 3 },
        { nome: "CSS3", nivel: 3 },
        { nome: ".NET", nivel: 3 },
        { nome: "React.js", nivel: 3 },
        { nome: "Next.js", nivel: 3 },
        { nome: "TypeScript", nivel: 2 },
        { nome: "Git/GitHub", nivel: 3 },
      ],
    },
    {
      titulo: "Frameworks & Bibliotecas",
      habilidades: [
        { nome: "REST APIs", nivel: 2 },
        { nome: "Bootstrap", nivel: 1 },
        { nome: "Node.js", nivel: 1 },
        { nome: "SQL", nivel: 1 },
        { nome: "Azure DevOps", nivel: 1 },
        { nome: "Sass", nivel: 1 },
        { nome: "Docker", nivel: 1 },
      ],
    },
    {
      titulo: "Design & UI/UX",
      habilidades: [
        { nome: "Figma", nivel: 2 },
        { nome: "Design Responsivo", nivel: 3 },
        { nome: "UI/UX", nivel: 3 },
      ],
    },
    {
      titulo: "Habilidades Interpessoais",
      habilidades: [
        { nome: "Comunicação", nivel: 4 },
        { nome: "Trabalho em Equipe", nivel: 3 },
        { nome: "Resolução de Problemas", nivel: 4 },
        { nome: "Pensamento Crítico", nivel: 3 },
        { nome: "Gestão de Projetos", nivel: 3 },
        { nome: "Iniciativa", nivel: 4 },
      ],
    },
    {
      titulo: "Idiomas",
      habilidades: [
        { nome: "Inglês (C2)", nivel: 5 },
        { nome: "Português (Nativo)", nivel: 5 },
      ],
    },
    {
      titulo: "Áreas de Especialização",
      habilidades: [
        { nome: "Desenvolvimento Web", nivel: 4 },
        { nome: "Interfaces Responsivas", nivel: 3 },
        { nome: "Experiência do Usuário", nivel: 3 },
        { nome: "Otimização de Performance", nivel: 2 },
        { nome: "Desenvolvimento de Jogos", nivel: 2 },
      ],
    },
  ]
  /* #endregion */

  /* #region Função para Converter Nível em Porcentagem */
  const nivel_para_porcentagem = (nivel: NivelHabilidade): number => {
    const mapa_porcentagem = {
      1: 40, // Iniciante
      2: 60, // Intermediário
      3: 80, // Avançado
      4: 90, // Profissional
      5: 100, // Especialista
    }
    return mapa_porcentagem[nivel]
  }
  /* #endregion */

  return (
    <div className="space-y-4">
      <ArteASCII arte="habilidades" />

      <div className="space-y-6">
        {grupos_habilidades.map((grupo, indice) => (
          <div key={indice}>
            <h3 className="text-primary font-bold mb-2">{grupo.titulo}</h3>
            <div className="space-y-2">
              {grupo.habilidades.map((habilidade, indice_hab) => (
                <BarraHabilidade
                  key={indice_hab}
                  nome={habilidade.nome}
                  porcentagem={nivel_para_porcentagem(habilidade.nivel)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function BarraHabilidade({ nome, porcentagem }: { nome: string; porcentagem: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>{nome}</span>
        <span>{porcentagem}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full"
          style={{ width: `${porcentagem}%` }}
          role="progressbar"
          aria-valuenow={porcentagem}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Nível de habilidade em ${nome}: ${porcentagem}%`}
        />
      </div>
    </div>
  )
}
/* #endregion */
