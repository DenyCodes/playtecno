import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    cores: {
      primaria: Interpolation<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, never>>
      up: string
      card: string
      fundo: string
      pb: string
      preto: string
      texto: string
      textoSecundario: string
      titulo: string
      h2: string
      span: string
      iconFilter: string
    }
  }

}

