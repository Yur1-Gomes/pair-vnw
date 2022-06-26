import styled from 'styled-components'
import { Theme } from '../../assets'

export const Content = styled.div`
   width: 536px;
`

export const Image = styled.div`
   width: 100%;
   height: 389px;
   background-image: url(${props => props.img});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
`

export const Description = styled.div`
   width: 100%;
   height: 389px;
   background-color: ${Theme.colors.white};
   box-shadow: 0px 7px 6px #00000029;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const Title = styled.h2`
   width: 100%;
   height: fit-content;
   font-size: 32px;
   display: flex;
   flex-direction: column-reverse;
   align-items: center;
   
   ::after {
      content: '';
      width: 104px;
      border-bottom: 5px solid ${Theme.colors.darkGray};
      margin-bottom: 20px;
   }
`