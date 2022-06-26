import { Container } from '../index';
import { Theme } from '../../assets'

import {
   Content,
   BottomBox,
   Social,
   Media,
   BottomList,
   Li,
   Disclaimer
} from './style'

export function Footer() {
   return (
      <Container>
         <Content>
           <BottomBox>
            <Social>
               <Media src={Theme.icons.social.instagram} alt=""/>
               <Media src={Theme.icons.social.twitter} alt=""/>
               <Media src={Theme.icons.social.facebook} alt=""/>
               <Media src={Theme.icons.social.pinterest} alt=""/>
            </Social>
            <BottomList>
               <Li>ABOUT</Li>
               <Li>RECIPES</Li>
               <Li>SUBSCRIBE</Li>
            </BottomList>
           </BottomBox> 
           <Disclaimer>
            <p>
              Layout produzido por Vai na Web para fins exclusivamente
              educacionais. Referência:
              https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/
            </p>
          </Disclaimer>
         </Content>
      </Container>
   )
}