import Tag from '../Tag'

import { Card, Descricao, Titulo, Infos, TextoButtonMassa } from './styles'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  button: string
}

const Product = ({ title, description, infos, image, button }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <div>
      <TextoButtonMassa>{button}</TextoButtonMassa>
    </div>
  </Card>
)

export default Product
