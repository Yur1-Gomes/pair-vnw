import { Theme } from '../../assets'

import { LastetRecipes } from './LastetRecipes'

import {
   Container,
   Content,
   Image,
   Description,
   Title,
   Text
} from './style'

export function Main() {

   const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
   Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt 
   libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend 
   tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. 
   Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. 
   Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, 
   nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.`

   return (
      <Container>
         <LastetRecipes />
         <Content>
            <Image src={Theme.images.spoon} />
            <Description >
               <Title>About</Title>
               <Text>{text}</Text>
            </Description>
         </Content>
      </Container>
   )
}