import { Route, Switch } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import 'normalize.css'
import Home from './pages/Home'
import theme from './defaultTheme'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`

const App = (): JSX.Element => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact={true} path="/" component={Home} />
      </Switch>
    </ThemeProvider>
  </>
)

export default App
