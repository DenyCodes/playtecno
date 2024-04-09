import checkbox from '../../assets/images/Check icon.svg'
import zap from '../../assets/images/zap.svg'
import layer from '../../assets/images/2-layers.svg'
import layer2 from '../../assets/images/3-layers.svg'
import band1 from '../../assets/images/Right band 1.png'
import band2 from '../../assets/images/Right band 2.png'
import band23 from '../../assets/images/Right band 3.png'
import band3 from '../../assets/images/Left band 2.png'
import band4 from '../../assets/images/Left band 1.png'

import { FunctionComponent } from 'react'
import styles from './Frame.module.css'

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.rightBand3Parent}>
      <div className="AllCards">
        <img className={styles.rightBand3} alt="" src={band23} />
        <img className={styles.rightBand2} alt="" src={band2} />
        <img className={styles.rightBand1} alt="" src={band1} />
        <img className={styles.leftBand1} alt="" src={band4} />
        <img className={styles.leftBand2} alt="" src={band3} />
        <div className={styles.pricingTierCard}>
          <div className={styles.header}>
            <div className={styles.headingAndPrice}>
              <div className={styles.headingAndIcon}>
                <img className={styles.featuredIcon} alt="" src={zap} />
                <div className={styles.heading}>Plano Básico</div>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.checkItems}>
              <div className={styles.checkItemText}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>
                    Gratuito para testar por 7 dias
                  </div>
                </div>
              </div>
              <div className={styles.checkItemText}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Acesso a loja online</div>
                </div>
              </div>
              <div className={styles.checkItemText}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Suporte 24H</div>
                </div>
              </div>
              <div className={styles.checkItemText3}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Another feature</div>
                </div>
              </div>
              <div className={styles.checkItemText3}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Another feature</div>
                </div>
              </div>
              <div className={styles.checkItemText3}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Another feature</div>
                </div>
              </div>
              <div className={styles.checkItemText3}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Another feature</div>
                </div>
              </div>
              <div className={styles.checkItemText3}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Another feature</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.actions}>
              <div className={styles.button}>
                <div className={styles.buttonBase}>
                  <div className={styles.text8}>Começar agora</div>
                </div>
              </div>
              <div className={styles.button1}>
                <div className={styles.buttonBase1}>
                  <div className={styles.text8}>Chat to sales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pricingTierCard1}>
          <div className={styles.header}>
            <div className={styles.headingAndPrice}>
              <div className={styles.headingAndIcon}>
                <img className={styles.featuredIcon} alt="" src={layer} />
                <div className={styles.heading}>Plano Plus</div>
              </div>
            </div>
          </div>
          <div className={styles.content1}>
            <div className={styles.checkItems}>
              <div className={styles.checkItemText}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>200+ produtos</div>
                </div>
              </div>
              <div className={styles.checkItemText}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Website personalizado</div>
                </div>
              </div>
              <div className={styles.checkItemText}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Listagem google maps</div>
                </div>
              </div>
              <div className={styles.checkItemText}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Suporte 24h</div>
                </div>
              </div>
              <div className={styles.checkItemText}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Hospedagem</div>
                </div>
              </div>
              <div className={styles.checkItemText13}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Another feature</div>
                </div>
              </div>
              <div className={styles.checkItemText13}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Another feature</div>
                </div>
              </div>
              <div className={styles.checkItemText13}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Another feature</div>
                </div>
              </div>
              <div className={styles.checkItemText13}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Another feature</div>
                </div>
              </div>
              <div className={styles.checkItemText13}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Another feature</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer1}>
            <div className={styles.actions}>
              <div className={styles.button}>
                <div className={styles.buttonBase}>
                  <div className={styles.text8}>Começar agora</div>
                </div>
              </div>
              <div className={styles.button1}>
                <div className={styles.buttonBase1}>
                  <div className={styles.text8}>Chat to sales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pricingTierCard2}>
          <div className={styles.header}>
            <div className={styles.headingAndPrice}>
              <div className={styles.headingAndIcon}>
                <img className={styles.featuredIcon} alt="" src={layer2} />
                <div className={styles.heading}>Plano Premium</div>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.checkItems2}>
              <div className={styles.checkItemText}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Produtos ilimitados</div>
                </div>
              </div>
              <div className={styles.checkItemText}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Loja personalizada</div>
                </div>
              </div>
              <div className={styles.checkItemText}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Listagem google maps</div>
                </div>
              </div>
              <div className={styles.checkItemText}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Suporte 24h</div>
                </div>
              </div>
              <div className={styles.checkItemText}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text26}>Hospedagem</div>
                </div>
              </div>
              <div className={styles.checkItemText}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text26}>Atendimento personalizado</div>
                </div>
              </div>
              <div className={styles.checkItemText3}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Another feature</div>
                </div>
              </div>
              <div className={styles.checkItemText3}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Another feature</div>
                </div>
              </div>
              <div className={styles.checkItemText3}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Another feature</div>
                </div>
              </div>
              <div className={styles.checkItemText3}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Another feature</div>
                </div>
              </div>
              <div className={styles.checkItemText3}>
                <img className={styles.checkIcon} alt="" src={checkbox} />
                <div className={styles.textWrap}>
                  <div className={styles.text}>Another feature</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.actions}>
              <div className={styles.button}>
                <div className={styles.buttonBase}>
                  <div className={styles.text8}>Começar agora</div>
                </div>
              </div>
              <div className={styles.button1}>
                <div className={styles.buttonBase1}>
                  <div className={styles.text8}>Chat to sales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.badge}>
          <div className={styles.badgeBase}>
            <div className={styles.text35}>Conheça nossos planos</div>
          </div>
        </div>
        <div className={styles.heading3}>Planos para todos os negócios</div>
        <div className={styles.supportingText}>
          Preços simples e transparentes que crescem com você. Experimente
          qualquer plano gratuitamente por 30 dias.
        </div>
      </div>
    </div>
  )
}

export default Frame
