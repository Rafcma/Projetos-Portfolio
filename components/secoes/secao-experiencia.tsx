/* #region Seção Experiência */
import { ArteASCII } from "@/components/arte-ascii"

/* #region Tipos de Experiência */
interface Experiencia {
  cargo: string
  empresa: string
  local: string
  periodo: string
  responsabilidades: string[]
}
/* #endregion */

export function SecaoExperiencia() {
  /* #region Dados de Experiência */
  const experiencias: Experiencia[] = [
    {
      cargo: "Desenvolvedor FrontEnd/BackEnd",
      empresa: "Freelancer",
      local: "Alfenas, MG",
      periodo: "Junho 2024 - Presente",
      responsabilidades: [
        "Desenvolvimento de interfaces responsivas e intuitivas para diversos projetos web",
        "Criação de soluções visuais com foco em usabilidade, performance e experiência do usuário",
        "Utilização de tecnologias como React, HTML, CSS, Next.js, JavaScript e tailwind",
        "Colaboração com clientes para entender necessidades, sugerir melhorias e entregar soluções eficientes",
      ],
    },
    {
      cargo: "Assistente de Gerente",
      empresa: "Imobiliária Monte Alegre",
      local: "Alfenas, MG",
      periodo: "Junho 2023 - Presente",
      responsabilidades: [
        "Desenvolvimento de habilidades interpessoais durante tempo empregado",
        "Aprimoramento de competências: Atendimento ao cliente, alto grau de iniciativa, comunicação",
        "Gestão de projetos e trabalho em equipe",
      ],
    },
  ]
  /* #endregion */

  return (
    <div className="space-y-4">
      <ArteASCII arte="experiencia" />

      <div className="space-y-6">
        {experiencias.map((exp, indice) => (
          <div key={indice} className="relative pl-5 border-l border-primary/30">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1" />
            <div className="mb-1">
              <h3 className="text-primary font-bold">{exp.cargo}</h3>
              <p className="text-xs text-muted-foreground">
                {exp.empresa}, {exp.local} | {exp.periodo}
              </p>
            </div>
            <ul className="text-sm space-y-1 list-disc pl-4">
              {exp.responsabilidades.map((resp, indice_resp) => (
                <li key={indice_resp}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
/* #endregion */
