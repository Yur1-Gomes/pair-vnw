import { Theme } from '../../assets'

import {
   Container,
   Content,
   Social,
   Icon,
   List,
   ListItem,
   Disclaimer
} from './style'

export function Footer() {
   const icons = [
      { src: Theme.icons.social.instagram, alt: 'Instagram icon' },
      { src: Theme.icons.social.twitter, alt: 'Twitter icon' },
      { src: Theme.icons.social.facebook, alt: 'Facebook icon' },
      { src: Theme.icons.social.pinterest, alt: 'Pinterest icon' },
   ]

   const disclaimer = `Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/`

   const list = ['About', 'Recipes', 'Subscribe']

   return (
      <Container>
         <Content>
            <Social>
               {icons.map((icon) => <Icon src={icon.src} alt={icon.alt} />)}
            </Social>
            <List>
               {list.map((item) => <ListItem>{item}</ListItem>)}
            </List>
         </Content>
         <Disclaimer>
            <p>{disclaimer}</p>
         </Disclaimer>
      </Container>
   )
}