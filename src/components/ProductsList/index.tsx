//import Game from '../../models/Game'
import Massa from '../../models/Massa'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'white' | 'black'
  massas: Massa[]
}

const ProductsList = ({ background, title, massas }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {massas.map((massa) => (
          <Product
            key={massa.id}
            description={massa.description}
            image={massa.image}
            infos={massa.infos}
            title={massa.title}
            button={massa.button}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
