/* #region Logo ASCII Imagem */
"use client"

export function LogoASCIIImagem() {
  /* #region Conteúdo do Logo */
  const LOGO_ASCII = `
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
      <pre className="font-mono text-xs leading-[0.8] xs:text-sm sm:text-base text-white whitespace-pre overflow-x-auto logo-ascii terminal-text">
        {LOGO_ASCII}
      </pre>
    </div>
  )
}
/* #endregion */
