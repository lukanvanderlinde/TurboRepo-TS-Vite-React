import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

const element = document.getElementById('root')

if (!element) throw new Error('Root element not found')

const root = ReactDOM.createRoot(element)

const App = () => (
  <StrictMode>
    <h1>Hello World</h1>
  </StrictMode>
)

root.render(<App />)
