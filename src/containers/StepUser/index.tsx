import { FunctionComponent } from 'react'
import { Header, List, Section } from './styles'
import phone from '../../assets/images/pag2/headphones-3 1.svg'
import line from '../../assets/images/Line 91.svg'
import archive from '../../assets/images/archive-content 1.svg'
import chartbar from '../../assets/images/chart-bar-33 1.svg'
import chart from '../../assets/images/chart-3 1.svg'
import folder from '../../assets/images/folder-favorite 1.svg'
import board from '../../assets/images/board-2 1.svg'

const StepUser = () => (
  <Section>
    <>
      <Header>
        <div className="content">
          <b className="cadaEtapaCentrada">Cada etapa centrada no usuário</b>
          <div className="tudoParaO">
            Tudo para o sucesso do seu negócio em um só lugar
          </div>
        </div>
      </Header>
      <List>
        <div className="list">
          <div className="div">
            <div className="headphones31Parent">
              <img className="headphones31Icon" alt="" src={phone} />
              <b className="suporte">Suporte</b>
              <div className="todoNossoTime">
                Todo nosso time de suporte em sua disposição 24 horas
              </div>
            </div>
          </div>
          <div className="div1">
            <b className="produtos">Produtos</b>
            <div className="seusProdutosEm">
              Seus produtos em vitrine! Mostre para todo o mundo!
            </div>
            <img className="archiveContent1Icon" alt="" src={archive} />
          </div>
          <div className="div2">
            <div className="chartBar331Parent">
              <img className="headphones31Icon" alt="" src={chartbar} />
              <b className="suporte">Vendas</b>
              <div className="todoNossoTime">
                Melhorando e simplificando suas vendas!
              </div>
            </div>
          </div>
          <div className="div3">
            <b className="produtos">Qualidade</b>
            <div className="seusProdutosEm">
              Garantimos qualidade e eficiência para você e seus clientes!
            </div>
            <img className="folderFavorite1Icon" alt="" src={folder} />
          </div>
          <div className="div4">
            <b className="integrao">Integração</b>
            <div className="integreComSeu">
              Integre com seu blog, instagram e outras plataformas!
            </div>
            <img className="board21Icon" alt="" src={board} />
          </div>
          <div className="div5">
            <b className="resultados">Resultados</b>
            <div className="nossaEquipeEst">
              Nossa equipe está disposta para garantir resultados!
            </div>
            <img className="chart31Icon" alt="" src={chart} />
          </div>
          <img className="linesIcon" alt="" src={line} />
        </div>
      </List>
    </>
  </Section>
)

export default StepUser
