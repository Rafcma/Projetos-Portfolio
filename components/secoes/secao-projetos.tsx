/* #region Seção Projetos */
import { ArteASCII } from "@/components/arte-ascii"

/* #region Tipos de Projetos */
interface Projeto {
  titulo: string
  descricao: string
  tecnologias: string[]
  diagrama: string
}
/* #endregion */

export function SecaoProjetos() {
  /* #region Dados de Projetos */
  const projetos: Projeto[] = [
    {
      titulo: "Juliamoura.online - Site LandingPage",
      descricao:
        "Site desenvolvido para uma psicóloga utilizando WordPress e Elementor. Todas as funcionalidades inclusas e totalmente responsivo.",
      tecnologias: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript"],
      diagrama: `
  +-------------+     +----------------+     +----------------+
  | WordPress   |---->| Elementor      |---->| Responsividade |
  | CMS         |     | Page Builder   |     | Mobile-First   |
  +-------------+     +----------------+
        |                    |                      |
        |                    v                      |
        |             +--------------+              |
        +------------>| SEO          |<-------------+
                      | Otimização   |
                      +--------------+
                             |
                             v
                      +---------------+
                      | Conversão de  |
                      | Visitantes    |
                      +---------------+
`,
    },
    {
      titulo: "SmartFitApp - Sistema de Gerenciamento de Academia",
      descricao:
        "Projeto pessoal desenvolvido para apresentação da faculdade. Sistema com gerenciamento de alunos, treinos, exercícios, personal, adm. Modelo desenvolvido para venda.",
      tecnologias: [".NET", "MVC", "Identity", "SQL", "Bootstrap"],
      diagrama: `
  +-------------+     +----------------+     +----------------+
  | MVC         |---->| Identity       |---->| Gerenciamento  |
  | Architecture|     | Framework      |     | de Usuários    |
  +-------------+     +----------------+
        |                                            |
        v                                            v
  +-------------+                            +----------------+
  | Treinos e   |                            | Dashboard      |
  | Exercícios  |                            | Administrativo |
  +-------------+                            +----------------+
`,
    },
    {
      titulo: "Itaoca 2D – Jogo 2D",
      descricao:
        "Projeto pessoal de desenvolvimento para games, aprendizado sobre organização de código, lógica de programação aplicada a objetos. Programado na IDE GODOT4, um jogo inspirado em VampireHunters.",
      tecnologias: ["GODOT 4", "GDScript", "Game Design"],
      diagrama: `
  +-------------+     +----------------+     +----------------+
  | GODOT 4     |---->| GDScript       |---->| Game Physics   |
  | Engine      |     | Programming    |     | & Mechanics    |
  +-------------+     +----------------+
        |                                            |
        v                                            v
  +-------------+                            +----------------+
  | Sprite      |                            | Game Logic     |
  | Animation   |                            | & Progression  |
  +-------------+                            +----------------+
`,
    },
  ]
  /* #endregion */

  return (
    <div className="space-y-4">
      <ArteASCII arte="projetos" />

      <div className="space-y-6">
        {projetos.map((projeto, indice) => (
          <div key={indice} className="p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold">{projeto.titulo}</h3>
            <pre className="text-xs my-2 text-muted-foreground">{projeto.diagrama}</pre>
            <p className="text-sm mb-2">{projeto.descricao}</p>
            <p className="text-xs text-muted-foreground mb-2">Tecnologias: {projeto.tecnologias.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
/* #endregion */
