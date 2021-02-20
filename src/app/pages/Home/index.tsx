import { useEffect } from 'react'
import logo from './react.svg'
import { Wrapper, Header, Intro, StyledUl, StyledLi } from './styles'

const Home = (): JSX.Element => {
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000/')

    ws.onopen = () => {
      console.log('websocket is connected!!')
    }

    ws.onmessage = (evt) => {
      const { action, data } = JSON.parse(evt.data)
      console.log(action, data)
    }
  }, [])

  return (
    <Wrapper>
      <Header>
        <img src={logo} className="Home-logo" alt="logo" />
        <h2>Welcome to @publicJorn's Razzle-TS-socket starter</h2>
      </Header>

      <Intro>
        To get started, edit <code>src/App.tsx</code> or{' '}
        <code>src/Home.tsx</code> and save to reload.
      </Intro>

      <StyledUl>
        <StyledLi>
          <a href="https://github.com/jaredpalmer/razzle">Docs</a>
        </StyledLi>
        <StyledLi>
          <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
        </StyledLi>
        <StyledLi>
          <a href="https://palmer.chat">Community Slack</a>
        </StyledLi>
      </StyledUl>
    </Wrapper>
  )
}

export default Home
