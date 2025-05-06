/* #region Seção Contato */
import { ArteASCII } from "@/components/arte-ascii"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

/* #region Tipos de Contato */
interface InfoContato {
  tipo: "email" | "telefone" | "endereco" | "linkedin" | "github"
  valor: string
  link?: string
}
/* #endregion */

export function SecaoContato() {
  /* #region Dados de Contato */
  const contatos: InfoContato[] = [
    {
      tipo: "email",
      valor: "rafa_montealegre@hotmail.com",
      link: "mailto:rafa_montealegre@hotmail.com",
    },
    {
      tipo: "telefone",
      valor: "(35) 99231-0000",
      link: "tel:3599231-0000",
    },
    {
      tipo: "endereco",
      valor: "Alfenas, MG",
    },
    {
      tipo: "linkedin",
      valor: "linkedin.com/in/rafcma",
      link: "https://www.linkedin.com/in/rafcma",
    },
    {
      tipo: "github",
      valor: "github.com/rafcma",
      link: "https://github.com/rafcma",
    },
  ]
  /* #endregion */

  /* #region Função para Obter Ícone */
  const obtem_icone = (tipo: string) => {
    switch (tipo) {
      case "email":
        return <Mail className="h-4 w-4 mr-2 text-primary" />
      case "telefone":
        return <Phone className="h-4 w-4 mr-2 text-primary" />
      case "endereco":
        return <MapPin className="h-4 w-4 mr-2 text-primary" />
      case "linkedin":
        return <Linkedin className="h-4 w-4 mr-2 text-primary" />
      case "github":
        return <Github className="h-4 w-4 mr-2 text-primary" />
      default:
        return null
    }
  }
  /* #endregion */

  return (
    <div className="space-y-4">
      <ArteASCII arte="contato" />

      <div className="space-y-6">
        <div className="flex flex-col gap-3">
          {contatos.map((contato, indice) =>
            contato.link ? (
              <a
                key={indice}
                href={contato.link}
                target={contato.tipo !== "email" && contato.tipo !== "telefone" ? "_blank" : undefined}
                rel={contato.tipo !== "email" && contato.tipo !== "telefone" ? "noopener noreferrer" : undefined}
                className="flex items-center text-sm hover:text-primary transition-colors"
              >
                {obtem_icone(contato.tipo)}
                {contato.valor}
              </a>
            ) : (
              <div key={indice} className="flex items-center text-sm">
                {obtem_icone(contato.tipo)}
                {contato.valor}
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
/* #endregion */
