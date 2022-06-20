import { Container } from '../index'

import {
   Content,
   Title
} from './style'

import { Theme } from '../../assets'

export function Main() {
   return (
      <Container>
         <Content>
            <Title>Main</Title>
            <img src={Theme.images.cakeP} alt='Imagem de um bolo' />
         </Content>
      </Container>
   )
}