import styled from 'styled-components'
import { Theme } from '../../../assets'

export const Content = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1870px  ) {
   justify-content: center;
   flex-direction: column;
  }
`

export const Image = styled.div`
  width: 960px;
  height: 957px;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

   @media (max-width: 1870px  ) {
      width: 100%;
   }
`

export const Description = styled.div`
  width: calc(100% -  960px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 192px;

   @media (max-width: 1870px  ) {
      width: 100%;
   }

   @media (max-width: 768px  ) {
      padding: 67px 10px;
   }
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

export const Text = styled.p`
   font-size: 20px;
   line-height: 32px;
`