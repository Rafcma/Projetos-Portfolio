/* #region Seção Educação */
import { ArteASCII } from "@/components/arte-ascii"

/* #region Tipos de Educação */
interface Educacao {
  instituicao: string
  curso: string
  periodo: string
  disciplinas?: string[]
  cursos?: string[]
}
/* #endregion */

export function SecaoEducacao() {
  /* #region Dados de Educação */
  const educacoes: Educacao[] = [
    {
      instituicao: "UNIVERSIDADE PROFESSOR EDSON ANTÔNIO VELANO – UNIFENAS",
      curso: "Bacharelado em Ciências da Computação",
      periodo: "2023 - 2027",
      disciplinas: [
        "Estruturas de Dados",
        "Algoritmos",
        "Programação Orientada a Objetos",
        "Desenvolvimento Web",
        "Banco de Dados",
        "Engenharia de Software",
      ],
    },
    {
      instituicao: "ALURA - CURSO DE TECNOLOGIA",
      curso: "Curso Certificado de Programação em Diversas Áreas em Engenharia de Software",
      periodo: "2020 - 2024",
      cursos: [
        "Desenvolvimento Front-end",
        "Desenvolvimento Back-end",
        "JavaScript e TypeScript",
        "React.js e Next.js",
        "HTML5 e CSS3",
        "Git e GitHub",
      ],
    },
  ]
  /* #endregion */

  return (
    <div className="space-y-4">
      <ArteASCII arte="educacao" />

      <div className="space-y-6">
        {educacoes.map((edu, indice) => (
          <div key={indice} className="p-3 border border-primary/20 rounded bg-primary/5">
            <h3 className="text-primary font-bold">{edu.instituicao}</h3>
            <p className="text-sm">{edu.curso}</p>
            <p className="text-xs text-muted-foreground">{edu.periodo}</p>

            {edu.disciplinas && (
              <div className="mt-2">
                <h4 className="text-sm font-semibold">Disciplinas Relevantes:</h4>
                <ul className="text-xs mt-1 space-y-1 list-disc pl-4">
                  {edu.disciplinas.map((disc, indice_disc) => (
                    <li key={indice_disc}>{disc}</li>
                  ))}
                </ul>
              </div>
            )}

            {edu.cursos && (
              <div className="mt-2">
                <h4 className="text-sm font-semibold">Cursos Concluídos:</h4>
                <ul className="text-xs mt-1 space-y-1 list-disc pl-4">
                  {edu.cursos.map((curso, indice_curso) => (
                    <li key={indice_curso}>{curso}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
/* #endregion */
