import { ReactNode } from 'react'

class Produto {
  image: string
  title: string
  description: string
  id: number
  static id: ReactNode

  constructor(image: string, title: string, description: string, id: number) {
    this.image = image
    this.title = title
    this.description = description
    this.id = id
  }
}

export default Produto
