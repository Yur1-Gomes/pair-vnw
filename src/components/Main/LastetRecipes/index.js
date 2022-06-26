import { Card } from '../../index.js'
import { Theme } from '../../../assets'

import {
   Container,
   Content,
   Title,
   ContentCards
} from './style'

export function LastetRecipes() {
   const list = [
      { title: 'Red Velvet Cake', img: Theme.images.cakeG },
      { title: 'Margherita Pizza', img: Theme.images.margherita },
      { title: 'Peanut Smoothie', img: Theme.images.smoothie }
   ]

   return (
      <Container>
         <Content>
            <Title>Lastet Recipes</Title>

            <ContentCards>
               {list.map((item, index) => (
                  <Card key={index} title={item.title} img={item.img} />
               ))}
            </ContentCards>
         </Content>
      </Container>
   )
}