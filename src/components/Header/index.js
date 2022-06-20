import { Container } from '../index'

import {
   Content,
   Title
} from './style'

import { Theme } from '../../assets'

export function Header() {
   return (
      <Container>
         <Content>
            <Title>Header</Title>
            <img src={Theme.icons.logo} alt='Logo' />
         </Content>
      </Container>
   )
}