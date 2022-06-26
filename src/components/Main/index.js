import { Theme } from '../../assets'

import { LastetRecipes } from './LastetRecipes'
import { AboutSection } from './AboutSection'

import {
   Container,
} from './style'

export function Main() {

   return (
      <Container>
         <LastetRecipes />
         <AboutSection />
      </Container>
   )
}