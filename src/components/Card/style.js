import styled from 'styled-components'
import { Theme } from '../../assets'

export const Content = styled.div`
   width: 536px;

   @media (max-width: 768px  ) {
      width: 100%
   }
`

export const Image = styled.div`
   width: 100%;
   height: 389px;
   background-image: url(${props => props.img});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;

   @media (max-width: 768px  ) {
      height: max(278px, 60vw);
   }
`

export const Description = styled.div`
   width: 100%;
   height: 389px;
   background-color: ${Theme.colors.white};
   box-shadow: 0px 7px 6px #00000029;
   display: flex;
   justify-content: center;
   align-items: center;

   @media (max-width: 768px  ) {
      height: max(280px, 60vw);
   }
`

export const Title = styled.h2`
   width: 100%;
   height: fit-content;
   font-size: min(32px, 8vw);
   display: flex;
   flex-direction: column-reverse;
   align-items: center;
   color: ${Theme.colors.darkGray};
   font-weight: 400;

   ::after {
      content: '';
      width: 50px;
      border-bottom: 7px solid ${Theme.colors.darkGray};
      margin-bottom: 30px;
   }

   @media (max-width: 768px  ) {
      font-size: max(32px, 8vw);

      ::after {
         width: max(50px, 8vw);
         border-bottom: 10px solid ${Theme.colors.darkGray};
      }
   }
`