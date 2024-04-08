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
  let imageSrc
  if (image === 'First') {
    imageSrc = first
  } else if (image === 'Second') {
    imageSrc = second
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
          <p>
            Estou extremamente satisfeita, Eles foram incrivelmente
            profissionais desde o início.
          </p>
        </div>
        <div className="Name">
          <h3>Jenny Wilson</h3>
        </div>
      </Content>
    </Div>
  )
}

export default Card
