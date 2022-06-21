import styled from 'styled-components'
import { Theme } from '../../assets'

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 400px;
   background-image: url(${Theme.images.kitchenP});
   background-repeat: no-repeat;
   background-size: cover;
   height: 85.88rem;
   margin: 2.25rem;
`
export const Logo = styled.img`
   height: 3.8rem;
`
export const Nav = styled.nav`
   display: flex;
   margin-top: 4.4rem;
   margin-left: 3.94rem;
`
export const Ul = styled.ul`
   display: flex;
   align-items: center;
   margin-left: 57rem;
`
export const Li = styled.li`
   margin-left: 5.5rem;
   font-size: 1.5rem;
   list-style: none;
`
export const Button = styled.button`
   height: 5.05rem;
   width: 16.4rem;
   margin-left: 5.5rem;
   border: solid black 5px;
   background-color: #d8d2d6;
   font-size: 1.5rem;
`
export const Title = styled.h2`
   font-size: 9.37rem;
   margin: 35rem 0 0 38rem;
`