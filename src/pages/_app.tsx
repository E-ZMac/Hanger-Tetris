import '../styles/App.css'
import useLocalStorage from '../utils/useLocalStorage'
import { theme } from '../styles/theme'
import { CssBaseline, ThemeProvider } from '../lib/ui'
import { Header } from '../components/Header'
import { Home } from '../components/Home'
import { Footer } from '../components/Footer'


const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <title>Airctaft Tetris</title>
        <Header />
        <main className='main'>
          <Home />
        </main>
        <footer className='footer'>
          <Footer />
        </footer>
      </ThemeProvider>
    </>
  )
}

export default App
