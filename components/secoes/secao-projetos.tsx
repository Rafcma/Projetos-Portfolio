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
    {
      titulo: "Empresa C.M.J. - Web Design",
      descricao:
        "Empresa de Web Design realizada em conjunto a dois sócios, desenvolvimento de aplicações web, manutenção de códigos, Criação de Interfaces interativas e responsivas.",
      tecnologias: ["Next.js", "Figma", "WordPress", "Elementor", "HTML", "CSS"],
      diagrama: `
 +-------------+     +----------------+     +----------------+
 | Next.js     |---->| Figma          |---->| Interfaces     |
 | Framework   |     | Design         |     | Responsivas    |
 +-------------+     +----------------+
       |                    |                      |
       v                    v                      v
 +-------------+     +--------------+     +----------------+
 | WordPress   |     | Elementor    |     | Manutenção     |
 | CMS         |     | Builder      |     | de Código      |
 +-------------+     +--------------+     +----------------+
       |                    |                      |
       +--------------------+----------------------+
                            |
                            v
                     +---------------+
                     | Aplicações    |
                     | Web Completas |
                     +---------------+
`,
    },
  ]
  /* #endregion */

  return (
    <div className="space-y-4">
      <ArteASCII arte="projetos" />

      <div className="space-y-4 sm:space-y-6">
        {projetos.map((projeto, indice) => (
          <div
            key={indice}
            className="p-2 sm:p-3 border border-primary/20 rounded bg-primary/5 hover:bg-primary/10 transition-all duration-300"
          >
            <h3 className="text-primary font-bold text-sm sm:text-base">{projeto.titulo}</h3>
            <div className="hide-scrollbar overflow-x-auto">
              <pre className="text-[0.5rem] xs:text-[0.6rem] sm:text-xs my-1 sm:my-2 text-muted-foreground">
                {projeto.diagrama}
              </pre>
            </div>
            <p className="text-xs sm:text-sm mb-1 sm:mb-2">{projeto.descricao}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {projeto.tecnologias.map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-block px-1.5 py-0.5 text-[0.6rem] rounded bg-black/40 border border-primary/20 text-primary/90"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-2 text-[0.6rem] text-muted-foreground font-mono">
              <span className="text-primary/70">$</span> git commit -m "Projeto: {projeto.titulo.split(" - ")[0]}"
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
/* #endregion */
