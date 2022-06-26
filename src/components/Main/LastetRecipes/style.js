import styled from 'styled-components'
import { Theme } from '../../../assets'

export const Container = styled.div`
   width: 100%;
   /* height: 100vh; */
   background-color: ${Theme.colors.grayLight};
   padding: 245px 100px 0 100px;

   @media (max-width: 768px  ) {
      padding: 245px 16px 20px 16px;
   }
`

export const Content = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   flex-direction: column;
   padding-bottom: 100px;
`

export const Title = styled.h2`
   width: 100%;
   height: fit-content;
   text-transform: uppercase;
   font-size: 40px;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 100px;
   font-weight: 600;
   color: ${Theme.colors.darkGray};

   ::after {
      content: '';
      width: 104px;
      border-bottom: 7px solid ${Theme.colors.darkGray};
      margin-top: 25px;
   }

   @media (max-width: 768px  ) {
      font-size: max(50px, 10vw);

      ::after {
         width: max(50px, 30vw);
         border-bottom: 10px solid ${Theme.colors.darkGray};
      }
   }
`

export const ContentCards = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   gap: 50px;

   @media (max-width: 1907px) {
      justify-content: center;
   }

   @media (max-width: 768px  ) {
      gap: 15px;
   }
`