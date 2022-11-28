import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
    <Routes/>
    </BrowserRouter>
  )
}

export default App
