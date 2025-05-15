/* #region Logo ASCII Imagem */
"use client"

export function LogoASCIIImagem() {
  /* #region Conteúdo do Logo */
  const conteudo_logo = `
$ echo "RAFAEL MONTE ALEGRE"
RAFAEL MONTE ALEGRE

$ whoami
rafael@programador

$ pwd
/home/rafael/portfolio

$ ls
sobre  educacao  habilidades  experiencia  projetos  certificacoes  contato
`
  /* #endregion */

  return (
    <div className="bg-black font-mono text-white mb-4">
      <pre className="text-white whitespace-pre overflow-x-auto text-xs sm:text-sm md:text-base">{conteudo_logo}</pre>
    </div>
  )
}
/* #endregion */
