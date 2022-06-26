import {
   Container,
   Content,
   Logo,
   Nav,
   List,
   ListItem,
   Button,
   TitleContent,
   Title,
} from './style'

import { Theme } from '../../assets'

export function Header() {
   return (
      <Container>
         <Content>
            <Nav>
               <Logo src={Theme.images.logo} alt='Logo' />
               <List>
                  <ListItem>About</ListItem>
                  <ListItem>Recipes</ListItem>
                  <ListItem><Button>Subscribe</Button></ListItem>
               </List>
            </Nav>
            <TitleContent>
               <Title>RECIPES</Title>
            </TitleContent>
         </Content>
      </Container>
   )
}