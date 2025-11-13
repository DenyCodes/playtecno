// Declarações para Módulos de Imagem (.svg, .png, .jpg)
// Isso diz ao TypeScript que qualquer import de um arquivo com essas extensões
// deve ser tratado como uma string (o caminho para o recurso) ou 'any'.

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

// Para o erro TS2307 de módulos CSS (visto no log de build anterior)
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
