import styled, { CreateStyled } from '@emotion/styled'

type Theme = {
  colors: {
    navbarColor: string
    backgroundColor: string
    blogBar: string
    sectionTitle: string
    sectionTitleAccent: string
    aboutText: string
    aboutTextAccent: string
  }
}

export default styled as CreateStyled<Theme>
