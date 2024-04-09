import React from 'react'
import first from '../../../assets/images/firstperson.png'
import second from '../../../assets/images/secondperson.png'
import review from '../../../assets/images/Review.svg'
import { Content, Div, Review } from './styles'

export type Props = {
  image: string
  name: string
}

const Card = ({ image, name }: Props) => {
  let imageSrc, paraText, h3Text
  if (image === 'First') {
    imageSrc = first
    paraText =
      'Estou extremamente satisfeita, Eles foram incrivelmente profissionais desde o início.'
    h3Text = 'Jenny Wilson'
  } else if (image === 'Second') {
    imageSrc = second
    paraText =
      'O resultado final superou todas as minhas expectativas - o design é moderno, a navegação é intuitiva e a funcionalidade é impecável.'
    h3Text = 'Devon Lane'
  }

  return (
    <Div>
      <div className="imagePessoa1">
        <img src={imageSrc} />
      </div>
      <Review>
        <img className="Stars" src={review} />
      </Review>
      <Content>
        <div className="Texto">
          <p>{paraText}</p>
        </div>
        <div className="Name">
          <h3>{h3Text}</h3>
        </div>
      </Content>
    </Div>
  )
}

export default Card
