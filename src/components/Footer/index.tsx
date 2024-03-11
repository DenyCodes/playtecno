import {
  Descricao,
  Descricao2,
  FaleConosco1,
  Foot,
  Layer,
  Layer2,
  QuebraLinha,
  Rodape,
  Secs,
  Titulo,
  Titulo2,
  Titulo4,
  TituloRodape
} from './styles'

const Footer = () => (
  <Foot>
    <div>
      <Layer>
        <Titulo>PlayTecno</Titulo>
        <Descricao>Dê um play na sua presença online</Descricao>
      </Layer>
      <Layer2>
        <Titulo2>E-mail</Titulo2>
        <Descricao2>playtecno@outlook.com.br</Descricao2>
      </Layer2>
      <QuebraLinha />
      <Titulo4>Política de privacidade</Titulo4>
      <Rodape>
        <TituloRodape>
          © 2023 Play Tecno CNPJ 52.579.007/0001-03. - Todos os direitos
          reservados
        </TituloRodape>
      </Rodape>
    </div>
  </Foot>
)

export default Footer
