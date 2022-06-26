import styled from 'styled-components'
import { Theme } from '../../../assets'

export const Container = styled.div`
   width: 100%;
   /* height: 100vh; */
   background-color: ${Theme.colors.grayLight};
   padding: 245px 100px 0 100px;
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

   ::after {
      content: '';
      width: 104px;
      border-bottom: 5px solid ${Theme.colors.darkGray};
      margin-top: 15px;
   }
`

export const ContentCards = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;

   @media (max-width: 1870px) {
      justify-content: center;
      gap: 50px;
   }
`