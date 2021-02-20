import styled from 'styled-components'

export const Wrapper = styled.div`
  text-align: center;
`

export const Header = styled.header`
  padding: ${(p) => p.theme.spacing05};
  color: ${(p) => p.theme.colorBg};
  background-color: ${(p) => p.theme.colorText};
`

export const Intro = styled.p`
  font-size: large;
`

export const StyledUl = styled.ul`
  list-style: none;
`

export const StyledLi = styled.li`
  display: inline-block;
  padding: 1rem;
`
