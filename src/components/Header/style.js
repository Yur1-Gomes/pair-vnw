import styled from 'styled-components'
import { Theme } from '../../assets'


export const Container = styled.div`
   padding: 20px;
`

export const Content = styled.div`
   width: 100%;
   height: 1303px;
   background-image: url(${Theme.images.kitchenP});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   padding: 45px 54px 0px 63px;
`

export const Nav = styled.nav`
   width: 100%;
   height: 81px;
   display: flex;
   justify-content: space-between;
`

export const Logo = styled.img`
   width: 68px;
   height: 61px;
`

export const List = styled.ul`
   display: flex;
   align-items: center;
`

export const ListItem = styled.li`
   width: fit-content;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 10px;
   text-transform: uppercase;
   font-size: 24px;
   padding: 0 40px;
`

export const Button = styled.button`
   width: 263px;
   height: 100%;
   background-color: transparent;
   text-transform: uppercase;
   font-size: 24px;
   border: 5px solid ${Theme.colors.darkGray};
`


export const TitleContent = styled.div`
   display: flex;
   height: calc(100% - 81px);
   justify-content: center;
   align-items: center;
`

export const Title = styled.h2`
   font-size: 150px;
`