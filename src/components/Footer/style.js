import styled from 'styled-components'
import { Theme } from '../../assets'

export const Container = styled.div`
  width: 100%;
  background-color: ${Theme.colors.grayLight};
`

export const Content = styled.div`
  min-height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;

  @media (max-width: 1075px) {
    flex-direction: column-reverse;
    padding: 100px;
  } 
`;

export const Social = styled.div`
  width: fit-content;
  gap: 10px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1075px) {
    padding-top: 100px;
  } 
`;

export const Icon = styled.img`
  width: 57px;
  height: 57px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 1075px) {
    flex-direction: column;
  } 
`;

export const ListItem = styled.li`
  padding: 20px;
  font-size: 24px;
  color: ${Theme.colors.darkGray};
  text-transform: uppercase;
`;

export const Disclaimer = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Theme.colors.mineralGreen};
  text-align: center;
  padding: 10px;
  color: ${Theme.colors.white};
  font-size: min(16px, 2vw);
`; 
