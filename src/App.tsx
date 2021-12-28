import './styles.css'
import Count from './components/Counter'

export function App() {
  return (
    <div>
      <Count />
      <h1> environment: {process.env.NODE_ENV}</h1>
    </div>
  )
}
