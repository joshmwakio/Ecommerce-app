import Styled from 'styled-components'

export const CategoryPageContainer = Styled.div `
  display: flex;
  flex-direction: column;
  
`

export const ItemsContainer = Styled.div `

      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
  
      & .category-item {
        margin-bottom: 30px;
      }

`

export const TitleContainer = Styled.h2 `
      font-size: 38px;
      margin: 0 auto 30px;
`
