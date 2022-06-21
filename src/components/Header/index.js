import { Container } from '../index'

import {
   Content,
   Title,
   Logo,
   Nav,
   Ul,
   Li,
   Button
} from './style'

import { Theme } from '../../assets'

export function Header() {
   return (
      <Container>
         <Content>
            <Nav>
               <Logo src={Theme.icons.logo} alt='Logo' />
               <Ul>
                  <Li>ABOUT</Li>
                  <Li>RECIPES</Li>
                  <Button>SUBSCRIBE</Button>
               </Ul>
            </Nav>
               <Title>RECIPES</Title>
         </Content>
      </Container>
   )
}