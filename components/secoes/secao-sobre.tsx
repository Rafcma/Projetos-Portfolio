/* #region Seção Sobre */
import { ArteASCII } from "@/components/arte-ascii"

/* #region Tipos de Informações */
interface InfoRapida {
  rotulo: string
  valor: string
}
/* #endregion */

export function SecaoSobre() {
  /* #region Dados de Informações Rápidas */
  const informacoes_rapidas: InfoRapida[] = [
    { rotulo: "Localização", valor: "Alfenas, MG" },
    { rotulo: "Educação", valor: "Bacharelado em Ciências da Computação, UNIFENAS" },
    { rotulo: "Especialidade", valor: "Desenvolvimento FrontEnd/BackEnd, Interfaces Responsivas" },
    { rotulo: "Idiomas", valor: "Inglês (C2), Português (Nativo)" },
  ]
  /* #endregion */

  return (
    <div className="space-y-4">
      <ArteASCII arte="sobre" />

      <div className="space-y-3">
        <p>
          Olá! Sou Rafael Costa Monte Alegre, um programador com afinidade em tecnologia e desenvolvimento de software.
        </p>

        <p>
          Com experiência como Freelancer, foco no desenvolvimento de interfaces responsivas e intuitivas para diversos
          projetos web.
        </p>

        <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold mb-2">Perfil Pessoal:</h3>
          <div className="space-y-2 text-sm">
            <p>
              Sou alguém que prospera com desafios. Sempre que me dizem que algo é impossível, meu primeiro pensamento é
              "como posso tornar isso possível?" Essa mentalidade me impulsiona tanto na vida pessoal quanto
              profissional.
            </p>

            <p>
              Tenho conhecimento prático de projetos acadêmicos e pessoais, onde pude aplicar conceitos de lógica de
              programação, estruturas de dados e algoritmos.
            </p>

            <p>
              Sou entusiasta em aprender novas tecnologias e estou sempre em busca de desafios que me permitam crescer
              profissionalmente.
            </p>

            <p>
              Com habilidades analíticas, de resolução de problemas, pensar criticamente, encontrar soluções eficazes,
              trabalho em equipe e comunicação, estou pronto para me desenvolver e crescer profissionalmente no campo da
              programação.
            </p>
          </div>
        </div>

        <p>Sou apaixonado por criar soluções visuais com foco em usabilidade, performance e experiência do usuário.</p>

        <div className="mt-2 p-3 border border-primary/20 rounded bg-primary/5">
          <h3 className="text-primary font-bold mb-2">Informações Rápidas:</h3>
          <ul className="space-y-1">
            {informacoes_rapidas.map((info, indice) => (
              <li key={indice}>
                <span className="text-muted-foreground">{info.rotulo}:</span> {info.valor}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
/* #endregion */
