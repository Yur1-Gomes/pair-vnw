import {
   Content,
   Image,
   Description,
   Title
} from './style'

export function Card({ title, img }) {
   return (
      <Content>
         <Image img={img} />
         <Description>
            <Title>{title}</Title>
         </Description>
      </Content>
   )
}