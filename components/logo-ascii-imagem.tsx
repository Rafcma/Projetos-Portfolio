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
    <div className="bg-black p-2 font-mono text-white">
      <pre className="logo-ascii whitespace-pre overflow-x-auto text-white">{conteudo_logo}</pre>
    </div>
  )
}
/* #endregion */
