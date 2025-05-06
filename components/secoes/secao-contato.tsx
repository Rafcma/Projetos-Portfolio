/* #region Seção Contato */
import { ArteASCII } from "@/components/arte-ascii"
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react"

/* #region Tipos de Contato */
interface InfoContato {
  tipo: "email" | "telefone" | "endereco" | "linkedin" | "github"
  valor: string
  link?: string
  descricao?: string
}
/* #endregion */

export function SecaoContato() {
  /* #region Dados de Contato */
  const contatos: InfoContato[] = [
    {
      tipo: "email",
      valor: "rafa_montealegre@hotmail.com",
      link: "mailto:rafa_montealegre@hotmail.com",
      descricao: "E-mail principal para contato profissional",
    },
    {
      tipo: "telefone",
      valor: "(35) 99231-0000",
      link: "tel:3599231-0000",
      descricao: "Disponível para chamadas e WhatsApp",
    },
    {
      tipo: "endereco",
      valor: "Alfenas, MG",
      descricao: "Disponível para trabalho remoto ou presencial",
    },
    {
      tipo: "linkedin",
      valor: "linkedin.com/in/rafcma",
      link: "https://www.linkedin.com/in/rafcma",
      descricao: "Perfil profissional e networking",
    },
    {
      tipo: "github",
      valor: "github.com/rafcma",
      link: "https://github.com/rafcma",
      descricao: "Repositórios e projetos Open Source",
    },
  ]
  /* #endregion */

  /* #region Função para Obter Ícone */
  const obtem_icone = (tipo: string) => {
    switch (tipo) {
      case "email":
        return <Mail className="h-4 w-4 text-primary" />
      case "telefone":
        return <Phone className="h-4 w-4 text-primary" />
      case "endereco":
        return <MapPin className="h-4 w-4 text-primary" />
      case "linkedin":
        return <Linkedin className="h-4 w-4 text-primary" />
      case "github":
        return <Github className="h-4 w-4 text-primary" />
      default:
        return null
    }
  }
  /* #endregion */

  return (
    <div className="space-y-4">
      <ArteASCII arte="contato" />

      <div className="space-y-4">
        <p className="text-sm text-white/80 mb-4">
          Estou disponível para novos projetos e oportunidades. Entre em contato através de qualquer um dos canais
          abaixo:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {contatos.map((contato, indice) => (
            <div
              key={indice}
              className="p-3 border border-primary/20 rounded-md bg-black/40 hover:bg-black/60 transition-all duration-300 hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black/60 border border-primary/30">
                  {obtem_icone(contato.tipo)}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold text-primary/70 uppercase">
                    {contato.tipo.charAt(0).toUpperCase() + contato.tipo.slice(1)}
                  </h4>

                  {contato.link ? (
                    <a
                      href={contato.link}
                      target={contato.tipo !== "email" && contato.tipo !== "telefone" ? "_blank" : undefined}
                      rel={contato.tipo !== "email" && contato.tipo !== "telefone" ? "noopener noreferrer" : undefined}
                      className="flex items-center text-sm hover:text-primary transition-colors truncate"
                    >
                      <span className="truncate">{contato.valor}</span>
                      {(contato.tipo === "linkedin" || contato.tipo === "github") && (
                        <ExternalLink className="h-3 w-3 ml-1 flex-shrink-0" />
                      )}
                    </a>
                  ) : (
                    <div className="text-sm truncate">{contato.valor}</div>
                  )}

                  {contato.descricao && (
                    <p className="text-[0.65rem] text-muted-foreground mt-1 truncate">{contato.descricao}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 border border-primary/20 rounded-md bg-black/40">
          <div className="text-xs text-center">
            <p className="text-muted-foreground">Disponível para projetos freelance e oportunidades de trabalho.</p>
            <p className="mt-1 text-primary/80 font-mono">
              $ echo "Vamos trabalhar juntos!" | mail rafa_montealegre@hotmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
/* #endregion */
